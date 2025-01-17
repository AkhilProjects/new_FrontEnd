import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../redux/actions/authAction";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Overlay1 from "../../Assets/Illustrations/Overlay1.svg";
import { isLogin } from "../../redux/actions/authAction";
import Overlay2 from "../../Assets/Illustrations/Overlay2.svg";
import "./css/Auth.css";

function Signin() {
  const [data, setData] = useState({
    email: "akhil.1923cs1258@kiet.edu",
    password: "12345",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const resp = useSelector((state) => state.auth);

  const { isAuthenticated } = resp;

  const pushTo = (isAuth) => {
    if (isAuth) {
      console.log("he")
      history.push("/user-dashboard");
    }
  };

  
  useEffect(() => {
 
   pushTo(isAuthenticated);
    
  }, [isAuthenticated])
  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login(data));
    console.log(isAuthenticated);
   
  };
  return (
    <section className="auth">
      <div className="overlay1">
        <img src={Overlay1} alt="" />
      </div>
      <div className="overlay2">
        <img src={Overlay2} alt="" />
      </div>
      <div className="container">
        <div className="heading">Sign in</div>
        <div className="sub-head">
          Sign in and continue your Entrepreneurial Journey
        </div>
        <form action="" className="form">
          <input
            name="email"
            value={data.email}
            type="email"
            placeholder="E-mail"
            className="inp-box"
            onChange={onHandleChange}
          />
          <input
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            className="inp-box"
            onChange={onHandleChange}
          />
          <div className="remember">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <p className="para">
            <Link to="#">Forgot Password.</Link> New here?{" "}
            <Link to="/signup">Sign up</Link>
          </p>
          <button onClick={onHandleSubmit} className="sign-btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signin;
