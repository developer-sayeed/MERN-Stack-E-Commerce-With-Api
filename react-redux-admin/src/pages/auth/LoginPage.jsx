import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo-white.png";
import { useEffect, useState } from "react";
import { createtoast } from "../../utils/reactToastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSliceApi";
import { setMessageEmpty } from "../../features/auth/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, error, message } = useSelector((state) => state.auth);

  const [input, SetInput] = useState({
    email: "",
    password: "",
  });

  // Handle Input Chnage Login

  const handleInputChange = (e) => {
    SetInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle From Submit

  const handleUserLogin = (e) => {
    e.preventDefault();
    if (!input.password || !input.email) {
      createtoast("All Fields are required", "warn");
    } else {
      dispatch(loginUser(input));
    }
  };
  useEffect(() => {
    if (error) {
      createtoast(error, "error");
      dispatch(setMessageEmpty());
    } else if (message) {
      createtoast(message, "success");
      dispatch(setMessageEmpty());
    }
    if (user) {
      navigate("/");
    }
  }, [error, message, dispatch, user, navigate]);

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={logo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to dashboard</p>
                  {/* Form */}
                  <form onSubmit={handleUserLogin}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center forgotpass">
                    <Link to="/forgot">Forgot Password?</Link>
                  </div>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Login with</span>
                    <Link href="" className="facebook">
                      <i className="fa fa-facebook" />
                    </Link>
                    <Link href="" className="google">
                      <i className="fa fa-google" />
                    </Link>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">
                    Don’t have an account? <Link to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
