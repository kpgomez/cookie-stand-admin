export default function Header() {
  return (
    <header className='p-4 text-2xl font-bold text-[#1E2435] bg-[#35D399]'>
      <div className='flex justify-between'>
        <h1 className='ml-5'>Cookie Stand Admin</h1>
        <div>
          <button className='bg-[#D1FAE4] rounded text-xs m-1'>User</button>
          <button className='bg-[#14A172] rounded text-xs m-1 p-1'>Sign Out</button>
          <button className='py-0 m-1 text-xs rounded text-slate-600 bg-stone-50'>Overview </button>
        </div>
    
      </div>
    </header>
  );
}
