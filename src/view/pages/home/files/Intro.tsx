const Intro = () => {
  return (
    <>
      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-[10px] pt-32">
        <div className="lg:max-w-[900px]">
          <h1 className="font-poppins font-semibold text-black text-left text-[24px] sm:text-[24px] md:text-[48px] lg:text-[44px] leading-[1.5em] ">
            Creating Mobile, Desktop & Web Software Has Never Been Easier
          </h1>

          <p className="mt-4 lg:text-[19px] leading-[1.5em] font-semibold">
            We specialize in developing innovative technological solutions for
            businesses of all sizes, and our team of experienced professionals
            is committed to providing you with the best possible service and
            products.
          </p>
        </div>

        <div className="lg:max-w-[300px]">
          <h2 className="font-poppins font-semibold text-[rgb(51,51,51)] ml-6 text-[20px] lg:text-[24px]">
            Have A Project in Mind? Chat With Our Experts.
          </h2>

          {/* Form fields */}
          <section className="p-6 rounded-lg text-left max-w-full mx-auto ">
            <form className="space-y-3 ">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black "
                />
              </div>

              {/* Email Address Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black h-32"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-3/4 px-4 py-2 bg-[#B00A1E] text-white  font-semibold rounded-md  transition duration-300"
              >
                Get in Touch
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default Intro;
