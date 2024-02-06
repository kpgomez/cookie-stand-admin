import { useAuth } from "@/contexts/auth";
import CookieStandAdmin from "../components/CookieStandAdmin";
import Head from "next/head";

export default function Home() {
  const { login, user, logout } = useAuth();
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? <Header user={user} logout={logout} /> : <p></p>}
      <main>{user ? <CookieStandAdmin /> : <LoginForm login={login} />}</main>
    </div>
  );
}

function Header({ logout }) {
  return (
    <header className="p-4 text-2xl text-[#1E2435] bg-[#35D399]">
      <div className="flex justify-between">
        <h1 className="font-bold ml-[200px]">Cookie Stand Admin</h1>
        <div>
          <button className="bg-[#ECFDF5] rounded text-xs m-1 px-2 py-1">
            rudy
          </button>
          <button
            className="bg-[#14A172] rounded text-xs m-1 px-2 py-1 text-gray-100"
            onClick={logout}
          >
            Sign Out
          </button>
          <button className="px-2 py-1 m-1 text-xs rounded text-[#1E2435] bg-[#ECFDF5]">
            Overview{" "}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer({ cookieStands }) {
  return (
    <footer className="p-4 mt-5 bg-[#15B981] text-center">
      <p>{cookieStands.length} Locations Worldwide</p>
    </footer>
  );
}

function LoginForm({ login }) {
  async function handleSubmit(e) {
    e.preventDefault();
    login(e.target.username.value, e.target.password.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#A8F4D0] p-5 text-center rounded-md border-[#15B981] border-2 m-40"
    >
      <fieldset autoComplete="off">
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold">
            USER NAME
          </label>
          <input name="username" placeholder="User Name" className="p-2 m-2" />
          <label htmlFor="password" className="font-bold">
            PASSWORD
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="p-2 m-2 min-w-80"
          />
          <button
            type="submit"
            className="bg-[#15B981] min-w-80 rounded-sm m-2 p-2"
          >
            SIGN IN
          </button>
        </div>
      </fieldset>
    </form>
  );
}
