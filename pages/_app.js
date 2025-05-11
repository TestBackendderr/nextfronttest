import "../styles/globals.scss";
import "../styles/MainLayout.scss";
import "../styles/Navbar.scss";
import "../styles/Leftside.scss";
import "../styles/Handlowiec.scss";
import "../styles/Biuro.scss";
import "../styles/UtworzUmowe.scss";
import "../styles/ListaUmow.scss";
import "../styles/ListaUmowBiuro.scss";
import "../styles/UmowaWiecej.scss"
import Head from "next/head";
import Navbar from "../components/Navbar";
import Leftside from "../components/Leftside";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>System Umów - xAI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="System zarządzania umowami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Leftside />
          <div className="page-content">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;