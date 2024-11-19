import Layout from "@/src/components/layout/Layout";
import "./../styles/globals.scss";
import type { AppProps } from "next/app";
import NextHead from "@/src/shared/components/next-head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead
        title={"Aston Martin"}
      ></NextHead>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
