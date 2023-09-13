import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-white.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/auth/authSliceApi";
import { standerSweetAlert } from "../../utils/sweetAlert";
import { createtoast } from "../../utils/reactToastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
const RegisterPage = () => {
  const dispatch = useDispatch();

  const { error, message } = useSelector((state) => state.auth);
  const [input, SetInput] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // Handle Input Chnage Login

  const handleInputChange = (e) => {
    SetInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle User Submit

  const handleUserRegister = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.password || !input.cpassword) {
      createtoast("All Fields Required", "warning");
    } else if (input.password !== input.cpassword) {
      createtoast("Password Doesn't Match", "warn");
    } else {
      dispatch(
        createUser({
          name: input.name,
          email: input.email,
          password: input.password,
        })
      );

      SetInput({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      });
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
  }, [error, message]);
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={logo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to dashboard</p>
                  {/* Form */}
                  <form onSubmit={handleUserRegister}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                      />
                    </div>
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
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Confirm Password"
                        name="cpassword"
                        value={input.cpassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Register with</span>
                    <Link to="" className="facebook">
                      <i className="fa fa-facebook" />
                    </Link>
                    <Link to="" className="google">
                      <i className="fa fa-google" />
                    </Link>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">
                    Already have an account? <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default RegisterPage;
