import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";

export default function CookieStandAdmin(
  {cookieStandInputHandler, cookieStands, sumCookies}
) {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center">
        <CreateForm cookieStandInputHandler={cookieStandInputHandler} />
        <ReportTable cookieStands={cookieStands} sumCookies={sumCookies} />
      </main>
      {/* <Main cookieStandInputHandler={cookieStandInputHandler} /> */}
      <Footer cookieStands={cookieStands} />
    </>
  );
}
