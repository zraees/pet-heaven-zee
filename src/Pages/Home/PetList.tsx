import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/index.ts';
import { fetchPets, setSelectedPet } from '../../Reducers/petReducer.tsx';
import { useNavigate } from 'react-router-dom';
import PetCard from '../../Components/PetCard.tsx';
import { Slide } from 'react-awesome-reveal';
import { Pet } from '../../Types/index.ts';

const PetList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { pets, petsStatus, error } = useSelector(
    (state: RootState) => state.pets
  );

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (petsStatus === 'idle') {
      dispatch(fetchPets());
    }
  }, [dispatch, petsStatus]);

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookNow = (pet: Pet) => {
    dispatch(setSelectedPet(pet));
    navigate('/pet-details');
  };

  return (
    <section className="max-w-6xl mx-auto py-10">
      <Slide direction="left">
        <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">
          Popular Pets
        </h2>
        <div className="flex justify-center items-center mb-8 mt-4">
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
      </Slide>
      {petsStatus === 'loading' && (
        <p className="text-center">Loading pets...</p>
      )}
      {petsStatus === 'failed' && (
        <p className="text-red-500 text-center">{error}</p>
      )}

      {petsStatus === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet, index) => (
            <button
              key={index+1}
              className="w-full"
              onClick={() => handleBookNow(pet)}
            >
              <PetCard
                image={pet.image}
                name={pet.name}
                gender={pet.gender}
                age={pet.age}
                price={pet.price}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default PetList;
