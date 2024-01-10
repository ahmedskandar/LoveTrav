"use client";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { useState } from "react";

const Password = ({
  name,
  label,
  errorMessage,
}: {
  name: string;
  label: string;
  errorMessage: string;
}) => {
  const [isPassEyeVisible, setIsPassEyeVisible] = useState(false);
  const togglePassEyeVisibility = () => setIsPassEyeVisible(!isPassEyeVisible);

  return (
    <Input
      className="mb-5"
      name={name}
      label={label}
      color="warning"
      isInvalid={!!errorMessage}
      errorMessage={errorMessage}
      variant="bordered"
      endContent={
        <button
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1"
          type="button"
          onClick={togglePassEyeVisibility}
        >
          {isPassEyeVisible ? (
            <FontAwesomeIcon color="gray" icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon color="gray" icon={faEye} />
          )}
        </button>
      }
      type={isPassEyeVisible ? "text" : "password"}
    />
  );
};

export default Password;
