import React, { memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, path, icon, name, onClick, rightIcon }) => {
  const location = useLocation();

  const checkActiveParent = useCallback(
    (path) => {
      const check = location.pathname.search(path);
      if (check === -1) {
        return false;
      } else {
        return true;
      }
    },
    [location]
  );

  const renderIcon = (icon, key) => {
    const Icon = icon;
    return (
      <Icon
        key={key}
        className={`h-7 w-7 ${
          checkActiveParent(path) ? `text-primary dark:text-gray2` : `text-gray1`
        }`}
      />
    );
  };

  return (
    <Link
      to={to}
      className={`${checkActiveParent(path) ? 'text-primary' : 'text-gray1'}`}
      onClick={onClick}
    >
      <div
        className={`mt-2 flex items-center rounded-md p-2 ${
          checkActiveParent(path) ? 'bg-gray2 dark:bg-purple2Dark dark:text-gray2' : ''
        }`}
      >
        <div className="mr-3">
          {/* <img
            src={icon}
            className={`w-7 h-7 ${checkActiveParent(path) ? `text-primary`: `text-gray1`}`}
            alt="icon"
          /> */}
          {icon && renderIcon(icon, path)}
        </div>

        <div className="w-full">{name}</div>

        {rightIcon ? <div className="ml-2 mr-2">{rightIcon}</div> : null}
      </div>
    </Link>
  );
};

export default memo(NavLink);
