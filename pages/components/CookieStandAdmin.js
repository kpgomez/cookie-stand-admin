import CreateForm from './CreateForm';
import ReportTable from './ReportTable';
import { useState } from 'react';


export function Footer( { cookieStands } ) {
  console.log(cookieStands.length)
  return (
    <footer className='p-4 mt-5 bg-[#15B981] text-center'>
      <p>{cookieStands.length} Locations Worldwide</p>
    </footer>
  )
}

export default function CookieStandAdmin() {
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

  function grandTotal(totalsPerHour) {
    let grandTotal = 0;
    for(let i = 0; i < totalsPerHour.length; i++){
      grandTotal += totalsPerHour[i];
    }
    return grandTotal 
  }
  
  return (
    <>
      <main>
        <div className='flex flex-col items-center text-xs rounded-md'>
          <CreateForm cookieStandInputHandler={cookieStandInputHandler} />
          <ReportTable reports={cookieStands} sumCookiesByLocation={sumCookiesByLocation} hourlyTotals={hourlyTotals} grandTotal={grandTotal}/>
        </div>
      </main>
      <Footer cookieStands={cookieStands}/>
    </>
  )
}


