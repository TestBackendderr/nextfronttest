import "../styles/globals.scss";
import "../styles/MainLayout.scss";
import "../styles/Navbar.scss";
import "../styles/Leftside.scss";
import "../styles/Handlowiec.scss";
import "../styles/Biuro.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>System Umów - xAI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="System zarządzania umowami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;