import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState();


  function LogIn() {
    let userName = "Kubilay";
    setUser(userName);
    console.log(user);
  }
  function Logout(){
    setUser(null);
    console.log(user);
  }
  return (
    <>
      <Navbar user={user} setUser={setUser} Logout={Logout} LogIn={LogIn} />
      <button onClick={(e) => LogIn()}> Giriş Yap </button>
      <button onClick={(e) => Logout()}> Çıkış Yap </button>
    </>
  );
}
