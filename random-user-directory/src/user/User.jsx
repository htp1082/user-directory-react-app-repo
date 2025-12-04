import React from 'react';
import "./User.css"
import { useState } from 'react';

const User = ({userlist,firendCountHandler}) => {
    // console.log(userlist)

    const [friend, setfriend] = useState(false);
    const friendsHandler = ()=>{
        setfriend(true);
        setfriend(!friend)
        firendCountHandler();
    }
    return (
        <div className={`user-card ${friend && "user-bg"}`}>
            <img src={userlist.picture.large} alt="" />
            <h3>User :{userlist.name.title} {userlist.name.first} {userlist.name.last}</h3>
            <h4>Location : {userlist.location.street.name}</h4>

            <button onClick={friendsHandler}>{friend ? " Add to friend":" Friend"}</button>
        </div>
    );
};

export default User;