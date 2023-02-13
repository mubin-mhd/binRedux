import React, { Fragment } from "react";
import Navbar from "../lib/organisms/Navbar";
import Auth from "./Auth";
import NavbarMenu from "./NavbarMenu";

const Layouts = ({ children }) => {
  const isAuth = localStorage.getItem("dataSession");
  return (
    <Fragment>
      {isAuth ? (
        <div className="min-w-[2000px]">
          <div>
            <Navbar />
          </div>
          <div className="flex bg-[#E5E5E5] dark:bg-cardDark">
            <NavbarMenu />
            <div className="m-5 pl-10 pt-5 dark:text-white h-screen w-full overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <Auth>{children}</Auth>
      )}
    </Fragment>
  );
};

export default Layouts;
