import React from 'react';

interface PetCardProps {
  image: string;
  name: string;
  gender: string;
  age: string;
  price: string;
}

const PetCard: React.FC<PetCardProps> = ({
  image,
  name,
  gender,
  age,
  price,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col items-center w-[90%] sm:min-w-[280px] mx-auto">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="text-center mt-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Gene:</span> {gender} •{' '}
          <span className="font-semibold">Age:</span> {age}
        </p>
        <p className="text-black font-bold text-lg mt-2">${price}</p>
      </div>

      <button className="mt-4 px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition">
        Book Now
      </button>
    </div>
  );
};

export default PetCard;
