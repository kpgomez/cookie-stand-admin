export default function Footer({cookieStands}) {
  return (
    <footer className="p-4 mt-5 text-gray-500 bg-khaki">
      <p> {cookieStands.length} Locations Worldwide</p>
    </footer>
  );
}
