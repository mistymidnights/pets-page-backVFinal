import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { API } from "../services/API";
import "./Register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("petName", data.petName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar[0]);
    formData.append("type", data.type);

    API.post("/pets/register", formData).then((res) => {
      if (res) {
        navigate("/login");
        Swal.fire("Welcome to InstaPet! now you can Log in! (´｡• ω •｡`) ♡");
      }
    });
  };

  return (
    <>
      <section className="register_section">
        <div className="form-container">
          <div className="register-container">
            <h2>Please, register :3</h2>
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <label htmlFor="petName">Name</label>
            <input
              type="text"
              id="petName"
              name="petName"
              {...register("petName")}
              placeholder="Name of Pet"
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              {...register("email")}
              placeholder="example@mail.com"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              placeholder="Example123!*$"
            />
            <label htmlFor="avatar">Avatar</label>
            <div className="button-wrapper">
              <span className="label">Upload File</span>
              <input
                type="file"
                name="upload"
                id="upload"
                className="upload-box"
                placeholder="Upload File"
                {...register("avatar")}
              />
            </div>

            <label htmlFor="type">Type (Species)</label>
            <input
              type="text"
              id="type"
              name="type"
              {...register("type")}
              placeholder="Cat?, Dog?... Capybara?"
            />

            <button type="submit">Register</button>
          </form>
        </div>
        <div className="background-pet">
          <img
            src="https://cdn.discordapp.com/attachments/701164137081733201/1013716143673987072/pngegg_1.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Register;
