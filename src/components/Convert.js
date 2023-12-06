import React, { useState } from "react";
import moment from "moment-timezone";

function Convert() {
  const [sourceTime, setsourceTime] = useState("12:00");
  const [sourceDate, setsourceDate] = useState("2023-01-01");
  const [sourceTimezone, setsourceTimezone] = useState("Timezone");

  const [targetTime, settargetTime] = useState("");
  const [targetDate, settargetDate] = useState(null);
  const [targetTimezone, settargetTimezone] = useState("Timezone");

  const [sourceMoment, setsourceMoment] = useState(null);
  const [targetMoment, settargetMoment] = useState(null);

  function convertTimeZone() {
    let sourceDateTime = String(sourceDate) + " " + String(sourceTime);
    let selectedSourceMoment = moment.tz(sourceDateTime, sourceTimezone);
    let convertedTimezone = selectedSourceMoment.tz(targetTimezone);
    console.log("source is here ", selectedSourceMoment);
    console.log("converted is here deeva", convertedTimezone.format("HH:mm"));
    settargetTime(convertedTimezone.format("HH:mm"));
    let formattedDate = convertedTimezone.format("YYYY MM DD");
    formattedDate = formattedDate.replace(" ", "-");
    formattedDate = formattedDate.replace(" ", "-");
    settargetDate(formattedDate);
    console.log(formattedDate.replace(" ", "-"));
    // settargetDate(convertedTimezone.format("YYYY MM DD"));
  }

  function createSourceMoment() {
    let date = new Date().getDate();
    let time = new Date().getTime();
    console.log(date, time);
    let newSourceMoment = moment.tz("2013-11-18 11:55", "America/Toronto");
  }
  return (
    <div className="container">
      <div className="row mt-2">
        <div className=" col">
          <input
            type="date"
            className="form-control my-1"
            value={sourceDate}
            onChange={(e) => {
              setsourceDate(e.target.value);
              console.log(sourceDate);
            }}
          />
          <input
            className="form-control my-1"
            value={sourceTime}
            onChange={(e) => {
              setsourceTime(e.target.value);
              console.log(sourceTime);
              console.log(sourceTimezone);
            }}
            type="time"
            name=""
            id=""
          />

          <button
            onClick={createSourceMoment}
            className="btn btn-secondary dropdown-toggle w-100 my-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {sourceTimezone}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("US/Hawaii");
                }}
                className="dropdown-item"
                href="#"
              >
                HST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Pacific/Samoa");
                }}
                className="dropdown-item"
                href="#"
              >
                SST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("US/Alaska");
                }}
                className="dropdown-item"
                href="#"
              >
                AKST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("America/Denver");
                }}
                className="dropdown-item"
                href="#"
              >
                MST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("America/Los_Angeles");
                }}
                className="dropdown-item"
                href="#"
              >
                PST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("America/Chicago");
                }}
                className="dropdown-item"
                href="#"
              >
                CST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("America/Panama");
                }}
                className="dropdown-item"
                href="#"
              >
                EST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("America/Puerto_Rico");
                }}
                className="dropdown-item"
                href="#"
              >
                AST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Europe/London");
                }}
                className="dropdown-item"
                href="#"
              >
                GMT
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Europe/Paris");
                }}
                className="dropdown-item"
                href="#"
              >
                CET
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Africa/Porto_Novo");
                }}
                className="dropdown-item"
                href="#"
              >
                WAT
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Africa/Johannesburg");
                }}
                className="dropdown-item"
                href="#"
              >
                SAST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Egypt");
                }}
                className="dropdown-item"
                href="#"
              >
                EET
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Africa/Nairobi");
                }}
                className="dropdown-item"
                href="#"
              >
                EAT
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Europe/Kirov");
                }}
                className="dropdown-item"
                href="#"
              >
                MSK
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Asia/Kolkata");
                }}
                className="dropdown-item"
                href="#"
              >
                IST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Asia/Tokyo");
                }}
                className="dropdown-item"
                href="#"
              >
                JST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setsourceTimezone("Australia/Queensland");
                }}
                className="dropdown-item"
                href="#"
              >
                AEST
              </button>
            </li>
          </ul>
        </div>
        <div className=" col">
          <input
            type="date"
            className="form-control my-1"
            value={targetDate}
            onChange={(e) => {
              setsourceDate(e.target.value);
              console.log(targetDate);
            }}
          />
          <input
            className="form-control my-1"
            value={targetTime}
            onChange={(e) => {
              setsourceTime(e.target.value);
            }}
            type="time"
            name=""
            id=""
          />

          <button
            onClick={createSourceMoment}
            className="btn btn-secondary dropdown-toggle w-100 my-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {targetTimezone}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                onClick={() => {
                  settargetTimezone("US/Hawaii");
                }}
                className="dropdown-item"
                href="#"
              >
                HST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Pacific/Samoa");
                }}
                className="dropdown-item"
                href="#"
              >
                SST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("US/Alaska");
                }}
                className="dropdown-item"
                href="#"
              >
                AKST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("America/Denver");
                }}
                className="dropdown-item"
                href="#"
              >
                MST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("America/Los_Angeles");
                }}
                className="dropdown-item"
                href="#"
              >
                PST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("America/Chicago");
                }}
                className="dropdown-item"
                href="#"
              >
                CST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("America/Panama");
                }}
                className="dropdown-item"
                href="#"
              >
                EST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("America/Puerto_Rico");
                }}
                className="dropdown-item"
                href="#"
              >
                AST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Europe/London");
                }}
                className="dropdown-item"
                href="#"
              >
                GMT
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Europe/Paris");
                }}
                className="dropdown-item"
                href="#"
              >
                CET
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Africa/Porto_Novo");
                }}
                className="dropdown-item"
                href="#"
              >
                WAT
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Africa/Johannesburg");
                }}
                className="dropdown-item"
                href="#"
              >
                SAST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Egypt");
                }}
                className="dropdown-item"
                href="#"
              >
                EET
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Africa/Nairobi");
                }}
                className="dropdown-item"
                href="#"
              >
                EAT
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Europe/Kirov");
                }}
                className="dropdown-item"
                href="#"
              >
                MSK
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Asia/Kolkata");
                }}
                className="dropdown-item"
                href="#"
              >
                IST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Asia/Tokyo");
                }}
                className="dropdown-item"
                href="#"
              >
                JST
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  settargetTimezone("Australia/Queensland");
                }}
                className="dropdown-item"
                href="#"
              >
                AEST
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row"></div>
      <div className="col">
        <button
          onClick={convertTimeZone}
          className="btn-primary btn w-100 bg-secondary"
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default Convert;
