import React, { useEffect } from "react";

import Footer from "../components/Footer";
import axios, { AxiosResponse } from "axios";
axios.defaults.withCredentials = true;
const Home = () => {
  // useEffect(() => {
  //   const fetchCsrfTokenAndLogin = async () => {
  //     try {
  //       // CSRFトークンを取得
  //       await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  //       // ログインリクエスト
  //       const response = await axios.post("http://localhost:8000/api/login", {
  //         email: "yamada@gmail.com",
  //         password: "yamieru1008",
  //       });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Login error:", error);
  //     }
  //   };

  //   fetchCsrfTokenAndLogin();
  // }, []);

  // const LoginCheck = async () => {
  //   try {
  //     // 認証済みのユーザー情報を取得
  //     const response = await axios.get("http://localhost:8000/api/user");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("User check error:", error);
  //   }
  // };
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
