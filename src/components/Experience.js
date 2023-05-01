import React, { useContext, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon.js";
import translation from "@/translation.js";
import { languageContext } from "@/contexts/useLanguageContext.js";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]
      "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-semibold text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const { language } = useContext(languageContext);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        {translation[language].experience}
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Web & Mobile Developper"
            company="Themis Technologies & Services Sarl"
            companyLink="https://www.themis-it.com"
            time="2021-Present"
            address="Nantes, France(full remote)"
            work={`Worked on a team responsible for developing new applications,
            Organization, technical installation, training of the end users, 
            Configuration of the online servers for platforms deployment,
             Providing technical support and Updating of the existing platforms
            `}
          />
          <Details
            position="Consultant/Web Developer"
            company="CECOSDA"
            companyLink="https://www.cecosdaformation.com"
            time="2020-2021"
            address="Montée Jouvence, Yaoundé-Cameroun"
            work={`As a web developper, I provided technical supervision for the development of e-leaning platforms.
             I Transfered to the technical service,
             the basic principles concerning the architecture, the
            configuration of the database, its functionality.`}
          />
          <Details
            position="IT Manager & Software Developper"
            company="BALACCUL"
            companyLink="/"
            time="2017-2020"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
             search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="ROS Esthablishment"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
             search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
