import React, { FC, useEffect, useState } from 'react';
import PetHealthTag from '../../Assets/PetHealthTag.svg';
import PetIdentificationTag from '../../Assets/PetIdentificationTag.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { Slide } from 'react-awesome-reveal';
const PetDetail: FC = () => {
  const navigate = useNavigate();
  const selectedPet = useSelector((state: RootState) => state.pets.selectedPet);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selectedPet) {
    navigate('/');
    return null;
  }

  const handleBookNow = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 10000); // Hide after 10 seconds
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center mx-auto w-full mt-10 max-w-6xl gap-20">
      <div className="w-11/12 mx-auto sm:w-1/2 flex flex-col">
        <Slide direction="left">
          <img
            className="w-full rounded mb-5"
            src={selectedPet?.image}
            alt={`${selectedPet.name}`}
          />
          <div className="flex flex-col sm:flex-row w-full justify-around bg-yellow-1 rounded-lg py-3 px-1">
            <img
              className="size-11/12 sm:size-11/12"
              src={PetIdentificationTag}
              alt="PetIdentificationTag"
            />
            <img
              className="size-10/12 sm:size-11/12"
              src={PetHealthTag}
              alt="PetHealthTag"
            />
          </div>
        </Slide>
      </div>
      <div className="w-full sm:w-1/2 pl-8">
        <Slide direction="right">
          <span className="text-gray-2 text-sm block mb-2">
            SKU #{selectedPet.sku}
          </span>
          <h3 className="text-2xl font-bold mb-2">{selectedPet.breed}</h3>
          <div className="text-xl mb-4">$ {selectedPet.price}</div>
          <Link
            to="/contact"
            className="bg-black-0 text-white-0 py-2 px-6 font-bold rounded-full hover:opacity-80"
          >
            Contact us
          </Link>
          <div className="text-gray-1 mt-4">
            <div className="flex text-sm gap-10 py-2 border-gray-0 border-b-[1px]">
              <div className="font-medium w-40">Breed</div>
              <div>: {selectedPet.breed}</div>
            </div>
            <div className="flex text-sm gap-10 py-2 border-gray-0 border-b-[1px]">
              <div className="font-medium w-40">Age</div>
              <div>: {selectedPet.age}</div>
            </div>
            <div className="flex text-sm gap-10 py-2 border-gray-0 border-b-[1px]">
              <div className="font-medium w-40">Vaccinated</div>
              <div>: {selectedPet.vaccinated.toString()}</div>
            </div>
            <div className="flex text-sm gap-10 py-2 border-gray-0 border-b-[1px]">
              <div className="font-medium w-40">Gender</div>
              <div>: {selectedPet.gender}</div>
            </div>
            <div className="flex text-sm gap-10 py-2 border-gray-0 border-b-[1px]">
              <div className="font-medium w-40">Size</div>
              <div>: {selectedPet.size}</div>
            </div>
            <div className="flex text-sm gap-10 py-2 border-gray-0 border-b-[1px]">
              <div className="font-medium w-40">Additional Information</div>
              <div>: {selectedPet.additional_info}</div>
            </div>
          </div>
          <button onClick={handleBookNow} className="bg-yellow-0 text-white-0 py-2 px-6 my-4 font-bold rounded-full hover:opacity-80">
            Book Now
          </button>
          {showSuccessMessage && (
            <div className="text-green-0 font-semibold mt-2">
              Congratulations, your booking request has been sent. You will be contacted soon.
            </div>
          )}
        </Slide>
      </div>
    </div>
  );
};

export default PetDetail;
