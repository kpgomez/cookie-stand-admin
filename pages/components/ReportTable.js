import { hours } from "../data";

export default function ReportTable({cookieStands}) {
  return (
    <>
      {cookieStands.length > 0 ? (
        <table className="text-slate-600">
          <thead>
            <tr>
              <th className="p-1 border">Location</th>
              {hours.map((hour, idx) => {
                return (
                  <th key={idx} className="p-1 border">
                    {hour}
                  </th>
                );
              })}
              <th className="p-1 border">Totals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single Location</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Totals</th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className="text-center text-slate-600">No Cookie Stands Available</p>
      )}
    </>
  );
}
