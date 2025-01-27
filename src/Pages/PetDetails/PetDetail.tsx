import React, { FC, useEffect, useState } from 'react';
import PetHealthTag from '../../Assets/PetHealthTag.svg';
import PetIdentificationTag from '../../Assets/PetIdentificationTag.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { Slide } from 'react-awesome-reveal';
import Modal from '../../Components/Modal.tsx';

const PetDetail: FC = () => {
  const navigate = useNavigate();
  const selectedPet = useSelector((state: RootState) => state.pets.selectedPet);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    petName: '',
    userName: '',
    email: '',
    mobile: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedPet) {
      setFormData({ petName: selectedPet.name, userName: '', email: '', mobile: '' });
    }
  }, [selectedPet]);

  if (!selectedPet) {
    navigate('/');
    return null;
  }

  const handleBookNow = () => {
    setIsModalOpen(true);
    setFormData({ petName: selectedPet.name, userName: '', email: '', mobile: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowSuccessMessage(true);
    
    setFormData({ petName: selectedPet.name, userName: '', email: '', mobile: '' });

    setTimeout(() => setShowSuccessMessage(false), 5000);
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
            <img className="size-11/12 sm:size-11/12" src={PetIdentificationTag} alt="PetIdentificationTag" />
            <img className="size-10/12 sm:size-11/12" src={PetHealthTag} alt="PetHealthTag" />
          </div>
        </Slide>
      </div>
      <div className="w-full sm:w-1/2 pl-8">
        <Slide direction="right">
          <span className="text-gray-2 text-sm block mb-2">SKU #{selectedPet.sku}</span>
          <h3 className="text-2xl font-bold mb-2">{selectedPet.breed}</h3>
          <div className="text-xl mb-4">$ {selectedPet.price}</div>
          <Link to="/contact" className="bg-black-0 text-white-0 py-2 px-6 font-bold rounded-full hover:opacity-80">
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

      {/* Booking Modal */}
      {isModalOpen && (
        <Modal title="Book Your Pet" setIsModalOpen={setIsModalOpen}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-semibold">Pet Name</label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                disabled
                className="border border-gray-300 p-2 rounded bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Your Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <button type="submit" className="bg-yellow-0 text-white-0 py-2 px-6 mt-4 font-bold rounded-full hover:opacity-80">
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default PetDetail;
