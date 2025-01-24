import React, { useEffect } from 'react';
import PetCard from '../../Components/PetCard.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/index.ts';
import { fetchMorePets, setSelectedPet } from '../../Reducers/petReducer.tsx';
import { Pet } from '../../Types/index.ts';
import { useNavigate } from 'react-router-dom';

const MorePetsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { morePets, morePetsStatus, error } = useSelector(
    (state: RootState) => state.pets
  );

  useEffect(() => {
    if (morePetsStatus === 'idle') {
      dispatch(fetchMorePets());
    }
  }, [dispatch, morePetsStatus]);

  const handleBookNow = (pet: Pet) => {
    dispatch(setSelectedPet(pet));
    navigate('/pet-details');
    window.scrollTo(0, 0);
  };

  return (
    <section className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">
        More Pets
      </h2>

      {morePetsStatus === 'loading' && (
        <p className="text-center">Loading more pets...</p>
      )}
      {morePetsStatus === 'failed' && (
        <p className="text-red-0 text-center">{error}</p>
      )}

      {morePetsStatus === 'succeeded' && morePets?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {morePets.map((pet, index) => (
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
      ) : (
        <p className="text-center">No pets available</p>
      )}
    </section>
  );
};

export default MorePetsList;
