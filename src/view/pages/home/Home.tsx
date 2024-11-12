import Clients from "./files/Clients";
import Intro from "./files/Intro";

const Home = () => {
  return (
    <div>
      {/* <p>Home page</p> */}
      <section className="mx-auto max-w-[1200px] px-5 lg:px-0 justify-center ">
        <Intro />
        <Clients />
      </section>
    </div>
  );
};

export default Home;
