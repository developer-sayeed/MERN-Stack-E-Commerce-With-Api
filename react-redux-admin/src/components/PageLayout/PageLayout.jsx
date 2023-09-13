import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";

const PageLayout = () => {
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Header */}
        <Header />
        {/* Header */}
        {/* Sidebar */}
        <SideBar />
        {/* /Sidebar */}
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* OutLet */}
            <Outlet />
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default PageLayout;
