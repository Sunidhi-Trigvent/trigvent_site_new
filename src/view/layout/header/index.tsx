import logoImage from "../../../assets/images/logo1.png"; // Import the image

const Header = () => {
  return (
    <div>
      <section className="h-screen bg-blue-300">
        <header className="bg-slate-300">
          <nav className="flex justify-between items-center">
            <img
              src={logoImage} // Use the imported image here
              alt="explore image"
              className="w-16 h-16" // Tailwind class for width and height
            />
          </nav>
        </header>
      </section>
    </div>
  );
};

export default Header;
