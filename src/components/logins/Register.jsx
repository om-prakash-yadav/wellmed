
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [userdata, setUserdata] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await axios.get('http://localhost:3000/users');
                setUserdata(data.data);
            } catch (error) {
                console.error("Error during fetching data", error);
            }
        }
        fetchData();
    }, []);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setInput({
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
        if (!input.name) {
            newError.username = "Username is Required!";
        }
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

        if (!input.confirmPassword) {
            newError.confirmPassword = "Confirm Password is Required!";
        } else if (input.confirmPassword !== input.password) {
            newError.confirmPassword = "Passwords must be the same!";
        }

        setErrors(newError);
        return Object.keys(newError).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validation();
        if (isValid) {
            const emailExists = userdata.some(user => user.email === input.email);
            if (emailExists) {
                alert("This email is already registered!");
            } else {
                await axios.post('http://localhost:3000/users', input)
                alert("You are registered successfully!");
                setUserdata([...userdata, input]);
                localStorage.setItem("user", JSON.stringify(input));
                navigate("/login")
            }
        } else {
            console.log("Form Validation Failed!");
        }
    };
    return (
        <div className='area'>
            <div className={styles.registerWrapper} >
                <div className={styles.registerContainer}>
                    <div className={styles.registerformcontainer}>
                        <h2>CREATE AN ACCOUNT</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.registerformgroup}>
                                <input className={styles.registerInput}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={input.name}
                                    onChange={handleOnChange}
                                />
                                <label className={styles.registerLebel} htmlFor="name">Your Name</label>
                            </div>
                            {errors.username && <div className={styles.registererrors}>{errors.username}</div>}
                            <div className={styles.registerformgroup}>
                                <input className={styles.registerInput}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={input.email}
                                    onChange={handleOnChange}
                                />
                                <label className={styles.registerLebel} htmlFor="email">Your Email</label>
                            </div>
                            {errors.email && <div className={styles.registererrors}>{errors.email}</div>}
                            <div className={styles.registerformgroup}>
                                <input className={styles.registerInput}
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={input.password}
                                    onChange={handleOnChange}
                                />
                                <label className={styles.registerLebel} htmlFor="password">Password</label>
                            </div>
                            {errors.password && <div className={styles.registererrors}>{errors.password}</div>}
                            <div className={styles.registerformgroup}>
                                <input className={styles.registerInput}
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={input.confirmPassword}
                                    onChange={handleOnChange} />
                                <label className={styles.registerLebel} htmlFor="onfirmpassword">Confirm Password</label>
                            </div>
                            {errors.confirmPassword && <div className={styles.registererrors}>{errors.confirmPassword}</div>}
                            <button className={styles.registerButton} type="submit">Register</button>
                        </form>
                        <p className={styles.regP}>Have already an account? <Link className={styles.regA} to="/login">Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
