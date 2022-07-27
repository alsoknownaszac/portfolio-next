import type { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Skills from "../../components/skills/Skills";
import AboutMe from "../../components/about-me/AboutMe";
import Projects from "../../components/projects/Projects";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import { AppContext } from "../../components/hooks/AppContext.hook";
import CollabModal from "../../components/collaborate/CollabModal";
import LazyLoad from "react-lazyload";
import useImagePreloader from "../../components/hooks/useImagePreloader";
import { preloadSrcList } from "../../components/constants/imagePreload";

const Home: NextPage = () => {
  const { display } = useContext(AppContext);

  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  // console.log(imagesPreloaded);

  return (
    <div
      className={`h-screen w-screen overflow-x-hidden ${
        (display.navMenu === true || display.modal === true) &&
        `overflow-y-hidden`
      }`}
    >
      <Head>
        <title>Amayo Collins Portfolio</title>
      </Head>
      {/* {!imagesPreloaded ? (
        "loading..."
      ) : ( */}
      <LazyLoad>
        <CollabModal />
        <HeroSection />
        <Skills />
        <AboutMe />
        <Projects />
        <Footer />
      </LazyLoad>
      {/* )} */}
    </div>
  );
};

export default Home;
