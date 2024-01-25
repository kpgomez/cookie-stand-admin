import CookieStandAdmin from "./components/CookieStandAdmin";
import { useState } from "react";

export default function Home(){
  const [cookieStands, setCookieStands] = useState([])
  // const [minCust, setMinCust] = useState("0");
  // const [maxCust, setMaxCust] = useState("0");
  // const [avgCookies, setAvgCookies] = useState("0");

  function cookieStandInputHandler(event) {
    event.preventDefault();

    // add cookie stand location
    const cookieStand = {
      location: event.target.location.value,
      minCust: event.target.minCust.value,
      maxCust: event.target.maxCust.value,
      avgCookies: event.target.avgCookies.value
    } 

    setCookieStands([...cookieStands, cookieStand])

  }

  return (
    <div>
      <CookieStandAdmin cookieStandInputHandler={cookieStandInputHandler} cookieStands={cookieStands}/>
    </div>
  )
}