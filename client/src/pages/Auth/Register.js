import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import '../../styles/Authstyle.css'
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  //form submit:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/api/v1/auth/register',
        { name, email, password, phone, address }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
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
    <Layout title = "Register - Ecommerce App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Full Name"
              required
            />
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
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail4"
              placeholder="Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail7"
              placeholder="address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
// How to pass these input values to database:
// use useState
// import useSate, declare them before return
// bind input with useState using value={}
// but when you simply bind using value={} u wont be able to change anything in input
// for changing onChange={(e)=>setName(e.target.value)} use this inside input
// here e is a callback argument that we get in inline function with onChange and regularly update Name with setName with e.target.value on every single change
// this is called two way binding
// use navigate - While a <Link> component is perfect for when a user clicks on a link to go to a new page, useNavigate is used for situations where you need to trigger navigation based on an event or some logic in your code.
// to use navigate, first import useNavigate from react router dom then set a variable using const
