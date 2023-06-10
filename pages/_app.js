import "@/styles/globals.css";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>Alexandra coding</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
