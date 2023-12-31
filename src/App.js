import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Timezone from "./components/Timezone";
import Table from "./components/Table";
import moment from "moment-timezone";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Convert from "./components/Convert";

function App() {
  const [zones, setzones] = useState(moment.tz.names());

  setInterval(() => {
    setzones(moment.tz.names());
  }, 1000);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/time-zones" element={<Homepage />} />
        <Route path="/allLocations" element={<Table zones={zones} />} />
        <Route path="/convertTimezones" element={<Convert />} />
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
