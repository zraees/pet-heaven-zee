import React, { useEffect } from "react";
import PetCard from "../../Components/PetCard.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/index.ts";
import { fetchPets } from "../../Reducers/petReducer.tsx";

const PetList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pets, petsStatus, error } = useSelector((state: RootState) => state.pets);

  useEffect(() => {
    if (petsStatus === "idle") {
      dispatch(fetchPets());
    }
  }, [dispatch, petsStatus]);

  return (
    <section className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">Popular Pets</h2>

      {petsStatus === "loading" && <p className="text-center">Loading pets...</p>}
      {petsStatus === "failed" && <p className="text-red-0 text-center">{error}</p>}

      {petsStatus === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pets.map((pet, index) => (
            <PetCard key={index} image={pet.image} name={pet.name} gender={pet.gender} age={pet.age} price={pet.price} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PetList;
