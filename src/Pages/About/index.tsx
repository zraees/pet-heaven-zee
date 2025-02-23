import React from 'react'
import PetCarousel from '../../Components/PetCarousel.tsx'
import PetCarouselImg1 from '../../Assets/PetCarouselImg1.svg'
import PetCarouselImg2 from '../../Assets/PetCarouselImg2.svg'
import PetCarouselImg3 from '../../Assets/PetCarouselImg3.svg'
import AboutPageImg from '../../Assets/AboutPageImg.png'

const About = () => {
    const Images = [PetCarouselImg1,PetCarouselImg2,PetCarouselImg3]
    return (
    <div className='flex flex-col items-center pt-6 pb-28 font-Poppins '> 
      <div className='text-2xl my-6 font-bold'>About Pet Heaven</div>
      <text className='text-xl mx-auto w-[80%]'>
        Welcome to Pet Heaven, a community dedicated to improving the lives of dogs in need. 
        Our mission is simple: to connect generous individuals like you with the dogs that need it most. 
        Whether it's providing funding for medical treatments, helping shelters care for more dogs, 
        or supporting dog rescue organizations, we strive to make a real difference in the lives of 
        our furry friends.
      </text>
      <PetCarousel CarouselImages={Images} />
      <div className='mt-44 font-bold text-2xl'>
        Pet Heaven Gallery
      </div>
      <text className='mt-6 text-xl w-[80%]'>
        Each dog in our gallery has a detailed profile that includes their name, breed, age, personality,
        and any specific needs they may have. Get to know their story, and find out how you can offer 
        them the love and care they deserve.
      </text>
      <img className="mt-16" src={AboutPageImg} alt='Collection of Pets' />
    </div>

  )
}

export default About