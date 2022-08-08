import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import { UserContext } from "../context/authenticator";
export default function Home() {

  const UserContextDatas = useContext(UserContext);
  const LogInFonkiyonu = UserContextDatas.LogIn;
  const LogoutFonk = UserContextDatas.Logout;





  return (
    <>
      <Navbar />
      <button onClick={e=>LogInFonkiyonu()}> Giriş Yap </button>
      <button onClick={e=>LogoutFonk()}> Çıkış Yap </button>
    </>
  );
}
