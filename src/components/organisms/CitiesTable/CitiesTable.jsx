import React from "react";
import PropTypes from "prop-types";

import { Badge, Select, Typography } from "../../atoms";
import { SparkLinesTrack } from "../../molecules";

import { fixVal } from "../../../helper/helper";

export const CitiesTable = ({ cities, checkStatus, timeSince }) => {
  /* Text */
  const mid = "16px";
  const large = "18px";
  const bold = "500";
  const normal = "400";

  const lineHeight = "32px";
  const lineHeightMid = "22px";
  return (
    <div className="Container__Table__Main">
      <table className="Container__Table">
        <thead>
          <tr>
            <th>
              <Typography
                lineHeight={lineHeight}
                text={"City"}
                size={large}
                color={"black"}
                fontWeight={bold}
              />
            </th>
            <th>
              <Typography
                lineHeight={lineHeight}
                text={"Current AQI"}
                size={large}
                fontWeight={bold}
              />
            </th>
            <th>
              <Typography
                lineHeight={lineHeight}
                text={"Last Updated"}
                size={large}
                fontWeight={bold}
              />
            </th>
            <th>
              <Typography
                lineHeight={lineHeight}
                text={"Graph"}
                size={large}
                fontWeight={bold}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {cities.map(({ aqi, city, elapsed, data }) => {
            return (
              <tr key={aqi}>
                <td>
                  <Typography
                    lineHeight={lineHeightMid}
                    text={city}
                    size={mid}
                    fontWeight={normal}
                  />
                </td>
                <td>
                  <div className="Table__Body_AQI">
                    <p
                      style={{
                        background: checkStatus({ aqi })
                          ? `${checkStatus({ aqi }).color}80`
                          : "gray",
                      }}
                    >
                      {fixVal(aqi, 2)}
                    </p>
                  </div>
                </td>
                <td>
                  <Typography
                    lineHeight={lineHeightMid}
                    text={timeSince(elapsed)}
                    size={mid}
                    fontWeight={normal}
                  />
                </td>
                <td>
                  <SparkLinesTrack data={data} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

CitiesTable.propTypes = {
  cities: PropTypes.instanceOf(Array).isRequired,
  checkStatus: PropTypes.func.isRequired,
  timeSince: PropTypes.func.isRequired,
};
