import React, { useState } from "react";
import "materialize-css";
import { TextInput, Button, Icon, Toast } from "react-materialize";
import { signup } from "../auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
        });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const msg = success ? "Tu Cuenta Ha sido Creada!" : error;

  const SignUpForm = () => (
    <form>
      <div className="container">
        <h5>Registrarse</h5>
        <TextInput
          id="TextInput-4"
          label="Nombre"
          onChange={handleChange("name")}
        />
        <TextInput
          email
          id="TextInput-4"
          label="Email"
          validate
          onChange={handleChange("email")}
        />
        <TextInput
          id="TextInput-4"
          label="Password"
          password
          onChange={handleChange("password")}
        />
        <Link onClick={clickSubmit}>
          <Toast
            options={{
              html: msg,
            }}
          >
            Submit
          </Toast>
        </Link>
      </div>
    </form>
  );

  return <div>{SignUpForm()}</div>;
};

export default Signup;
