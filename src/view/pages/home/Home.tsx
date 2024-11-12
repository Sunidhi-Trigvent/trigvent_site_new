import Clients from "./files/Clients";
import Intro from "./files/Intro";

const Home = () => {
  return (
    <div>
      {/* <p>Home page</p> */}
      <section className="mx-auto max-w-[80%]  justify-center ">
        <Intro />
        <Clients />
      </section>
    </div>
  );
};

export default Home;
