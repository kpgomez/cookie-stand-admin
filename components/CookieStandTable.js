import { hours } from "../pages/data";

let trash_icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 
      1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 
      0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 
      0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 
      0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 
      0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function CookieStandTable({
  reports,
  sumCookiesByLocation,
  hourlyTotals,
  grandTotal,
  deleteCookieStand,
}) {
  return (
    <>
      {reports.length > 0 ? (
        <table className="text-[#1E2435]">
          <thead>
            <tr className="bg-[#32D096]">
              <th className="p-2 pr-40 border-2 border-green-600">Location</th>
              {hours.map((hour, idx) => {
                return (
                  <th
                    key={idx}
                    className="p-2 text-left border-2 border-green-600"
                  >
                    {hour}
                  </th>
                );
              })}
              <th className="p-2 border-2 border-green-600 ">Totals</th>
            </tr>
          </thead>
          <tbody>
            {console.log(reports)}
            {reports.map((report, idx) => {
              return (
                <tr key={idx} className="text-right">
                  {/*https://chat.openai.com/c/1d072a3b-6bdf-478b-a5f0-9038dc5b8265*/}
                  <td
                    className={
                      idx % 2 === 0
                        ? "p-1 border-2 border-green-600 bg-[#A8F4D0] font-bold"
                        : "p-1 border-2 border-green-600 font-bold bg-[#6FE6B7]"
                    }
                  >
                    {report.location}
                    <button
                      className="text-[#E79088] text-justify"
                      onClick={deleteCookieStand}
                    >
                      {trash_icon}
                    </button>
                  </td>
                  {report.hourly_sales.map((hour, index) => {
                    return (
                      <td
                        key={index}
                        className={
                          idx % 2 === 0
                            ? "border-green-600 border-2 bg-[#A8F4D0] px-1"
                            : "border-green-600 border-2 bg-[#6FE6B7] px-1"
                        }
                      >
                        {hour}
                      </td>
                    );
                  })}
                  <td
                    className={
                      idx % 2 === 0
                        ? "border-green-600 border-2 bg-[#A8F4D0]"
                        : "border-green-600 border-2 bg-[#6FE6B7]"
                    }
                  >
                    {sumCookiesByLocation(report.hourly_sales)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className="border-green-600 border-2 bg-[#35D399] text-left">
                Totals
              </th>
              {hourlyTotals(reports).map((hourly_totals, idx) => {
                return (
                  <td
                    key={idx}
                    className="text-right border-green-600 border-2 bg-[#35D399]"
                  >
                    {hourly_totals}
                  </td>
                );
              })}
              <td className="text-right border-green-600 border-2 first-line bg-[#35D399]">
                {grandTotal(hourlyTotals(reports))}
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className="text-center text-[#1E2435]">No Cookie Stands Available</p>
      )}
    </>
  );
}
