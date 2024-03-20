"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };
  
  // Ajustando a transição para incluir uma transformação no eixo X
  const transition = {
    x: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
    opacity: { duration: 0.1 },
  };
  
  

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number): number => {
  return Math.abs(offset) * velocity;
};

interface Image {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [itemsVisible, setItemsVisible] = useState(4); // Default

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsVisible(3); // Para telas pequenas, exiba 4
      } else {
        setItemsVisible(8); // Para telas maiores, exiba 8
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Chamada inicial

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const paginate = (newDirection: number): void => {
    setPage((prev) => [
      (prev[0] + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  const displayedImages = images.slice(page, page + itemsVisible).concat(
    images.slice(0, Math.max(0, (page + itemsVisible) - images.length))
  );

  return (
    <div className="relative lg:px-10 px-8 lg:h-32 h-14">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="grid grid-cols-3 lg:grid-cols-8 gap-4"
          key={page}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.2 },
          }}
        >
          {displayedImages.map((image, index) => (
            <motion.div key={index} className="w-full">
              <div className="my-2 mr-2 lg:w-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={240}
                  height={300}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute left-0 z-30 flex items-center justify-center bg-white text-black rounded-full h-10 w-10 hover:bg-gray-700"
        onClick={() => paginate(-1)}
        style={{ top: "80%", transform: "translateY(-50%)", marginLeft: "-20px" }}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 z-30 flex items-center justify-center bg-white text-black rounded-full h-10 w-10 hover:bg-gray-700"
        onClick={() => paginate(1)}
        style={{ top: "80%", transform: "translateY(-50%)", marginRight: "-20px" }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
