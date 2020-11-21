import React from "react";
import "./Process.css";
import bg from "../img/process/processBg.png";
import dailySetup from "../img/process/dailySetup 1.png";
import weeklyMeeting from "../img/process/WeeklyMeeting.png";
import UserTesting from "../img/process/UserTesting.png";

function Process() {
  return (
    <div className="processPage">
      <img src={bg} className="backgroundimg" />
      <h1 className="processHeader">Our Process</h1>
      <img src={dailySetup} className="dailySetup" />
      <img src={weeklyMeeting} className="weeklyMeeting" />
      <img src={UserTesting} className="UserTesting" />

      {/* Implementing bootstrap for Cards */}
    </div>
  );
}

export default Process;
