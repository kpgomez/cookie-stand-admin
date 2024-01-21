import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";

export default function Home(){
  const [minCust, setMinCust] = useState("0");
  const [maxCust, setMaxCust] = useState("0");
  const [avgCookies, setAvgCookies] = useState("0");

  function cookieStandInputHandler(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      < Header />
      < Main cookieStandInputHandler={cookieStandInputHandler} />
      < Footer />
    </div>
  )
}