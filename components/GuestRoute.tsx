import { NextPage } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectUser } from "../slices/user.slice";

const GuestRoute =
  (Page: NextPage) =>
  ({ pageProps }: AppProps) => {
    const router = useRouter();
    const user = useSelector(selectUser);

    useEffect(() => {
      if (user) {
        toast.error("you can't access this route");
        router.push("/rooms");
      }
    }, []);

    return <Page {...pageProps} />;
  };

export default GuestRoute;
