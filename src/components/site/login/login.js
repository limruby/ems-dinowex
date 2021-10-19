import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";
import axiosInstance from '../../../utils/axiosConfig.js';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        axiosInstance.post('/api/accounts/login', data)
            .then(res => {

                localStorage.clear();
                if (res.data.auth === true) {
                    localStorage.setItem('email', res.data.result.email);
                    localStorage.setItem('role', res.data.result.role);
                    if (res.data.result.role === "Admin") {
                        localStorage.setItem('token', res.data.token);
                        window.location.href = '/admin_dashboard';
                    }
                    else if (res.data.result.role === "Competitor") {

                        var account_id = JSON.stringify(res.data.result._id)
                        axiosInstance.get("/api/competitors/read", { params: { account_id: account_id } })
                            .then(function (response) {
                                localStorage.setItem('name', response.data.data.name);
                                if (response.data.data.bill_status === "true") {
                                    localStorage.setItem('token', res.data.token);
                                    localStorage.setItem('user_id', JSON.stringify(res.data.result._id));

                                    window.location.href = '/user_dashboard';
                                }
                                else {
                                    localStorage.setItem("competitor_id", JSON.stringify(response.data.data._id));
                                    var url = ""
                                    if (response.data.data.category === "Professional Innovator") {
                                        url = `${process.env.REACT_APP_BILLPLZ_PRO}`
                                    }
                                    else if (response.data.data.category === "Junior Innovator") {
                                        url = `${process.env.REACT_APP_BILLPLZ_JUNIOR}`
                                    }
                                    else if (response.data.data.category === "Young Innovator") {
                                        url = `${process.env.REACT_APP_BILLPLZ_YOUNG}`
                                    }
                                    window.open(url, "_self")
                                }

                            }).catch(function (error) {
                                console.log(error);
                            });
                    }
                    else if (res.data.result.role === "Sponsor") {
                        var sponsor_id = JSON.stringify(res.data.result._id)

                        axiosInstance.get("/api/sponsors/read", { params: { account_id: sponsor_id } })
                            .then(function (response) {
                                localStorage.setItem('name', response.data.data.company_name);
                                if (response.data.data.bill_status === "true") {
                                    localStorage.setItem('token', res.data.token);
                                    localStorage.setItem('user_id', JSON.stringify(res.data.result._id));
                                    window.location.href = '/user_dashboard';
                                }
                                else if (response.data.data.email === "demo@sponsor.com") {
                                    console.log(response.data.data.email)
                                    localStorage.setItem('token', res.data.token);
                                    localStorage.setItem('user_id', JSON.stringify(res.data.result._id));

                                    window.location.href = '/user_dashboard';
                                }
                                else {
                                    localStorage.setItem("sponsor_id", JSON.stringify(response.data.data._id));
                                    var sponsor_url = ""
                                    if (response.data.data.category === "Bronze Package") {
                                        sponsor_url = `${process.env.REACT_APP_BILLPLZ_BRONZE}`
                                    }
                                    else if (response.data.data.category === "Silver Package") {
                                        sponsor_url = `${process.env.REACT_APP_BILLPLZ_SILVER}`
                                    }
                                    else if (response.data.data.category === "Gold Package") {
                                        sponsor_url = `${process.env.REACT_APP_BILLPLZ_GOLD}`
                                    }
                                    window.open(sponsor_url, "_self")
                                }

                            }).catch(function (error) {
                                console.log(error);
                            });
                    } else if (res.data.result.role === "Judge") {
                        var judge_id = JSON.stringify(res.data.result._id)
                        axiosInstance.get("/api/judge/read", { params: { account_id: judge_id } })
                            .then(function (response) {
                                localStorage.setItem('name', response.data.data.title + " " + response.data.data.name);
                                localStorage.setItem('token', res.data.token);
                                localStorage.setItem('user_id', JSON.stringify(res.data.result._id));
                                window.location.href = '/user_dashboard';
                            })
                    }
                    else if (res.data.result.role === "Visitor") {
                        var visitor_id = JSON.stringify(res.data.result._id)
                        axiosInstance.get("/api/visitors/read", { params: { account_id: visitor_id } })
                            .then(function (response) {
                                localStorage.setItem('name', response.data.data.name);
                                if (response.data.data.bill_status === "true") {
                                    localStorage.setItem('token', res.data.token);
                                    localStorage.setItem('user_id', JSON.stringify(res.data.result._id));

                                    window.location.href = '/user_dashboard';
                                }
                                else {
                                    localStorage.setItem("visitor_id", JSON.stringify(response.data.data._id));

                                    var url = `${process.env.REACT_APP_BILLPLZ_VISITOR}`

                                    window.open(url, "_self")
                                }
                            })
                    }
                }
                else {
                    alert("Email or password not match.")
                }
            });
    }



    return (
        <>
            <section className="section-container">

                <div className="login-form-container">
                    <h3>Login</h3>
                    <form onSubmit={submit}>

                        <label htmlFor="email_id">E-mail <span>*</span></label>
                        <input className="form-input" type='email' name='email' id="email_id"
                            placeholder='E-mail' required="required"
                            data-validation-required-message="Please enter your e-mail."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password_id">Password <span>*</span></label>
                        <input className="form-input" type='password' name='password' id="passwordl_id"
                            placeholder='password' required="required"
                            data-validation-required-message="Please enter your password."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <div style={{ textAlign: "center" }}>
                            <input className="submit-btn" type="submit" value="Login" />
                            <Link to="/sign_up">
                                <p>
                                    Not register yet? Sign up here.
                                </p>
                            </Link>
                        </div>
                    </form>


                </div>
            </section>
        </>
    )
}

export default Login;