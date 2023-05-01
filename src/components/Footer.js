import React from "react";
import Layout from "./Layout.js";
import Link from "next/link.js";
import { useContext } from "react";
import { languageContext } from "@/contexts/languageContext.js";
import translation from "@/translation.js";

const Footer = () => {
  const { language } = useContext(languageContext);
  return (
    // 655947410
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg 
    dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy; {translation[language].copyright}
        </span>
        <div className="flex items-center lg:py-2">
          {translation[language].build}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          {translation[language].by}&nbsp;
          <span className="font-bold">Elsha Series</span>&nbsp;
          {translation[language].inspired}&nbsp;
          <Link
            href="https://devdreaming.com/"
            className="underline underline-offset-2 font-bold"
            target="_blank"
          >
            CodeBucks
          </Link>
        </div>

        <Link
          href="mailto:shydilaicard@gmail.com"
          className="underline underline-offset-2 mr-3"
          target="_blank"
        >
          {translation[language].hello}
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
