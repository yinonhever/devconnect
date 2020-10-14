import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert("Passwords do not much", "danger");
        }
        else {
            register({ name, email, password });
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        value={name}
                        onChange={onChange}
                        placeholder="Name"
                        name="name"

                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email Address"
                        name="email"

                    />
                    <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                        name="password"

                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password2}
                        onChange={onChange}
                        placeholder="Confirm Password"
                        name="password2"

                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
