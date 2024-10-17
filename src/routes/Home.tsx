import React, { useEffect } from "react";
import Footer from "../components/Footer";
import axios, { AxiosResponse } from "axios";
axios.defaults.withCredentials = true;
const Home = () => {
  return (
    <div>
      <div className="p-3">
        <h1 className="text-xl">今日の出艇者</h1>
        <div className="flex justify-between flex-wrap">
          <p>山田脩太</p>
          <p>副島朝水</p>
          <p>よへな</p>
          <p className="">山田脩太</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
