import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { League_Spartan } from "next/font/google";
import Head from "next/head";

const LS = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${LS.variable} font-spartan bg-light w-full min-h-screen`}
      >
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
