import React, { useEffect } from 'react';
import PetCard from '../../Components/PetCard.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/index.ts';
import { fetchPets } from '../../Reducers/petReducer.tsx';

const PetList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pets, status, error } = useSelector((state: RootState) => state.pets);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPets());
    }
  }, [dispatch, status]);

  return (
    <section className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">
        Popular Pets
      </h2>

      {status === 'loading' && <p className="text-center">Loading pets...</p>}
      {status === 'failed' && <p className="text-red-0 text-center">{error}</p>}

      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pets.map((pet, index) => (
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
