import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carousel.css";

const movies = [
  {
   
    img: "/images/lambo.jpg",
  },
  {
   
    img: "/images/c200.jpg",
  },
  {
    
    img: "/images/royce.jpg",
  },
   {
    
    img: "/images/a8.webp",
  },
   {
    
    img: "/images/m5.jpg",
  },
];

export default function Carousel() {
  return (
    <div className="carousel-container">
 <Swiper
  effect="coverflow"
  centeredSlides
  loop
  slidesPerView="auto"
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  speed={1000}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: false,
  }}
  navigation
  pagination={{ clickable: true }}
  modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
>
    
        {movies.map((movie, i) => (
          <SwiperSlide className="swiper-slide-custom" key={i}>
            <div className="card">
              <img src={movie.img} alt={movie.title} />
              <div className="info">
                <h3>{movie.title}</h3>
                <p>{movie.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
