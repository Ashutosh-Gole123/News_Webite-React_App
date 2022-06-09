import React from "react";
import Header from "./Header"
import Navbar from "../Navbar"
import Contact from "./Contact"
import Footer from "./Footer";
import {Redirect} from 'react-router-dom'

const Home = ({authorized}) => {
  // redirect authorized user to home page when signed up or logged in
  if (!authorized) {
    return <Redirect to="/SignUp"/>;
  }
//  Home page using components
  return (
    <>
      <Navbar />
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
