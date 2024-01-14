import Image, { StaticImageData } from "next/image";

const ImageContainer = ({
  src,
  alt,
  component,
}: {
  src: StaticImageData;
  alt: string;
  component: "login" | "signup";
}) => {
  return (
    <div
      className={`relative hidden basis-1/2 overflow-hidden ${
        component === "signup" && "rounded-r-full"
      } md:block`}
    >
      <Image
        priority
        fill
        src={src}
        sizes="(min-width: 768px) 50vw"
        className="object-cover"
        placeholder="blur"
        alt={alt}
      />
    </div>
  );
};

export default ImageContainer;
