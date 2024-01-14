import Image from "next/image";
import globeImg from "/public/images/globe.jpg";


const HeroImg = () => {
  return (
    <div className="absolute inset-0 -z-20">
      <Image
        className="object-cover object-center"
        src={globeImg}
        alt="Main background image showing holding a levitating glowing globe"
        fill
        placeholder="blur"
        priority
        sizes="100vw"
      />
    </div>
  );
}

export default HeroImg