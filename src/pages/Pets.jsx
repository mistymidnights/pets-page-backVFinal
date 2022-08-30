import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import SearchBar from "../components/SearchBar";
import { API } from "../services/API";
import "./Pets.css";

const Pets = () => {
  //Get all Pets
  const [allPets, setAllPets] = useState([]);

  //Searchbar
  const [filterPet, setFilterPet] = useState("");
  //Searchbar
  const filteredPets = allPets.filter(
    (pet) =>
      pet.petName.toLowerCase().includes(filterPet) ||
      pet.type.toLowerCase().includes(filterPet)
  );

  //Get all Pets
  const getAllPets = async () => {
    API.get("/pets").then((res) => {
      setAllPets(res.data.pets);
    });
  };
  //Get all Pets
  useEffect(() => {
    getAllPets();
  }, []);

  return (
    <section>
      <SearchBar setFilterPet={setFilterPet} />
      <div className="pets_container">
        {allPets.length ? (
          filteredPets.map((pet) => <PetCard pet={pet} key={pet._id} />)
        ) : (
          <p>Loading Pets...</p>
        )}
      </div>
    </section>
  );
};

export default Pets;
