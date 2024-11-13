import Trig1 from "../../../../assets/images/Trig1-980x490.png"; // Import the image

const Industry = () => {
  return (
    <>
      <h3 className="font-poppins font-semibold uppercase text-left text-[39px] text-[#b00a1e]">
        INDUSTRIES
      </h3>

      <p className="font-poppins  text-left text-[16px]">
        Whether as a website development agency or app development agency,
        Trigvent Solutions has played an integral part in shaping the web
        presence of some elite brands. We’ve had the pleasure of growing brands
        in:
      </p>

      <div className=" justify-center flex ">
        <img
          src={Trig1} // Use the imported image here
          alt="explore image"
          className="w-[620px] h-[500px] " // Fixed size for the logo
        />
      </div>
    </>
  );
};

export default Industry;
