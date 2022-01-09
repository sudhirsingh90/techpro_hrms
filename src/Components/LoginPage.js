import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const clickHandler = () => {
    console.log("clicked");

    if (username != "") {
      if (password != "") {
        if(password.length >=6){
          alert("User name = " + username + ", Password = " + password);
        }else{
          alert("Password length should be atleast 6.");
        }
        
      } else {
        alert("Please enter your password.");
      }
    } else {
      alert("Please enter your username.");
    }

    //APi calling will start here

    //Code end here
  };
  return (
    <div className="section-main container">
      <div className="innerDiv animate__animated animate__fadeInUp">
        <img className="logoImg" src="/images/Logo.png" alt="Techprocompsoft" />
        {/* <form action="http://hrms.trainingncr.info/login" method="post"> */}
        <form>
          <div className="loginpage_control">
            <div>
              <input
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                name="user_name"
                className="input"
                placeholder="User Name"
              />
            </div>
            <div>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
            </div>
            <div>
              <button type="submit" className="btn" onClick={clickHandler}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
