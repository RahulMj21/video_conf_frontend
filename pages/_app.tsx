import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastContainer position="top-right" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
