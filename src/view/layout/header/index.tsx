import logoImage from "../../../assets/images/logo1.png"; // Import the image
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"; // Correct import for faBars and faX
import { useState } from "react"; // Import useState for managing the toggle state

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for tracking the menu status (open/close)

  const navItems = [
    {
      id: 1,
      name: "Home",
      navLinks: "/",
    },
    {
      id: 2,
      name: "About Us",
      navLinks: "/aboutus",
    },
    {
      id: 3,
      name: "Services",
      navLinks: "/service",
    },
    {
      id: 4,
      name: "Career",
      navLinks: "/career",
    },
    {
      id: 5,
      name: "Hire Developers",
      navLinks: "/hire",
    },
  ];

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div>
      <section className="h-screen bg-blue-300">
        <header className="bg-slate-300">
          <nav className="flex justify-between items-center p-4 w-[92%] bg-red-400 mx-auto">
            <div>
              <img
                src={logoImage} // Use the imported image here
                alt="explore image"
                className="w-16 h-16 max-w-[4rem] max-h-[4rem]" // Fixed size for the logo
              />
            </div>

            {/* Menu Toggle */}
            <div className="block lg:hidden">
              <FontAwesomeIcon
                onClick={onToggleMenu} // Toggle menu state
                icon={isMenuOpen ? faX : faBars} // Toggle between faX and faBars
                className="cursor-pointer" // Adds a pointer cursor for interactivity
              />
            </div>

            {/* Navigation Items - Visible above lg and controlled by toggle below lg */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:flex lg:space-x-4 lg:static lg:w-auto absolute top-16 left-0 w-full bg-white px-4 py-2 md:min-h-[60vh] space-y-4 lg:space-y-0`}
            >
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.navLinks}
                    className="text-lg font-medium text-gray-800 hover:bg-gray-400 px-4 py-2 rounded transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>
      </section>
    </div>
  );
}

export default Header;
