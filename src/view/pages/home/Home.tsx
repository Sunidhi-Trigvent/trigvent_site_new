import Clients from "./files/Clients";
import Industry from "./files/Industry";
import Intro from "./files/Intro";

const Home = () => {
  return (
    <div>
      {/* <p>Home page</p> */}
      <section className="mx-auto max-w-[1350px] px-9 md:px-16 lg:px-24 justify-center ">
        <Intro />
        <Clients />
        <Industry />
      </section>
    </div>
  );
};

export default Home;
