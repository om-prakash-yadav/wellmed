import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from "./Login.module.css";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState([]);
  const [errors, setErrors] = useState({});
  const [input, setinput] = useState({
    email: "",
    password: ""
  });
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setuserdata(response.data)
      }
      catch (error) {
        console.error("error during fetching data", error);
      }
    }
    fetchdata();
  }, [])

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setinput({
      ...input,
      [name]: value
    });
  };

  const isValidateEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const isValidatePassword = (password) => {
    const symbol = /[!@#$%^&*(),.?":{}|<>]/;
    const number = /[0-9]/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    return (
      password.length >= 8 &&
      symbol.test(password) &&
      number.test(password) &&
      upperCase.test(password) &&
      lowerCase.test(password)
    );
  };

  const validation = () => {
    let newError = {};
    if (!input.email) {
      newError.email = "Email is Required!";
    } else if (!isValidateEmail(input.email)) {
      newError.email = "Invalid Email id!";
    }

    if (!input.password) {
      newError.password = "Password is Required!";
    } else if (!isValidatePassword(input.password)) {
      newError.password = "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validation();
    if (isValid) {
      const user = userdata.find(user =>
        user.email === input.email && user.password === input.password
      );
      if (user) {
        login(user.email+user.password);
        console.log("Login successful");
        navigate("/");

      } else {
        alert("Invalid email or password!");
      }
    } else {
      console.log("Login Validation Failed!");
    }
  }

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.registerContainer}>
        <div className={styles.registerformcontainer}>
          <h2>LOGIN HERE</h2>
          <form onSubmit={handleSubmit}>

            <div className={styles.registerformgroup}>
              <label className={styles.registerLebel} htmlFor="email">Your Email</label>
              <input className={styles.registerInput}
                type="text"
                id="email"
                name="email"
                value={input.email}
                onChange={handleOnChange}
              />
            </div>
            {errors.email && <div className={styles.registererror}>{errors.email}</div>}


            <div className={styles.registerformgroup}>
              <label className={styles.registerLebel} htmlFor="password">Password</label>
              <input className={styles.registerInput}
                type="password"
                id="password"
                name="password"
                value={input.password}
                onChange={handleOnChange}
              />

            </div>
            {errors.password && <div className={styles.registererror}>{errors.password}</div>}

            <button className={styles.registerButton} type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
