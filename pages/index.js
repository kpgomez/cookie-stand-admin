import CookieStandAdmin from './components/CookieStandAdmin';
import { useState } from 'react';

export default function Home(){
  const [cookieStands, setCookieStands] = useState([])

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
  
  function sumCookiesByLocation(allCookies){
    let sum = 0

    for(let i = 0; i < allCookies.length; i++){
      sum += parseInt(allCookies[i])
    }

    return sum
  }

  function hourlyTotals(allCookieStands){
    let total = 0

    for(let i = 0; i < allCookieStands.length; i++){
      for(let j = 0; j < allCookieStands[i].hourlySales.length; j++){
        total += allCookieStands[i].hourlySales[j]
      } 
    }

    return total
  }
  return (
    <div>
      <CookieStandAdmin cookieStandInputHandler={cookieStandInputHandler} cookieStands={cookieStands} sumCookiesByLocation={sumCookiesByLocation} hourlyTotals={hourlyTotals}/>
    </div>
  )
}