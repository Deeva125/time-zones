import React, { useState } from "react";

function Convert() {
  const [sourceTime, setsourceTime] = useState("");
  const [targetTime, settargetTime] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="dropdown col">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Timezone
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                HST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                SST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                AKST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                MST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                PST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                CST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                EST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                AST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                GMT
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                CET
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                WAT
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                SAST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                EET
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                EAT
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                MSK
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                IST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                JST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                AST
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown col">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Timezone
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                HST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                SST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                AKST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                MST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                PST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                CST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                EST
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                AST
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                GMT
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                CET
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                WAT
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                SAST
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                EET
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                EAT
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                MSK
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                IST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                JST
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                AST
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <input type="time" name="" id="" />
        </div>
        <div className="col mt-3">
          <input className="form-control"></input>
        </div>
      </div>
    </div>
  );
}

export default Convert;
