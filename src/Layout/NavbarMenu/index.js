import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../features/authSlice";
import { AuthMenuRoutes } from "../../router";
import NavLink from "./NavLink";
import SubMenu from "./SubMenu";

const NavbarMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const loadingHandler = (loadValue) => {
    setIsLoading(loadValue);
  };

  const handleLogOut = () => {
    dispatch(logOut(loadingHandler)).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="flex w-1/5 flex-col justify-between pt-5 bg-white dark:bg-dark h-screen ">
      <ul className="w-full bg-white pl-5 pr-5 dark:bg-dark">
        {AuthMenuRoutes.map((parentRouter, indexParentRouter) => {
          return (
            <li key={indexParentRouter}>
              {!parentRouter.children.length > 0 && (
                <NavLink
                  to={parentRouter.path}
                  path={parentRouter.path}
                  icon={parentRouter.icon}
                  name={parentRouter.name}
                />
              )}

              {parentRouter.children.length > 0 && (
                <SubMenu item={parentRouter} />
              )}
            </li>
          );
        })}
      </ul>

      <div className=" pl-8 pr-8 mb-40">
        <button className="flex items-center text-red" onClick={handleLogOut}>
          <div className="pr-2">
            <FiLogOut size="24" className="text-red" />
          </div>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarMenu;
