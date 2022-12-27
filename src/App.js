import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import LearnRedux from "./pages/Learnredux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/RegisterForm";
import ForgotPassword from "./pages/ForgotPassword";
import ListProduct from "./pages/ListProduct";
import "./index.css";
import { getSession, getStateChange, authSelector } from "./features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import secureStorage from "./helper/secureStorage";

function App() {
  const dispatch = useDispatch();
  const dataAuth = secureStorage.getItem("dataSession");

  const [angka, setAngka] = useState(0);

  useEffect(() => {
    dispatch(getSession());
    dispatch(getStateChange());
    console.log("DATA SECURE STORAGE", dataAuth);
  }, [dispatch, angka]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <button onClick={() => setAngka((prev) => prev + 1)}>cek data</button>
        {/* <div className="flex justify-center mt-10"> */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/learn" component={LearnRedux} />
          <Route exact path="/list-product" component={ListProduct} />
        </Switch>
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
