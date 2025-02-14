import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/index.ts';
import { fetchPets, setSelectedPet } from '../../Reducers/petReducer.tsx';
import { useNavigate } from 'react-router-dom';
import PetCard from '../../Components/PetCard.tsx';
import { Pet } from '../../Types/index.ts';
import Dropdown from '../../Components/Dropdown.tsx';

const PetList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { pets, petsStatus, error } = useSelector(
    (state: RootState) => state.pets
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  useEffect(() => {
    if (petsStatus === 'idle') {
      dispatch(fetchPets());
    }
  }, [dispatch, petsStatus]);

  const breeds = Array.from(new Set(pets.map((pet) => pet.breed)));

  const filteredPets = pets.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedBreed ? pet.breed === selectedBreed : true)
    );
  });

  const handleBookNow = (pet: Pet) => {
    dispatch(setSelectedPet(pet));
    navigate('/pet-details');
  };
console.log('breeds=', breeds);
  return (
    <section className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">
          Popular Pets
        </h2>
        <div className='relative z-[100] flex w-full justify-end mt-0 sm:-mt-20 mb-[200px] sm:mb-20'>
          <Dropdown
            options={
              <ul className="space-y-2 max-h-[130px] overflow-auto">
                <li
                  className="cursor-pointer hover:bg-yellow-0 hover:text-white-0 p-2 rounded-md"
                  onClick={() => setSelectedBreed(null)}
                >
                  All Breeds
                </li>
                {breeds.map((breed, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:bg-yellow-0 hover:text-white-0 p-2 rounded-md"
                    onClick={() => setSelectedBreed(breed)}
                  >
                    {breed}
                  </li>
                ))}
              </ul>
            }
          >
            <span className="mr-2">{selectedBreed ? selectedBreed : "Filter by Breed"}</span>
          </Dropdown>
          </div>
        <div className="flex justify-center items-center mb-8 mt-10">
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
