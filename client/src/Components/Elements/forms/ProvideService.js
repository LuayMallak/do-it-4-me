import React, { memo, useEffect } from "react";
import { useOptionsFetch } from "../../../data/useOptionsFetch";

import DateRangePicker from "../shared/DateRangePicker";
import PriceSlider from "../searchResult/PriceSlider";
import { StyledProvideService } from "../../Styled-Components/StyledProvideService";

const ProvideService = memo((props) => {
  const [{ services }] = useOptionsFetch();
  useEffect(() => {
    return () => {
      props.cleanupProviderData();
    };
  }, []);
  return (
    <StyledProvideService>
      <div className="serviceContainer">
        <h2>Services</h2>
        <div>
          {services.map((item) => (
            <div key={item._id} className="serviceItem">
              <input
                type="checkbox"
                key={item._id}
                name={item._id}
                onChange={props.handleServiceChange}
              />
              <label htmlFor={item._id}>{item.value} </label>
            </div>
          ))}
        </div>
      </div>
      <div className="availabilityContainer">
        <h2>Availability</h2>
        <DateRangePicker
          onChange={(d,s)=>props.handleDateChange(d,s)}
          value={props.value}
        />
      </div>
      <div className="priceContainer">
        <h2>Fee/Uhr</h2>
        <PriceSlider onChange={props.handlePriceChange} defaultValue={0} />
      </div>
      <div className="bioContainer">
        <h2>Biography</h2>
        <textarea
          maxLength={700}
          onChange={(e) => props.handleBioChange(e.target.value)}
        />
      </div>
    </StyledProvideService>
  );
});

export default ProvideService;
