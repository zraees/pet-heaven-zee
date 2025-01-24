import React, { FC } from 'react';
import PetHealthTag from '../../Assets/PetHealthTag.svg'
import PetIdentificationTag from '../../Assets/PetIdentificationTag.svg'
const PetDetail: FC = () => {
    const data=   {
        "image": "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737370718/image_t5zksu.svg",
        "name": "PP055 - Irish Wolfhound",
        "sku": "PP055",
        "breed": "Irish Wolfhound",
        "gender": "Male",
        "age": "12 months",
        "size": "Large",
        "vaccinated": true,
        "additional_info": "Gentle giant, great companion dog.",
        "price": "17.50"
      }
      return (
        <div className="flex justify-center mx-auto w-full  mt-10 max-w-6xl gap-20">
            <div className='w-1/2 flex flex-col'>
                <img
                className="h-auto rounded mb-5"
                src={data.image}
                alt={`${data.name}`}
                />
                <div className='flex w-full justify-around bg-[#FCEED5] rounded-lg py-3 px-1'>
                    <img
                     src={PetIdentificationTag}
                     alt = "PetIdentificationTag"
                    />
                    <img 
                    src={PetHealthTag}
                    alt= "PetHealthTag"
                    />
                </div>
            </div>
            <div className="w-full sm:w-1/2 pl-8">
              <span className="text-[#99A2A5] text-sm block mb-2">SKU #{data.sku}</span>
              <h3 className="text-2xl font-bold mb-2">{data.breed}</h3>
              <div className="text-xl mb-4">$ {data.price}</div>
              <button className="bg-black-0 text-white-0 py-2 px-6 my-4 font-bold rounded-full">
                Contact us
              </button>
              <div className="text-[#667479]">
                <div className="flex text-sm gap-10 py-2 border-[#EBEEEF] border-b-[1px]">
                    <div className="font-medium w-40">Breed</div>
                    <div>: {data.breed}</div>
                </div>
                <div className="flex text-sm gap-10 py-2 border-[#EBEEEF] border-b-[1px]">
                    <div className="font-medium w-40">Age</div>
                    <div>: {data.age}</div>
                </div>
                <div className="flex text-sm gap-10 py-2 border-[#EBEEEF] border-b-[1px]">
                    <div className="font-medium w-40">Vaccinated</div>
                    <div>: {data.vaccinated.toString()}</div>
                </div>
                <div className="flex text-sm gap-10 py-2 border-[#EBEEEF] border-b-[1px]">
                    <div className="font-medium w-40">Gender</div>
                    <div>: {data.gender}</div>
                </div>
                <div className="flex text-sm gap-10 py-2 border-[#EBEEEF] border-b-[1px]">
                    <div className="font-medium w-40">Size</div>
                    <div>: {data.size}</div>
                </div>
                <div className="flex text-sm gap-10 py-2 border-[#EBEEEF] border-b-[1px]">
                    <div className="font-medium w-40">Additional Information</div>
                    <div>: {data.additional_info}</div>
                </div>
              </div>
              <button className="bg-yellow-0 text-white-0 py-2 px-6 my-4 font-bold rounded-full">
                Book Now
              </button>
              
            </div>
        </div>
      );
      
}

export default PetDetail;