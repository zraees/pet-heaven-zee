import React from "react";

interface PetCareSectionProps {
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  title: string;
  description: string;
  imageLeft?: boolean;
}

const PetCareSection: React.FC<PetCareSectionProps> = ({
  imageSrc,
  imageAlt,
  bgColor,
  title,
  description,
  imageLeft,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
      {
        imageLeft ? (
            <div
            className={`p-6 flex justify-center items-center`}
          >
            <img src={imageSrc} alt={imageAlt} className="w-[440px] h-auto object-cover" />
          </div>
        ) : null
      }
      <div className="max-w-[500px]">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-gray-700 text-md">{description}</p>
      </div>
      {
        !imageLeft ? (
            <div
            className={`p-6 flex justify-center items-center`}
          >
            <img src={imageSrc} alt={imageAlt} className="w-[400px] h-auto object-cover" />
          </div>
        ) : null
      }
    </div>
  );
};

export default PetCareSection;
