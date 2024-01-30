import { hours } from '../data';


export default function ReportTable({ reports, sumCookiesByLocation, hourlyTotals}) {
  return (
    <>
      {reports.length > 0 ? (
        <table className='text-slate-600'>
          <thead>
            <tr className='bg-mauve'>
              <th className='p-2'>Location</th>
              {hours.map((hour, idx) => {
                return (
                  <th key={idx} className='p-2 border'>
                    {hour}
                  </th>
                );
              })}
              <th className='p-2 border'>Totals</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => {
              return (
                <tr key={idx} className='text-center'>
                   {/*https://chat.openai.com/c/1d072a3b-6bdf-478b-a5f0-9038dc5b8265*/}
                  <td className={idx % 2 === 0 ? 'p-1 border bg-salmon' : 'p-1 border bg-nude-pink'}>{report.location}</td>
                  {report.hourlySales.map((hour, index) => {
                    return (
                          <td key={index} className={idx % 2 === 0 ? 'border bg-salmon' : 'border bg-nude-pink'}>{hour}</td>
                    )
                  })}
                  <td className={idx % 2 === 0 ? 'border bg-salmon': 'border bg-nude-pink'}>{sumCookiesByLocation(report.hourlySales)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              {/* <th className='border bg-mauve'>Totals</th>
                {hourlyTotals(reports).map((hour, idx) => {
                  <td key ={idx} className='border bg-mauve'>{hour}</td>
              })} */}
              <th className='border bg-mauve'>Totals</th>
              {hourlyTotals(reports).map((hourly_totals, idx) => {
                return (
                  <td key={idx} className='text-center border bg-mauve'>{hourly_totals}</td>
                )
              })}
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className='text-center text-slate-600'>No Cookie Stands Available</p>
      )}
    </>
  );
}
