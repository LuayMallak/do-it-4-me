import React from "react";
import { StyledBasicDataUpdate } from "../../../Styled-Components/StyledBasicDataUpdate";
import PriceField from "./PriceField";
import AvailabilityUpdate from "./AvailabilityUpdate";
import ServicesFieldUpdate from "./ServicesFieldUpdate";

const ServiceProviderDataUpdate = () => {
  return (
    <StyledBasicDataUpdate>
      <AvailabilityUpdate FieldTitle="Availability" field="availability" />
      <ServicesFieldUpdate field="services" />
      <PriceField FieldTitle="Fee p/h" field="price" />
    </StyledBasicDataUpdate>
  );
};

export default ServiceProviderDataUpdate;
