import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};

export default Index;
