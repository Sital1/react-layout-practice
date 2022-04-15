import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { notifications} from "../../dummyData";
import axios from "axios";





const Notification = () => {
  const [notificatonFromAPI, setNotifications] = useState([])

let buttonType = notification_test.length >0 ? "danger": "warning"

// first load huda k grne
// kati kher change grne 
// display garauna api bata tanne
// array vitra chai esto kura jun change vayesi yo page reload hunu paryo
useEffect(()=>{

  // //api call

  // axios.get(url,{token}).then((res)=>{setNotifications(res.data)})


  // mock api
  setTimeout(()=>{

    setNotifications(notifications)
  },300)


},[])
  return (
    <div className="text-center mt-5">
      
     
      {notificatonFromAPI.map((notification,index)=>{
          return <li key={index}>{notification.title}</li>
      })}

    </div>
  );
};

export default Notification;
