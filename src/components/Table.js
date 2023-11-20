import React from "react";
import Timezone from "./Timezone";
import moment from "moment-timezone";

function Table({ zones }) {
  console.log();
  return (
    <table className="table">
      <tr>
        <th>Zone</th>
        <th>Location</th>
        <th>Time</th>
      </tr>
      {zones.map((location) => {
        return <Timezone location={location} />;
      })}
    </table>
  );
}

export default Table;
