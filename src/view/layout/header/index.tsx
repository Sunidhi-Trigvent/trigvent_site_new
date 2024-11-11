import logoImage from "../../../assets/images/logo1.png"; // Import the image
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"; // Correct import for faBars and faX

function Header() {
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
    console.log("Menu toggled!");
    // You can implement your toggle logic here
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

            {/* Header List-items */}
            <div>
              <div className="flex xs:flex-col lg:flex-row space-x-4">
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

            <div>
              {/* Correct usage of FontAwesomeIcon for both faBars and faX */}
              <FontAwesomeIcon onClick={onToggleMenu} icon={faBars} />
              <FontAwesomeIcon icon={faX} /> {/* Using faX close icon */}
            </div>
          </nav>
        </header>
      </section>
    </div>
  );
}

export default Header;
