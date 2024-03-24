"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode; // Tipagem para `children`
  threshold?: number; // Opcional, com valor padrão definido no destructuring das props
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // Atualiza o estado para tornar o componente visível quando entra na viewport
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Opcional: desconectar o observer depois que o elemento se tornou visível
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // null significa viewport
        rootMargin: "0px",
        threshold, // Percentual de visibilidade do elemento antes de disparar
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]); // Depende de threshold para recriar o observer se o limiar mudar

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
