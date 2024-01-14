import Logo from "@/components/ui/logo";

import React from "react";
import { Link } from "@nextui-org/react";
import DropdownUI from "./dropdownUI";

const HeroHeader = () => {
  return (
    <header className="absolute flex w-full justify-between p-10 xl:px-20">
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
