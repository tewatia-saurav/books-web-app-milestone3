import { useState } from "react";
import axios from 'axios'
import { fireAlert } from "./dependencies/alert";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e:any) =>{
    e.preventDefault()
    let user = {
      fname : fname,
      lname : lname,
      email : email,
      password : password
    }

    axios.post("/user/signup",user)
    .then((res)=>{
      fireAlert("Signed up",user.email, 'sucess',"Let's go!")
    })
    .catch((err)=>{
        fireAlert("Alert!",err, 'warning')
     
    })
  }

  return (
    <div className="form">
      <form>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="form3Example1"
                className="form-control"
                placeholder="first name"
                onChange={(e)=>setFname(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="form3Example2"
                className="form-control"
                placeholder="last name"
                onChange={(e)=>setLname(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">
            Email address
          </label>
          <input
            type="email"
            id="form3Example3"
            className="form-control"
            placeholder="abc@mail.com"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example4">
            Password
          </label>
          <input
            type="password"
            id="form3Example4"
            className="form-control"
            placeholder="*******"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form2Example3"
          />
          <label className="form-check-label" htmlFor="form2Example3">
            Subscribe to our notifications
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4 submit-btn"
          onClick = {handleSubmit}
        >
          Sign up
        </button>

        <div className="text-center">
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

          <button type="button" className="btn btn-primary btn-floating mx-1 ">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
