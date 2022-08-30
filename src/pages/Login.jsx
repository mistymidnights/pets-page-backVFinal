import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setJwt, setPet } = useContext(JwtContext);

  const loadingUser = () => {
    let timerInterval;
    Swal.fire({
      title: "Loading pet!",
      html: "Wait patiently, cutest pets are loading",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  };

  const formSubmit = (formData) => {
    API.post("/pets/login", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("pet", JSON.stringify(res.data.petInDb));
      setJwt(res.data.token);
      setPet(res.data.petInDb);
      if (res.data.token) {
        navigate("/pets");
      }
    });
  };

  return (
    <>
      <section className="register_section">
        <div className="form-container">
          <div className="login-container">
            <h2>Log In! 🐶</h2>
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
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
              placeholder="Password"
            />

            <button type="submit" onClick={loadingUser}>
              Log In
            </button>
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

export default Login;
