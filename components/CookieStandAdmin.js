import CreateForm from "./CreateForm";
import CookieStandTable from "./CookieStandTable";
import { useState } from "react";
import useResource from "@/hooks/useResource";
import { useAuth } from "@/contexts/auth";

export default function CookieStandAdmin() {
  // const [cookieStands, setCookieStands] = useState([])
  const { user } = useAuth();
  const { createResource, deleteResource, resources } = useResource();

  function cookieStandInputHandler(e) {
    e.preventDefault();

    // add cookie stand location
    const cookieStand = {
      location: e.target.location.value,
      minimum: e.target.minimum.value,
      maximum: e.target.maximum.value,
      average: e.target.average.value,
      hourly_sales: e.target.hourly.value.split(","), // https://chat.openai.com/c/4363975b-d876-4ce6-acf5-da05a208cce0
    };
    createResource(cookieStand);

    // setCookieStands([...cookieStands, cookieStand])
  }

  function sumCookiesByLocation(allCookies) {
    let sum = 0;

    for (let i = 0; i < allCookies.length; i++) {
      sum += parseInt(allCookies[i]);
    }

    return sum;
  }

  function hourlyTotals(allCookieStands) {
    let totalsPerHour = [];
    for (let i = 0; i < allCookieStands[0].hourly_sales.length; i++) {
      let columnTotal = 0;
      for (let j = 0; j < allCookieStands.length; j++) {
        columnTotal += parseInt(allCookieStands[j].hourly_sales[i]);
      }
      totalsPerHour.push(columnTotal);
    }
    return totalsPerHour;
  }

  function grandTotal(totalsPerHour) {
    let grandTotal = 0;
    for (let i = 0; i < totalsPerHour.length; i++) {
      grandTotal += totalsPerHour[i];
    }
    return grandTotal;
  }

  function deleteCookieStand(e) {
    e.preventDefault();
    deleteResource(e.target.id);
  }

  return (
    <div className="flex flex-col items-center text-xs rounded-md">
      <CreateForm cookieStandInputHandler={cookieStandInputHandler} />
      <CookieStandTable
        reports={resources || []}
        sumCookiesByLocation={sumCookiesByLocation}
        hourlyTotals={hourlyTotals}
        grandTotal={grandTotal}
        deleteCookieStand={deleteCookieStand}
      />
    </div>
  );
}
