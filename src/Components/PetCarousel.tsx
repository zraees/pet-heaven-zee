import React, { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type PetCarouselProps = {
    CarouselImages: string[];
  };
const PetCarousel: FC<PetCarouselProps> = ({CarouselImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };

    return (
        <div className="pt-8 w-[80%] h-[40%]">
            <Slider {...settings}>
                {CarouselImages.map((imgUrl, index) => (
                    <div key={index} className="w-full h-full" >
                        <img
                            src={imgUrl}
                            className="w-full h-full object-cover rounded-md"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PetCarousel;