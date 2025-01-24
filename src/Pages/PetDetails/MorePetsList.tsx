import React, { useEffect } from "react";
import PetCard from "../../Components/PetCard.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/index.ts";
import { fetchMorePets } from "../../Reducers/petReducer.tsx";

const MorePetsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { morePets, morePetsStatus, error } = useSelector((state: RootState) => state.pets);

  useEffect(() => {
    if (morePetsStatus === "idle") {
      dispatch(fetchMorePets());
    }
  }, [dispatch, morePetsStatus]);

  return (
    <section className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">More Pets</h2>

      {morePetsStatus === "loading" && <p className="text-center">Loading more pets...</p>}
      {morePetsStatus === "failed" && <p className="text-red-0 text-center">{error}</p>}

      {morePetsStatus === "succeeded" && morePets?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {morePets.map((pet, index) => (
            <PetCard key={index} image={pet.image} name={pet.name} gender={pet.gender} age={pet.age} price={pet.price} />
          ))}
        </div>
      ) : (
        <p className="text-center">No pets available</p>
      )}
    </section>
  );
};

export default MorePetsList;
