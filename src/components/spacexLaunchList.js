import React from "react";
import SpacexLaunch from "./spacexLaunch";

const SpacexLaunchList=(props)=> {
  return props.loading ? (
    <div className="loader"></div>
  ) : (
    <div className="custom-row">
      {props.launches.length > 0 ? (
        props.launches.map((launch) => (
          <SpacexLaunch key={launch.flightNumber} launch={launch} />
        ))
      ) : (
        <p className="no-launches">...No Data Available...</p>
      )}
    </div>
  );
}
export default SpacexLaunchList