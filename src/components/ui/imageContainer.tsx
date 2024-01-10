import Image from "next/image";

const ImageContainer = ({src}: {src: string}) => {
  return (
    <div className="relative hidden basis-1/2 overflow-hidden rounded-r-full md:block">
      <Image fill src={src} alt="" />
    </div>
  );
}

export default ImageContainer