"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa o CSS do Swiper
import 'swiper/css/navigation'; // Importa o CSS para a navegação, se necessário
import 'swiper/css/pagination'; // Importa o CSS para a paginação, se necessário

import Image from 'next/image';
import { A11y, EffectCards, EffectFade, EffectFlip, Navigation, Pagination, Scrollbar } from "swiper/modules";

interface Image {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30} 
      slidesPerView={3} 
      navigation 
      pagination={{ clickable: true }} 
      breakpoints={{
        // Configurações responsivas para ajustar slidesPerView em diferentes tamanhos de tela
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 8,
        },
      }}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={240}
              height={300}
              className='lg:w-44 w-20'
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
