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
      <section className="">
        <header className="bg-red-400 ">
          <nav className="max-w-[1050px] flex justify-between items-center p-2  bg-red-400 mx-auto md:px-24 px-14">
            <div className="items-center  ">
              <img
                src={logoImage} // Use the imported image here
                alt="explore image"
                className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
              />
            </div>

            {/* Menu Toggle */}
            <div className="block mr-6 lg:hidden ">
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
              } xs:min-h-[40vh] lg:min-h-1 lg:flex xs:w-[320px] lg:static md:w-[640px] lg:w-[420px]   absolute top-20 left-1/2 transform -translate-x-1/2 bg-slate-100 px-2 py-2 lg:space-y-0`}
            >
              <div className="flex flex-col lg:flex-row  ">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.navLinks}
                    className="text-lg font-medium text-gray-800 hover:bg-gray-400 px-5 py-4 lg:py-0 rounded transition-all"
                    onClick={() => setIsMenuOpen(false)} // Close menu on item click
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
