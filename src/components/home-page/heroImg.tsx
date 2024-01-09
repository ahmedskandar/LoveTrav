import Image from "next/image";

const HeroImg = () => {
  return (
    <div className="absolute inset-0 -z-20">
      <Image
        className="object-cover object-center"
        src="/images/globe.jpg"
        alt=""
        fill
        priority
      />
    </div>
  );
}

export default HeroImg