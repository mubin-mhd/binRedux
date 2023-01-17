import React, { memo, useState, useCallback, Fragment } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import NavLink from '../NavLink';

const SubMenu = ({ item }) => {
  const location = useLocation();
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

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

  const checkActiveChildren = useCallback(
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

  const showHideSubMenu = useCallback(() => {
    setIsShowSubMenu(!isShowSubMenu);
  }, [isShowSubMenu]);

  return (
    <Fragment>
      <NavLink
        to="#"
        path={item.path}
        icon={item.icon}
        name={item.name}
        onClick={showHideSubMenu}
        rightIcon={
          isShowSubMenu ? (
            checkActiveParent(item.path) ? (
              <FiChevronDown className="h-7 w-7 text-primary" />
            ) : (
              <FiChevronUp className="h-7 w-7 text-gray1" />
            )
          ) : (
            <FiChevronDown className="h-7 w-7 text-gray1" />
          )
        }
      />

      <ul className={`pl-10 ${isShowSubMenu ? 'block' : 'hidden'}`}>
        {item.children.length > 0 &&
          item.children.map((childrenRouter, indexChildrenRouter) => {
            const lastIndex = item.children.length - 1 === indexChildrenRouter;
            return (
              <li
                className={`mt-3  ${lastIndex ? 'mb-0' : 'mb-5'}`}
                key={indexChildrenRouter}
              >
                <Link
                  to={`${item.path}/${childrenRouter.path}`}
                  className={`${
                    checkActiveChildren(childrenRouter.path)
                      ? 'text-primary'
                      : 'text-gray1'
                  }`}
                >
                  <div>{childrenRouter.name}</div>
                </Link>
              </li>
            );
          })}
      </ul>
    </Fragment>
  );
};

export default memo(SubMenu);
