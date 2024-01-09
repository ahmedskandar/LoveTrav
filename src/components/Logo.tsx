import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src='/images/favicon.png'
      alt="LoveTrav Logo"
      priority
      width={60}
      height={60}
    />
  );
}

export default Logo