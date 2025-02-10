import React from "react";
import PetCareSection from "./PetCareSection.tsx";
import Care1 from '../../Assets/care1.svg';
import Care2 from '../../Assets/care2.svg';
import Care3 from '../../Assets/care3.svg';
import Accordion from "../../Components/Accordion.tsx";


const PetCare = () => {
  return (
    <div className="py-6">
      <h3 className="text-center font-poppins text-2xl font-bold leading-9 py-6">
        Pet Heaven Care
      </h3>
      <p className="w-[80%] mx-auto text-black text-center font-poppins text-xl font-normal leading-[30px]">
        At Pet Heaven, we believe that proper care is essential to a dog's
        well-being and happiness. Whether you're a seasoned dog owner or just
        starting your journey, we are here to provide guidance and resources to
        ensure your furry friend lives their best life.
      </p>

      {/* Pet Care Sections */}
      <div className="mt-10 flex flex-col items-center">
        <PetCareSection
          imageSrc={Care1}
          imageAlt="Proper Nutrition"
          bgColor="bg-yellow-300"
          title="Proper Nutrition for Your Pet"
          description="Ensuring your pet receives a balanced and nutritious diet is the foundation of good pet care. Feed them high-quality food that meets their species-specific dietary needs, and adjust portion sizes based on their age, weight, and activity level. Always provide access to fresh water and consult your veterinarian for personalized dietary recommendations or when considering supplements."
          imageLeft={true}
        />
        <PetCareSection
          imageSrc={Care2}
          imageAlt="Exercise and Mental Stimulation"
          bgColor="bg-white"
          title="Regular Exercise and Mental Stimulation"
          description="Physical activity and mental enrichment are vital to keeping your pet healthy and happy. Daily exercise not only helps maintain an ideal weight but also reduces behavioral issues that stem from boredom or anxiety. Incorporate playtime, interactive toys, and training sessions into your pet's routine to promote both physical health and mental agility."
          imageLeft={false}
        />
        <PetCareSection
          imageSrc={Care3}
          imageAlt="Health and Grooming"
          bgColor="bg-yellow-300"
          title="Routine Health and Grooming"
          description="Regular veterinary check-ups, vaccinations, and preventive care are essential to catch any potential health issues early. In addition to medical care, maintain your pet's hygiene through regular grooming, including bathing, brushing, and nail trimming. Grooming sessions also provide a great opportunity to check for any skin abnormalities, parasites, or injuries, ensuring your pet remains in top condition."
          imageLeft={true}
        />
        <h3 className="text-center font-poppins text-2xl font-bold leading-9 py-6">
            Pet Heaven Accordion
        </h3>
        <p className="w-[80%] mx-auto text-black text-center font-poppins text-xl font-normal leading-[30px]">
            Your support funds essential services like vaccinations, emergency treatments, and rehabilitation programs. Even a small donation can make a big difference in a dog’s life.
        </p>
        <div className="w-[80%] mx-auto mt-6">
        <Accordion
          title="How Your Donations Help?"
          content={
            <>
              <strong>Medical Care</strong> <br />
              Your generous donations provide vital medical treatments to dogs in need. This includes vaccinations, surgeries, and emergency care. By helping fund their healthcare, you give them a chance at a healthy, happy life. <br /><br />
              
              <strong>Food and Supplies</strong> <br />
              Donations also help ensure that dogs in shelters and rescues always have enough food, water, and necessary supplies. Every dog deserves to eat well and have the resources they need to thrive.
            </>
          }
        />
        <Accordion
          title="How You Can Get Involved?"
          content={
            <>
              <strong>Adopt a Dog</strong> <br />
              If you're ready to bring a dog into your life, adopting is one of the most impactful ways to help. Visit our Dog Gallery to meet the pups who are waiting for their forever homes. <br /><br />
              
              <strong>Foster a Dog</strong> <br />
              Not ready to adopt? Consider fostering a dog! Fostering provides a temporary safe space for a dog while they await adoption, and your support helps them adjust to a loving environment.
            </>
          }
        />
        <Accordion
          title="Why Donate to Dogs in Need?"
          content={
            <>
              <strong>Saving Lives</strong> <br />
              Your donation can literally save a dog's life. Many dogs are abandoned, abused, or neglected, and they rely on the generosity of people like you to survive and find new homes. <br /><br />
              
              <strong>Improving Quality of Life</strong> <br />
              With your support, dogs get the care they need to recover, thrive, and live happy, healthy lives. Whether it's a safe place to stay or medical attention, your donation makes a world of difference.
            </>
          }
        />
      </div>
      </div>
    </div>
  );
};

export default PetCare;
