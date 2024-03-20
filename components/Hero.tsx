import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full">
      <Image
        src="/banner.png"
        alt="banner principal"
        className="w-full lg:block hidden"
        width={300}
        height={29}
      />
      <Image
        src="/banner-mobile.png"
        alt="banner principal mobile"
        className="w-full lg:hidden block"
        width={300}
        height={29}
      />
    </section>
  );
};

export default Hero;
