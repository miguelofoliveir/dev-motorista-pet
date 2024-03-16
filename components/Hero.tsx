import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full">
      <Image
        src="/banner.png"
        alt="banner principal"
        className="w-full"
        width={300}
        height={29}
      />
    </section>
  );
};

export default Hero;
