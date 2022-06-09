import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { signup} from "./firebase";
export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  let history = useHistory();

  async function handleSignup() {
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      alert("User Sign up successfully!");
      history.push("/");
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  

  return (
    <>
      <div className="main_div">
        <form action="#" method="post" className="box">
          <h1>Sign Up</h1>
          <div className="inputBox">
            <input name="name" type="text" required autoComplete="off" />
            <label htmlFor="name">User Name</label>
          </div>
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
          <button disabled={loading} className="submit" onClick={handleSignup}>
            Sign up
          </button>
          <label id="label">Do you have an account? <a href="/LogIn"><span>Log in</span></a></label>
        </form>

        {/* <button disabled={loading} onClick={handleLogin}>Log in</button>

    <button disabled={loading} onClick={handleLogout}>Log out</button> */}
      </div>
    </>
  );
}

