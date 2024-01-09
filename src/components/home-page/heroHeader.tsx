import Logo from "@/components/Logo";
import DropdownUI from "@/components/home-page/DropdownUI";

import React from "react";
import { Link } from "@nextui-org/react";

const HeroHeader = () => {
  return (
    <header className="absolute w-full p-10 xl:px-20 flex justify-between">
      <Logo />
      <DropdownUI />
      <div className="hidden space-x-10 md:block">
        <Link href="/login" className="text-white">
          Login
        </Link>
        <Link href="/signup" className="text-white">
          Signup
        </Link>
      </div>
    </header>
  );
};
export default HeroHeader;
