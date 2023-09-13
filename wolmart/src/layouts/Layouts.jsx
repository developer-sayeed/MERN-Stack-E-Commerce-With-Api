import { Outlet } from "react-router";
import FooterSection from "./footer/FooterSection";
import HeaderSection from "./header/HeaderSection";

const Layouts = () => {
  return (
    <>
      <div className="page-wrapper">
        <HeaderSection />
        <Outlet />
        <FooterSection />
      </div>
    </>
  );
};

export default Layouts;
