import React from "react";
import { use } from "react";
import User from "../user/User";
import "./Users.css";
import { useState } from "react";

const Users = ({ user }) => {
  const userDirectory = use(user);

  const [friendCount , setfriendCount] =useState([])

  const firendCountHandler = (friend)=>{
    const newFriendCount = [...friendCount,friend];
    setfriendCount(newFriendCount)
  }

  return (
    <div>
      <h2> Total User : {userDirectory.results.length}</h2>
      <h3>Friend Count: {friendCount.length}</h3>
      <div className="user">
        {userDirectory.results.map((userlist) => (
          <User userlist={userlist} firendCountHandler={firendCountHandler} ></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
