import axios from "axios";
import React, { useState } from "react";

const Register = ({ title, a }) => {
  // state
  // payload
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChangeHandler = (event) => {
    event.preventDefault();
    //   console.log(event.target.name)
    //   console.log(event.target.value);

    // extracted name and value.. object destructuring
    const { name, value } = event.target;

    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const registerHandler = (event) => {
    event.preventDefault();

    // api request send garnu paryo
    // trmo state nai payload ho

    // success -> then -> function -> response
    // faile/error -> catch

    // axios.post("http://127.0.0.1:8000/accounts/register/",userData).then((res)=>{
    //     console.log(res.data);
    // })



    //mock
    mockRegister().then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log("eee"+err)
    })


    // .catch()
  };


  //mock api
  const mockRegister = () => {
    return new Promise((resolve,reject)=>{
        return reject("success")
    })
  };

  return (
    <div className="signup">
      <h1>{title}</h1>
      <form>
        <input
          placeholder="username"
          name="username"
          value={userData.username}
          onChange={onChangeHandler}
        />
        <br />
        <input
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={onChangeHandler}
        />
        <br />
        {/* this type of component sends eventt */}
        <input
          placeholder="email"
          name="email"
          value={userData.email}
          onChange={onChangeHandler}
        />
        <br />
        <button onClick={registerHandler}>Register</button>
      </form>
    </div>
  );
};

export default Register;
