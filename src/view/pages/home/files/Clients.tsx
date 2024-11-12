import Noosa from "../../../../assets/images/Noosa-1.png"; // Import the image
import oxygen from "../../../../assets/images/oxygen-1.png";
import questa from "../../../../assets/images/questa-1.png";
import syndicate from "../../../../assets/images/syndicate-1.png";
import browsa from "../../../../assets/images/browsa-3.png";
import symalite from "../../../../assets/images/symalite-1.png";
import space from "../../../../assets/images/space-time1-3-1.png";
import dealrated from "../../../../assets/images/dealrated-1.png";

const Clients = () => {
  return (
    <>
      <section className=" ">
        <div>
          <h3 className="font-poppins font-semibold text-[39px] text-[#b00a1e] text-left">
            CLIENTS
          </h3>

          <h4 className="font-poppins font-bold uppercase text-[27px]">
            Some brands we’ve worked with:
          </h4>
          <p className="font-poppins  text-[17px]">
            More than <strong>500</strong> individuals & businesses have turned
            their ideas into software products with{" "}
            <strong>Trigvent Solutions.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <img
            src={Noosa} // Use the imported image here
            alt="explore image"
            className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
          />

          <img
            src={oxygen} // Use the imported image here
            alt="explore image"
            className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
          />

          <img
            src={questa} // Use the imported image here
            alt="explore image"
            className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
          />

          <img
            src={syndicate} // Use the imported image here
            alt="explore image"
            className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
          />
          <img
            src={browsa} // Use the imported image here
            alt="explore image"
            className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
          />
          <img
            src={symalite} // Use the imported image here
            alt="explore image"
            className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
          />
          <img
            src={space} // Use the imported image here
            alt="explore image"
            className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
          />
          <img
            src={dealrated} // Use the imported image here
            alt="explore image"
            className="w-23 h-16 max-w-[6rem] max-h-[4rem] " // Fixed size for the logo
          />
        </div>
      </section>
    </>
  );
};

export default Clients;
