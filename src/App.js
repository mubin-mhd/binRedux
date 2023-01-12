import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LearnRedux from "./pages/Learnredux";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import SignUp from "./pages/OldAuth/RegisterForm";
import ListProduct from "./pages/ListProduct";
import "./index.css";
import ForgotPass from "./pages/Auth/ForgotPass";
import SendRequestEmail from "./pages/Auth/SendRequest";
import Resetpassword from "./pages/Auth/ResetPassword";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStateChange } from "./features/authSlice";

function App() {
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem("dataSession");
  const dataToken = localStorage.getItem("userProfile");
  console.log("DATA TOKEN", JSON.parse(dataToken));

  useEffect(() => {
    dispatch(getStateChange());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to={`${isLogin ? "/home" : "/login"}`} />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPass} />
          <Route exact path="/learn" component={LearnRedux} />
          <Route exact path="/list-product" component={ListProduct} />
          <Route exact path="/send-request" component={SendRequestEmail} />
          <Route exact path="/reset-password" component={Resetpassword} />
        </Switch>
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
