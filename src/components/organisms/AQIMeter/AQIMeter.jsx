import React from "react";
import PropTypes from "prop-types";
import { Badge, Select, Typography } from "../../atoms";
import ReactSpeedometer from "react-d3-speedometer";
import { fixVal } from "../../../helper/helper";

export const AQIMeter = ({
  cities,
  handleMeterChange,
  meter,
  checkStatus,
  timeSince,
}) => {
  /* Text */
  const large = "14px";
  const bold = "500";
  const normal = "400";

  return (
    <div className="__Container">
      <div className="AQIMeter">
        <div className="AQIMeter__Left">
          <div className="AQIMeter__Left__Speedometer">
            <ReactSpeedometer
              height={220}
              maxValue={500}
              value={meter && meter.aqi ? fixVal(meter.aqi, 2) : 0}
              needleColor="#124677"
              segments={6}
              maxSegmentLabels={6}
              customSegmentStops={[0, 50, 100, 200, 300, 400, 500]}
              segmentColors={[
                "#55A84F",
                "#A3C853",
                "#FFF851",
                "#F29C3E",
                "#E93F33",
                "#AF2D24",
              ]}
              textColor="gray"
              valueTextFontSize={"32"}
              paddingVertical={24}
            />
          </div>
        </div>
        <div className="AQIMeter__Right">
          <div className="AQIMeter__Right__Container">
            <Select
              onChange={handleMeterChange}
              options={cities}
              optionKey="city"
              className="AQIMeter__Right__Container__Select"
            />
          </div>
          <br />
          <div className="AQIMeter__Right__Status">
            <Badge
              bg={checkStatus(meter) ? checkStatus(meter).color : "black"}
              borderColor="white"
              radius="50%"
              padding="1rem"
            />
            <Typography
              lineHeight={"48px"}
              text={checkStatus(meter) ? checkStatus(meter).status : "N/A"}
              size={large}
              color={checkStatus(meter) ? checkStatus(meter).color : "black"}
              fontWeight={bold}
            />
          </div>
          <div className="AQIMeter__Update">
            <span>Last Update :</span>
            <Typography
              lineHeight={"32px"}
              text={meter.elapsed ? timeSince(meter.elapsed) : "N/A"}
              size={large}
              color={"black"}
              fontWeight={normal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AQIMeter.propTypes = {
  cities: PropTypes.instanceOf(Array).isRequired,
  handleMeterChange: PropTypes.func.isRequired,
  meter: PropTypes.instanceOf(Object).isRequired,
  checkStatus: PropTypes.func.isRequired,
  timeSince: PropTypes.func.isRequired,
};
