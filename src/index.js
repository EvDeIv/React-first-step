import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import user from "./user.json";
import socialdata from "./socialData.json";

// import Profile from "./components/Profile/Profile";
// import SocialStats from "./components/SocialStats/SocialStats";
import StatisticSection from "./components/StatisticSection/StatisticSection";

ReactDOM.render(
  <React.StrictMode>
    <>
      {/* <Profile user={user}>
        <SocialStats />
      </Profile> */}
      <StatisticSection title="Upload stats" stats={socialdata} />
      <br />
      <StatisticSection stats={socialdata} />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
