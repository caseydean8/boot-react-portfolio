import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

const Home = () => {
  return (
    <Layout 
    header={<Navbar />}
    main={<Main />}
    />
  )
}

export default Home;