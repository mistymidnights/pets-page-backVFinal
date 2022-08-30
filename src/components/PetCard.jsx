import React from "react";
import { Link } from "react-router-dom";
import "./PetCard.css";

const PetCard = ({ pet }) => {
  return (
    <figure className="pet_card">
      <div className="profile_img_container">
        {pet.avatar != "undefined" ? (
          <img src={pet.avatar} alt={pet.petName} />
        ) : (
          <img
            src="https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg"
            alt={pet.petName}
          />
        )}
      </div>
      <div className="contnet_container">
        {!pet.petName ? <h2>Name not specified</h2> : <h2>{pet.petName}</h2>}
        {!pet.type ? <h3>Species not specified</h3> : <h3>{pet.type}</h3>}
        <Link to={`/pets/${pet._id}`}>Profile 😺</Link>
        {JSON.parse(localStorage.getItem("pet")).petName === pet.petName ? (
          <p className="connected">Connected</p>
        ) : (
          <p className="disconnected">Disconnected</p>
        )}
      </div>
    </figure>
  );
};

export default PetCard;
