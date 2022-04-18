import { NextPage } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { selectUser, setUser, UserInterface } from "../slices/user.slice";
import { fetchMe } from "../utils/axios";

const GuestRoute =
  (Page: NextPage) =>
  ({ pageProps }: AppProps) => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
      (async () => {
        try {
          const { data }: { data: { success: Boolean; user: UserInterface } } =
            await fetchMe();
          if (data.success) {
            dispatch(setUser(data.user));
            toast.success("you can't access this route");
            router.push("/rooms");
          }
        } catch (error: any) {
          router.push("/auth");
        }
      })();
    }, []);

    return <Page {...pageProps} />;
  };

export default GuestRoute;
