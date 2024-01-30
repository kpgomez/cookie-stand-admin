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
  
  function sumCookiesByLocation(allCookies) {
    let sum = 0

    for(let i = 0; i < allCookies.length; i++){
      sum += parseInt(allCookies[i])
    }

    return sum
  }

  function hourlyTotals(allCookieStands) {
    let totalsPerHour = [];
    for(let i = 0; i < allCookieStands[0].hourlySales.length; i++){
      let columnTotal = 0;
      for(let j = 0; j < allCookieStands.length; j++){
        columnTotal += parseInt(allCookieStands[j].hourlySales[i]);
      }
      totalsPerHour.push(columnTotal);
  }
  return totalsPerHour
}

  // function hourlyTotals(allCookieStands){
  //   let totals = []

  //   console.log(allCookieStands[0].hourlySales)

  //   for(let i = 0; i < allCookieStands.length; i++){
  //     let sum = 0
  //     for(let j = 0; j < allCookieStands[i].hourlySales.length; j++){
  //       sum += parseInt(allCookieStands[i].hourlySales[j])
  //     }
  //     totals.push(sum) 
  //   }
  //   console.log(totals)
  //   return totals
  // }
  return (
    <div>
      <CookieStandAdmin cookieStandInputHandler={cookieStandInputHandler} cookieStands={cookieStands} sumCookiesByLocation={sumCookiesByLocation} hourlyTotals={hourlyTotals}/>
    </div>
  )
}