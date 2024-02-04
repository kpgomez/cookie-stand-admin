import { useAuth } from '@/contexts/auth';
// import { useState } from 'react';

import CookieStandAdmin from './components/CookieStandAdmin';
import Head from 'next/head';

export default function Home(){
  const { login, user, logout } = useAuth();
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='text-center'> 
        {user ? (
          <Header user={user} logout={logout} />
        ) : (
          <h1>Please Log Into Admin Access Page</h1>
        )}
      </header>
      <main className='flex place-content-center'>
        {user ? <CookieStandAdmin /> : <LoginForm login={login}/>}
      </main>
    </div>
  )
}

function Header({ logout }) {
  return (
    <header className='p-4 text-2xl font-bold text-[#1E2435] bg-[#35D399]'>
      <div className='flex justify-between'>
        <h1 className='ml-5'>Cookie Stand Admin</h1>
        <div>
          <button className='bg-[#D1FAE4] rounded text-xs m-1'>username placeholder</button>
          <button className='bg-[#14A172] rounded text-xs m-1 p-1' onClick={logout}>Sign Out</button>
          <button className='py-0 m-1 text-xs rounded text-[#1E2435] bg-stone-50'>Overview </button>
        </div>
      </div>
    </header>
  );
}



function LoginForm({ login }) {
  async function handleSubmit(e) {
    e.preventDefault();
    login(e.target.username.value, e.target.password.value);
  }
  
  return (
        <form onSubmit={handleSubmit} className='bg-[#A8F4D0] min-w-[900px] p-5 text-center rounded-md border-[#15B981] border-2'>
            <fieldset autoComplete='off'>
              <div className='flex flex-col'>
                <label htmlFor='username' className='font-bold'>USER NAME</label>
                <input name='username' placeholder='User Name' className='p-2 m-2'/>
                <label htmlFor='password' className='font-bold'>PASSWORD</label>
                <input name='password' type='password' placeholder='password' className='p-2 m-2 min-w-80'/>
                <button type='submit' className='bg-[#15B981] min-w-80 rounded-sm m-2 p-2'>SIGN IN</button>
              </div>
            </fieldset>
        </form>
  )
}
