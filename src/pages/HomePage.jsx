import React, { useState, useEffect } from "react";
import { initSocket, subscribeWS } from "../api/socket";

// components
import { AQIMeter, CompareCharts } from "../components/organisms";
import { CitiesTable } from "../components/organisms/CitiesTable/CitiesTable";
import { timeSince, checkStatus } from "../helper/helper";

const HomePage = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [meter, SetMeter] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [originalData, setOriginalData] = useState([]);
  const [meterFlag, setMeterFlag] = useState(false);

  useEffect(() => {
    initSocket();
  }, []);

  useEffect(() => {
    subscribeWS((error, WSCity) => {
      if (error) return;
      let __cities = cities;
      WSCity.map((updatedCityWS) => {
        let cityIndex = __cities.findIndex(
          (city) => city.city === updatedCityWS.city
        );

        let updateCity = __cities.filter(
          (city) => city.city === updatedCityWS.city
        )[0];

        if (updateCity) {
          if (updateCity.data) {
            updateCity.data.push(updatedCityWS.aqi);
          } else {
            updateCity.data = [];
          }

          updateCity.elapsed = new Date().getTime();
          updateCity.aqi = updatedCityWS.aqi;
        }

        cityIndex >= 0
          ? (__cities[cityIndex] = updateCity)
          : __cities.push(updatedCityWS);
        return 1;
      });

      if (meterFlag) {
        let meterCity = __cities.filter(
          (city) => city.city === selectedCity.city
        );

        if (meterCity && meterCity.length) {
          SetMeter(meterCity[0]);
        }
      }

      setOriginalData(WSCity);
      return setCities(__cities);
    });
  });

  const handleMeterChange = (e) => {
    let city = cities.filter((city) => city.city === e.target.value);
    if (city && city.length) {
      setMeterFlag(true);
      setSelectedCity(city[0]);
    } else {
      setMeterFlag(false);
      SetMeter({ aqi: 0, city: "" });
    }
  };

  return (
    <div className="Container">
      <AQIMeter
        checkStatus={checkStatus}
        meter={meter}
        handleMeterChange={handleMeterChange}
        cities={cities}
        timeSince={timeSince}
      />

      <CompareCharts cities={cities} timeSince={timeSince} />
      <CitiesTable
        cities={cities}
        checkStatus={checkStatus}
        meter={meter}
        timeSince={timeSince}
      />
    </div>
  );
};

export default HomePage;
