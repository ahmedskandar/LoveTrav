import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src='/images/favicon.png'
      alt="LoveTrav Logo"
      priority
      width={80}
      height={80}
    />
  );
}

export default Logo