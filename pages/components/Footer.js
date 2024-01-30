export default function Footer({cookieStands}) {
  return (
    <footer className='p-4 mt-5 bg-[#15B981] text-center'>
      <p> {cookieStands.length} Locations Worldwide</p>
    </footer>
  );
}
