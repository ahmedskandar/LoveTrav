import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const HeroContent = () => {
  return (
    <main className="mx-auto flex h-full max-w-xl flex-col justify-center p-5 text-center lg:max-w-2xl xl:ml-20 xl:w-5/12 xl:max-w-none xl:items-center xl:p-0 xl:text-left">
      <h1 className="font-serif text-4xl text-white lg:text-5xl xl:text-6xl">
        <span className="bg-gradient-to-r from-yellow-500 to-pink-400 bg-clip-text font-bold text-transparent">
          Map
        </span>{" "}
        Your Journey,{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-pink-400 bg-clip-text font-bold text-transparent">
          Treasure
        </span>{" "}
        Your Memories {<FontAwesomeIcon icon={faHeart} />}
      </h1>
      <p className="mb-12 mt-3 text-gray-300 md:mb-10 md:mt-2">
        Enjoy travelling? We got you covered! Track every step of your
        adventures with precision, relive your experiences, and safeguard your
        journey memories for a lifetime.
      </p>
      <Button
        as={Link}
        endContent={<FontAwesomeIcon icon={faGlobe} />}
        size="lg"
        href="/login"
        radius="sm"
        className="self-center bg-gradient-to-tr from-pink-500 to-yellow-500 font-bold text-white focus:border-none xl:self-start"
      >
        Start Tracking
      </Button>
    </main>
  );
};

export default HeroContent;
