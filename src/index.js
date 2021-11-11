import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import user from "./user.json";
import socialdata from "./socialData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import Profile from "./components/Profile/Profile";
import SocialStats from "./components/SocialStats/SocialStats";
import StatisticSection from "./components/StatisticSection/StatisticSection";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Profile user={user}>
        <SocialStats />
      </Profile>
      <br />
      <StatisticSection title="Upload stats" stats={socialdata} />
      <br />
      <br />
      <StatisticSection stats={socialdata} />
      <br />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
