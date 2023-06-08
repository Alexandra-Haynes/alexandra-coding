import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="dviewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>Alexandra coding</title>

       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
       <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@200;400&display=swap" 
       rel="stylesheet"/>
       
      </Head>
      <Component {...pageProps} />
    </>
  );
}
