import { NextPage } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser, UserInterface } from "../slices/user.slice";
import { fetchMe } from "../utils/axios";

const AuthProtectedRoute =
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
          }
        } catch (error: any) {
          toast.error("login before continue");
          router.push("/auth");
        }
      })();
    }, []);

    return <Page {...pageProps} />;
  };

export default AuthProtectedRoute;
