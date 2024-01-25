import { hours } from '../data';

export default function ReportTable({ cookieStands, sumCookies }) {
  return (
    <>
      {cookieStands.length > 0 ? (
        <table className='text-slate-600'>
          <thead>
            <tr>
              <th className='p-2 border'>Location</th>
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
            {cookieStands.map((stand, idx) => {
              return (
                <tr key={idx} className='text-center'>
                  <td className='p-1 border'>{stand.location}</td>
                  {stand.hourlySales.map((hour, idx) => {
                    return (
                          <td key={idx} className='border'>{hour}</td>
                    );
                  })}
                  <td className='border'>{sumCookies(stand.hourlySales)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className='totals'>Totals</th>
              {/* {cookieStands.map((stand, idx) => {
                return (
                  <td key={idx}>{sumCookies(stand.hourlySales)[idx]}</td>
                )
              })} */}
              <td>Column Totals</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className='text-center text-slate-600'>No Cookie Stands Available</p>
      )}
    </>
  );
}
