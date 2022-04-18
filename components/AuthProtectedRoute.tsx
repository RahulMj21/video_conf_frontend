import { NextPage } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setUser, UserInterface } from "../slices/user.slice";
import { fetchMe } from "../utils/axios";

const AuthProtectedRoute =
  (Page: NextPage) =>
  ({ pageProps }: AppProps) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
      (async () => {
        try {
          const { data }: { data: { success: Boolean; user: UserInterface } } =
            await fetchMe();
          if (data.success) {
            dispatch(setUser(data.user));
            setIsUser(true);
          }
        } catch (error: any) {
          toast.error("login before continue");
          router.push("/auth");
        }
      })();
    }, []);

    return isUser && <Page {...pageProps} />;
  };

export default AuthProtectedRoute;
