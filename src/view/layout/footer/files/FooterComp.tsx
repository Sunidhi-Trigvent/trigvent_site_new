import logoImage from "../../../../assets/images/logo200-white1.png"; // Import the image

const FooterComp = () => {
  return (
    <>
      <section className="bg-[#000000] w-[100%]">
        <div className="mx-auto max-w-[1350px]  justify-center">
          <footer className="footer bg-[#000000] text-base-content pl-24 pt-10 ">
            {/* additional nav */}
            <section className="text-white text-[17px]">
              <div>
                <img
                  src={logoImage} // Use the imported image here
                  alt="explore image"
                  className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
                />
              </div>
              <div>
                <p className="w-23 h-16 max-w-[16rem] pt-2">
                  To facilitate the transition and build every business around
                  digital solutions.
                </p>
              </div>

              <div className="w-23 h-16 max-w-[16rem]">
                <p>
                  Ready to speak with an expert?
                  <br />
                  Give us a ring
                </p>
              </div>

              <div>
                <a href="tel:+91123456789" className="btn">
                  +91 123456789
                </a>
              </div>
            </section>

            <nav className="text-white text-[17px]">
              <h6 className="footer-title text-[#B00A1E]">Industries</h6>
              <a className="link link-hover">Retail and Ecommerce</a>
              <a className="link link-hover">Sports and Fitness</a>
              <a className="link link-hover">
                Media, Publishing & Entertainment
              </a>
              <a className="link link-hover">Education and Training</a>
              <a className="link link-hover">Food and Beverage</a>
              <a className="link link-hover">Healthcare</a>
              <a className="link link-hover">Automotive</a>
              <a className="link link-hover">Telecommunication</a>
            </nav>

            <nav className="text-white text-[17px]">
              <h6 className="footer-title text-[#B00A1E]">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="text-white text-[17px]">
              <h6 className="footer-title text-[#B00A1E]">Let's Connnect</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </footer>
        </div>
      </section>
    </>
  );
};

export default FooterComp;
