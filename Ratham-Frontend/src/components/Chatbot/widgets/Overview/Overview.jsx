import React from "react";
import GeneralOptions from "./GeneralOptions";

const Overview = (props) => {
  return (
    <div>
      <GeneralOptions actionProvider={props.actionProvider} />
    </div>
  );
};

export default Overview;
