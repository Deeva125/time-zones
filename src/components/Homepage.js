import React, { useState } from "react";
import Table from "./Table";

function Homepage() {
  let zones = [
    "US/Hawaii",
    "Pacific/Samoa",
    "US/Alaska",
    "America/Denver",
    "America/Los_Angeles",
    "America/Chicago",
    "America/Panama",
    "America/Puerto_Rico",
    "Europe/London",
    "Europe/Paris",
    "Africa/Porto-Novo",
    "Africa/Johannesburg",
    "Egypt",
    "Africa/Nairobi",
    "Europe/Kirov",
    "Asia/Kolkata",
    "Asia/Tokyo",
    "Australia/Queensland",
  ];

  return (
    <div className="container bg-primary">
      <Table zones={zones} />
    </div>
  );
}

export default Homepage;
