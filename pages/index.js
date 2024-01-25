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
      avgCookies: event.target.avgCookies.value,
      hourlySales: event.target.hourlySales.value.split(','), // https://chat.openai.com/c/4363975b-d876-4ce6-acf5-da05a208cce0
    } 
    
    setCookieStands([...cookieStands, cookieStand])
    
  }
  
  function sumCookies(allCookies){
    let sum = 0
    for(let i = 0; i < allCookies.length; i++){
      sum += parseInt(allCookies[i])
    }
    return sum
  }

  return (
    <div>
      <CookieStandAdmin cookieStandInputHandler={cookieStandInputHandler} cookieStands={cookieStands} sumCookies={sumCookies}/>
    </div>
  )
}