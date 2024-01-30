import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

export default function CookieStandAdmin(
  {cookieStandInputHandler, cookieStands, sumCookiesByLocation, hourlyTotals, grandTotal}
) {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <div className='flex flex-col items-center rounded-md'>
          <CreateForm cookieStandInputHandler={cookieStandInputHandler} />
          <ReportTable reports={cookieStands} sumCookiesByLocation={sumCookiesByLocation} hourlyTotals={hourlyTotals} grandTotal={grandTotal}/>
        </div>
      </main>
      {/* <Main cookieStandInputHandler={cookieStandInputHandler} /> */}
      <Footer cookieStands={cookieStands} />
    </>
  );
}
