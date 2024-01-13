"use client";

import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const DropdownUI = () => {
  return (
    <Dropdown className="bg-black/50 md:hidden focus">
      <DropdownTrigger className="md:hidden">
        <Button
          isIconOnly
          className=" focus bg-transparent"
          aria-label="Open links"
        >
          <FontAwesomeIcon
            icon={faBars}
            className="focus"
            color="white"
            size="lg"
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="md:hidden" aria-label="Link actions">
        <DropdownItem
          key="login"
          className="focus bg-white/20 text-white"
          href="/login"
        >
          Login
        </DropdownItem>
        <DropdownItem
          className="focus mt-2 bg-white/20 text-white"
          key="signup"
          href="/signup"
        >
          Signup
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownUI;
