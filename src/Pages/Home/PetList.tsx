import React from "react";
import PetCard from "../../Components/PetCard.tsx";

const pets = [
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737370718/image_t5zksu.svg",
    name: "PP055 - Irish Wolfhound",
    gender: "Male",
    age: "12 months",
    price: "17.50",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737370805/image_1_erbelg.svg",
    name: "PP076 - Mastiff",
    gender: "Female",
    age: "18 months",
    price: "13.25",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737370864/image_kklkdj.jpg",
    name: "PP061 - Saint Bernard",
    gender: "Male",
    age: "10 months",
    price: "14.70",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737370904/image_emevav.png",
    name: "PP034 - Labrador Retriever",
    gender: "Female",
    age: "18 months",
    price: "13.30",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737370954/image_1_goomqi.png",
    name: "PP034 - German Shepherd",
    gender: "Male",
    age: "22 months",
    price: "12.70",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737370986/image_2_ail4gb.png",
    name: "PP087 - Rottweiler",
    gender: "Female",
    age: "16 months",
    price: "17.30",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737371018/Frame_7_flgt5t.png",
    name: "PP016 - Bulldog",
    gender: "Male",
    age: "09 months",
    price: "11.50",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737371059/image_3_vcidga.png",
    name: "PP023 - Beagle",
    gender: "Female",
    age: "06 months",
    price: "13.90",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737371097/image_4_ofs5ir.png",
    name: "PP022 - Dachshund",
    gender: "Male",
    age: "30 months",
    price: "17.70",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737371127/Frame_7_1_uokbyt.png",
    name: "PP056 - Boxer",
    gender: "Male",
    age: "16 months",
    price: "15.30",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737371156/Frame_7_2_hgsyjx.png",
    name: "PP077 - Siberian Husky",
    gender: "Male",
    age: "16 months",
    price: "10.50",
  },
  {
    image: "https://res.cloudinary.com/dtv1nbaxw/image/upload/v1737371192/Frame_7_3_isj46l.png",
    name: "PP054 - Collie",
    gender: "Female",
    age: "16 months",
    price: "12.90",
  },
];

const PetList: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">Popular Pets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet, index) => (
          <PetCard key={index} {...pet} />
        ))}
      </div>
    </section>
  );
};

export default PetList;
