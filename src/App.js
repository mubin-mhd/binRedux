import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import "./index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStateChange } from "./features/authSlice";
import Layouts from "./Layout";
import { NonAuthRoutes, AuthMenuRoutes } from "./router";
import { NonProtectedRoute, ProtectedRoute } from "./middleware/auth";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import { Navigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem("dataSession");
  const dataToken = localStorage.getItem("userProfile");
  console.log("DATA TOKEN", JSON.parse(dataToken));

  useEffect(() => {
    dispatch(getStateChange());
  }, [dispatch]);

  return (
    <Fragment>
      <Layouts>
        <Routes>
          {NonAuthRoutes.map((itemRoute, indexRoute) => {
            return (
              <Route
                key={indexRoute}
                path={itemRoute.path}
                element={
                  <NonProtectedRoute>{itemRoute.component}</NonProtectedRoute>
                }
              />
            );
          })}

          {AuthMenuRoutes.map((parentRoute, indexParentRoute) => {
            return (
              <Fragment key={indexParentRoute}>
                {parentRoute.component === null &&
                  parentRoute.children.length > 0 && (
                    <Route exact={parentRoute.exact} path={parentRoute.path}>
                      {parentRoute.children.map(
                        (childrenOne, indexChildrenOne) => {
                          return (
                            <Route
                              key={indexChildrenOne}
                              exact={childrenOne.exact}
                              path={childrenOne.path}
                              element={
                                <ProtectedRoute>
                                  {childrenOne.component}
                                </ProtectedRoute>
                              }
                            />
                          );
                        }
                      )}
                    </Route>
                  )}

                {parentRoute.component !== null &&
                  !parentRoute.children.length > 0 && (
                    <Route
                      path={parentRoute.path}
                      element={
                        <ProtectedRoute>{parentRoute.component}</ProtectedRoute>
                      }
                    />
                  )}
              </Fragment>
            );
          })}
          {/* <Route key={404} path="*" element={<NotFound />} exact /> */}
          {isLogin ? (
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Layouts>
    </Fragment>
  );
}

export default App;
