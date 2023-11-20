import moment from "moment-timezone";
import React from "react";

function Timezone({ location }) {
  let currentTime = moment(new Date());
  console.log(currentTime.tz(location).format("ha z"));
  console.log(moment.tz.names());
  return (
    <tr className="bg-warning p-4 border border-2">
      <td> {currentTime.tz(location).format("z")}</td>
      <td> {location}</td>
      <td>{currentTime.tz(location).format("hh:mm:ss")}</td>
    </tr>
  );
}

export default Timezone;
