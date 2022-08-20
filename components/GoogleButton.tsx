import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ButtonGoogle } from "../styles/common.style";
import showConsentScreen from "../utils/showConsentScreen";

const GoogleButton = () => {
  return (
    <Link href={showConsentScreen()}>
      <a>
        <ButtonGoogle>
          <FcGoogle /> Continue With Google
        </ButtonGoogle>
      </a>
    </Link>
  );
};

export default GoogleButton;
