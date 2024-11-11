import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      console.log("hi");
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
