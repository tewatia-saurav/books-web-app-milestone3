import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {fireAlert} from './dependencies/alert'

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("/user/login", { email: email, password: password })
      .then((res) => {

        fireAlert("Signed in",email, "success")
  
        localStorage.setItem("token", res.data.accessToken);
        history.push("/");
      })
      .catch((err) => {
        fireAlert("Warning",err.response.data, 'warning')
      });
  };

  return (
    <div className="form">
      <form>
        <fieldset>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              placeholder="abc@mail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              placeholder="********"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 submit-btn"
            onClick={(e) => handleLogin(e)}
          >
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <a href="/signup">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default Login;
