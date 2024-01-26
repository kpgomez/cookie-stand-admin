export default function Header() {
  return (
    <header className='p-4 text-5xl text-gray-400 bg-khaki'>
      <div className='flex justify-between'>
        <h1 className='ml-5'>Cookie Stand Admin</h1>
        <button className='py-0 text-xs rounded text-slate-600 bg-stone-50'>
          Overview
        </button>
      </div>
    </header>
  );
}
