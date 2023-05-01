import Footer from "@/components/Footer.js";
import NavBar from "@/components/NavBar.js";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head.js";
import { useRouter } from "next/router.js";
import LanguageContextProvider from "../contexts/useLanguageContext.js";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <LanguageContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.asPath} />
          <Analytics />
        </AnimatePresence>
        <Footer />
      </main>
    </LanguageContextProvider>
  );
}
