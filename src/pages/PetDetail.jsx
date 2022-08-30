import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../services/API";
import "./PetDetail.css";

const PetDetail = () => {
  const { id } = useParams();
  const [petOtherDetail, setPetOtherDetail] = useState(undefined);

  const getPetById = async () => {
    API.get(`/pets/${id}`).then((res) => {
      setPetOtherDetail(res.data);
    });
  };

  useEffect(() => {
    getPetById();
    console.log(id);
  }, []);

  return (
    <figure className="pet_detail">
      {petOtherDetail != undefined ? (
        <>
          {petOtherDetail.avatar != "undefined" ? (
            <>
              <div>
                <img src={petOtherDetail.avatar} alt="Pet Avatar" />
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  src="https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg"
                  alt="Pet Avatar"
                />
              </div>
            </>
          )}
          {!petOtherDetail.petName ? (
            <h2>Name not specified</h2>
          ) : (
            <h2>{petOtherDetail.petName}</h2>
          )}
          {!petOtherDetail.type ? (
            <h3>Species not specified</h3>
          ) : (
            <h3>{petOtherDetail.type}</h3>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </figure>
  );
};

export default PetDetail;
