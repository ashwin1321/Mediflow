import React from "react";
import About from "../components/About";
import Home from "../components/Home";
import Services from "../components/Services";
import Layout from "./Layout";

const HomeMain = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
    </Layout>
  );
};

export default HomeMain;
