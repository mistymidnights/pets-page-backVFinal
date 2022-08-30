import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { JwtContext } from "../contexts/jwtContext";
import { API } from "../services/API";
import "./Profile.css";

const Profile = () => {
  const { pet, logout } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const defaultValues = {
    petName: pet.petName,
  };

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("petName", data.petName);
    formData.append("avatar", data.avatar[0]);
    formData.append("type", data.type);

    API.patch(`/pets/${pet._id}`, formData).then((res) => {
      if (res) {
        logout();
        navigate("/login");
      }
    });
  };

  //TODO: Estaria guay hacer una alerta para evitar borrar por si acaso, pero creo que no da tiempo.
  const deletePet = () => {
    API.delete(`/pets/${pet._id}`).then((res) => {
      if (res) {
        logout();
        navigate("/");
        Swal.fire("Profile has been successfully deleted...😿");
      }
    });
  };
  return (
    <section className="pets-container">
      <div className="flex-container">
        <div className="profile-img-pets">
          {pet.avatar != "undefined" ? (
            <img src={pet.avatar} alt={pet.petName} />
          ) : (
            <img
              src="https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg"
              alt={pet.petName}
            />
          )}
        </div>
        <div className="form-pets">
          <form onSubmit={handleSubmit(formSubmit)}>
            <label htmlFor="petName">Edit Pet Name?</label>
            <input
              type="text"
              id="petName"
              name="petName"
              {...register("petName")}
              defaultValue={defaultValues.petName}
            />
            <label htmlFor="button-wrapper">Change avatar?</label>
            <div className="button-wrapper">
              <span className="label">Change Avatar</span>
              <input
                type="file"
                name="upload"
                id="upload"
                className="upload-box"
                placeholder="Upload File"
                {...register("avatar")}
              />
            </div>

            <label htmlFor="type">Change Species?</label>
            <input
              type="text"
              id="type"
              name="type"
              {...register("type")}
              placeholder="Cat? Dog?... Capybara?"
            />

            <button type="submit">Edit Profile</button>
            <button type="submit" onClick={() => deletePet()}>
              Delete Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
