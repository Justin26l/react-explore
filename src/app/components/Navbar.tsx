export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Website</h1>
          <ul className="flex gap-4">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#promo" className="hover:underline">
                Promo
              </a>
            </li>
            <li>
              <a href="#login" className="hover:underline">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }