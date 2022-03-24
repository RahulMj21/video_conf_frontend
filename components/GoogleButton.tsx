import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { ButtonGoogle } from "../styles/common.style";
import showConsentScreen from "../utils/showConsentScreen";

const GoogleButton = () => {
  return (
    <Link href={showConsentScreen()}>
      <a>
        <ButtonGoogle>
          <FaGoogle /> Continue With Google
        </ButtonGoogle>
      </a>
    </Link>
  );
};

export default GoogleButton;
