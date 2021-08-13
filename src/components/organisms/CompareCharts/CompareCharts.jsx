import React, { useState, useEffect } from "react";
import config from "../../../constants/config.json";

import PropTypes from "prop-types";
import { Typography } from "../../atoms";
import { CompareCard } from "../../molecules";
import { Accordion } from "../../organisms";

import { fixVal } from "../../../helper/helper";

export const CompareCharts = ({ cities, timeSince }) => {
  const { HEADERS } = config;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth <= 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <div className="Compare__Table">
      {isMobile ? (
        <div className="accordion">
          {HEADERS.map(({ status, start, end, color }) => {
            return (
              <div key={status}>
                <Accordion
                  color={`${color}60`}
                  title={`${status} (${start}-${end})`}
                >
                  {cities.map(({ elapsed, city, aqi }) => {
                    return (
                      <div className="Compare__Table__Card" key={city}>
                        {aqi >= start && aqi <= end ? (
                          <CompareCard
                            name={city}
                            aqi={fixVal(aqi, 0)}
                            color={`${color}60`}
                            time={timeSince(elapsed)}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    );
                  })}
                </Accordion>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          {HEADERS.map(({ status, start, end, color }) => {
            return (
              <div key={status}>
                <div
                  style={{ background: `${color}` }}
                  className={`Compare__Table__Column frostBox`}
                >
                  <Typography
                    lineHeight={"36px"}
                    text={`${status} (${start}-${end})`}
                    size={"14px"}
                    fontWeight={"500"}
                  />
                </div>

                {cities.map(({ elapsed, city, aqi }) => {
                  return (
                    <div className="Compare__Table__Card" key={city}>
                      {aqi >= start && aqi <= end ? (
                        <CompareCard
                          name={city}
                          aqi={fixVal(aqi, 0)}
                          color={`${color}60`}
                          time={timeSince(elapsed)}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

CompareCharts.defaultProps = {};

CompareCharts.propTypes = {
  cities: PropTypes.instanceOf(Array).isRequired,
  timeSince: PropTypes.func.isRequired,
};
