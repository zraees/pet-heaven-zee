import React, { useEffect, useState } from 'react';
import PetCard from '../../Components/PetCard.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/index.ts';
import { fetchPets } from '../../Reducers/petReducer.tsx';

const PetList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pets, petsStatus, error } = useSelector((state: RootState) => state.pets);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (petsStatus === "idle") {
      dispatch(fetchPets());
    }
  }, [dispatch, petsStatus]);

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">
        Popular Pets
      </h2>
      <div className='flex justify-center items-center mb-8 mt-4'>
      <div className="relative w-80">
          <input
            type="text"
            placeholder="Search pets here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <span className="absolute left-4 top-2 text-gray-400">🔍</span>
        </div>
        </div>
      {petsStatus === "loading" && <p className="text-center">Loading pets...</p>}
      {petsStatus === "failed" && <p className="text-red-0 text-center">{error}</p>}

      {petsStatus === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet, index) => (
            <PetCard
              key={index}
              image={pet.image}
              name={pet.name}
              gender={pet.gender}
              age={pet.age}
              price={pet.price}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PetList;
