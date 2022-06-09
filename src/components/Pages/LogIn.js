import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import {  login } from "./firebase";
export default function LogIn(){
  // Creating login form that saved data of user in firebase
    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
  
// Function to handle login
    async function handleLogin(){
          try{
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            alert("User Logged in!");
            history.push('/');
          }catch{
            alert("Wrong Password!");
          }
          setLoading(false);
        }
        // Login Page
  return (
    <> 
    <div className="main_div">
    <form action="#" method="post" className="box" >
      <h1>Log In</h1>
      
      <div className="inputBox">
        <input
          name="email"
          ref={emailRef}
          type="text"
          autoComplete="off"
          required
        />
        <label>Email</label>
      </div>
      <div className="inputBox">
        <input
          name="password"
          ref={passwordRef}
          type="password"
          autoComplete="off"
          required
        />
        <label>Password</label>
      </div>
      <button disabled={loading} className="submit" onClick={handleLogin}>Log in</button>
      <label id="label">Are you a new user? <a href="/SignUp"><span>Sign Up</span></a></label>
      </form>
      </div>
      </>
  )
}

