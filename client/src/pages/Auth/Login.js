import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import '../../styles/Authstyle.css'
const Login = () => {
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();
    //form submit:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/api/v1/auth/login',
        { email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch(error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    // in authcontroller.js, registercontroller function there is a return response option, which sends response and is stored in res data which can be recieved using res.data
  };
  return (
    <div><Layout title = "Register - Ecommerce App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>
          <div className="mb-3">
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout></div>
  )
}

export default Login