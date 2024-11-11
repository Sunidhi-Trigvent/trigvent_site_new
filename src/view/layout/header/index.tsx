import logoImage from "../../../assets/images/logo1.png"; // Import the image
import { Link } from "react-router-dom";

const Header = () => {
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

  return (
    <div>
      <section className="h-screen bg-blue-300">
        <header className="bg-slate-300">
          <nav className="flex justify-between items-center p-4">
            <div>
              <img
                src={logoImage} // Use the imported image here
                alt="explore image"
                className="w-16 h-16" // Tailwind class for width and height
              />
            </div>

            {/* Header List-items */}
            <div className="flex space-x-4">
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
          </nav>
        </header>
      </section>
    </div>
  );
};

export default Header;
