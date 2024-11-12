const Intro = () => {
  return (
    <>
      <section className="mx-auto w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-[200px] justify-center pt-32">
        <div className="lg:w-[120%]">
          <h1 className="font-poppins font-semibold text-black text-left text-[24px] sm:text-[24px] lg:text-[41px] leading-[1.5em] ">
            Creating Mobile, Desktop & Web Software Has Never Been Easier
          </h1>

          <p className="mt-4">
            We specialize in developing innovative technological solutions for
            businesses of all sizes, and our team of experienced professionals
            is committed to providing you with the best possible service and
            products.
          </p>
        </div>

        <div className="lg:w-[60%]">
          <h2 className="font-poppins font-semibold text-black text-left text-[20px] lg:text-[24px]">
            Have A Project in Mind? Chat With Our Experts.
          </h2>

          {/* Form fields */}
          <section className="p-6 rounded-lg text-left max-w-md mx-auto">
            <form className="space-y-3">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[100%] h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Address Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-[100%] h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-[100%] h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Message"
                  className="w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-3/4 px-4 py-2 bg-[#B00A1E] text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
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
