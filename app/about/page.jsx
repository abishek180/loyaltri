"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Images
import logo from "@/public/images/logo.png";
import story from "@/public/images/story.jpeg";
import redbg from "@/public/images/redbg.png";
import redicon from "@/public/images/redicon.png";
import bluebg from "@/public/images/bluebg.png";
import blueicon from "@/public/images/blueicon.png";
import hr from "@/public/images/hr.png";
import meeting from "@/public/images/meeting.png";
import popup from "@/public/images/pop-up.png";

// Components
import TextEffect2 from "@/components/TextEffect2";
import AnimatedDiv from "@/components/AnimatedDiv";
import { GlobeDemo } from "@/components/GlobeDemo";
import { ImageSlider } from "@/components/ImageSlider";
import AnimatedLineBox from "@/components/AnimatedLineBox";
import ServiceType from "@/components/ServiceType";

const Page = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "0",
      transition: {
        duration: 1,
        when: "beforeChildren",
        onComplete: () => {
          controls.start("visibleBox");
        },
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0 },
    visibleBox: { opacity: 1, scale: 1 },
  };

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 21 }, (_, i) => i * 0.05), // Creates an array [0, 0.05, 0.1, ..., 1]
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index"), 10);
        if (entry.intersectionRatio >= 0.9) {
          setActiveIndex(index);
        } else if (entry.intersectionRatio < 0.9 && activeIndex === index) {
          setActiveIndex(-1); // Reset if the element is less than 50% visible
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const elements = document.querySelectorAll(".observer-element");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [activeIndex]);

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 pt-20 py-20 flex flex-col gap-20">
        <div className="flex flex-col justify-center items-center gap-10 relative">
          <div className="w-full h-full lg:w-[600px] lg:h-[600px] overflow-hidden rounded-3xl">
            <Image
              src={logo}
              className="w-full h-full object-cover object-center"
              alt="Story"
            />
          </div>
          {/* <p>Mayuresh & Tejas' story of creating Chronicle.</p> */}
          <h1 className="absolute text-center text-[40px] lg:text-[59px] text-white font-bold leading-normal pt-10">
            THE LEADING LIGHT IN THE BATTLE OF FUNCTIONALITY
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-[#81859F] text-2xl font-normal">About us</p>
          <p className="text-[#81859F] text-center text-3xl lg:text-4xl font-bold">
            Story of creating Loyaltri.
          </p>
          <motion.span
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={lineVariants}
            className="w-[1px] bg-[linear-gradient(180deg,#111,#414141)]"
          ></motion.span>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            className="bg-black border border-[#828282] rounded-3xl flex justify-center items-center gap-2 px-4 py-2 shadow-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M17 0C17 9.38884 9.38884 17 0 17C9.38884 17 17 24.6112 17 34C17 24.6112 24.6112 17 34 17C24.6112 17 17 9.38884 17 0Z"
                fill="url(#paint0_linear_756_2966)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_756_2966"
                  x1="17"
                  y1="29.0928"
                  x2="17"
                  y2="5.08247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A594FD" />
                  <stop offset="1" stop-color="#CE40FF" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[26px] text-white font-bold">2012</p>
          </motion.div>
          <p className="text-white text-center text-3xl lg:text-4xl font-normal w-full lg:w-[900px]">
            Our story of{" "}
            <span className="text-[#7D6DEB] text-4xl lg:text-5xl font-semibold">
              LOYALTRI
            </span>{" "}
            started when we found the struggles of the education sector lacking
            HRMS software.
          </p>
        </div>
      </section>
      <ImageSlider />
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
        <div className="flex flex-col justify-center items-center gap-20">
          <p className="text-[#C6C6C6] text-center text-2xl lg:text-4xl font-normal">
            We created a version called{" "}
            <span className="text-[#7D6DEB] text-3xl lg:text-5xl font-semibold">
              WFM
            </span>{" "}
            and presented it to schools.
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="overflow-hidden w-full lg:w-[600px] h-[460px] rounded-2xl">
              <Image
                src={story}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[#C6C6C6] font-light text-2xl lg:text-4xl w-full lg:w-[550px]">
              Schools reported that WFM was intuitive and easy to use, making
              the transition from old systems smooth and reducing the time.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
        <ServiceType />
      </section>
      <TextEffect2 />
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
        <div className="flex flex-col justify-center items-center gap-20">
          <p className="text-[#C6C6C6] text-justify text-2xl lg:text-4xl font-normal w-full lg:w-[900px]">
            <span className="text-white text-3xl lg:text-5xl font-semibold">
              Success
            </span>{" "}
            and leads us to more development in our software. We gradually
            expanded our software into the Health and Retail sectors.
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="overflow-hidden rounded-full w-[180px] h-[180px] relative">
              <Image
                src={redbg}
                className="w-full h-full object-cover object-center"
              />
              <div className="overflow-hidden rounded-full w-[140px] h-[140px] absolute left-1/2 top-5 -translate-x-1/2">
                <Image
                  src={redicon}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-full w-[180px] h-[180px] relative">
              <Image
                src={bluebg}
                className="w-full h-full object-cover object-center"
              />
              <div className="overflow-hidden rounded-full w-[140px] h-[140px] absolute left-1/2 top-5 -translate-x-1/2">
                <Image
                  src={blueicon}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <AnimatedLineBox />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0">
        <div className="h-screen flex flex-col justify-center items-center gap-24 lg:gap-32">
          <div className="flex flex-col gap-5">
            <p className="text-[#7D6DEB] text-[56px] font-semibold uppercase">
              QUERY
            </p>
            <p className="text-white text-xl lg:text-[40px] font-semibold">
              The constant question we faced then was
            </p>
          </div>
          <div className="overflow-hidden w-full lg:w-[700px]">
            <Image
              src={popup}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
        <div className="flex flex-col justify-center items-center gap-20">
          <p className="text-[#C6C6C6] text-2xl lg:text-4xl w-full lg:w-[1050px] font-normal">
            We ensured a humble{" "}
            <span className="font-semibold text-3xl lg:text-5xl text-[#7D6DEB]">
              beginning
            </span>{" "}
            again from scratch. This time we shifted our course of making
            software.
          </p>
          <AnimatedLineBox />
          <p className="text-[#C6C6C6] text-2xl lg:text-4xl w-full lg:w-[1050px] text-center font-normal">
            We interviewed{" "}
            <span className="font-semibold text-3xl lg:text-5xl text-[#7D6DEB]">
              100+ HR Pros
            </span>{" "}
            and listed all of their struggles..
          </p>
          <div className="overflow-hidden w-full lg:w-[700px]">
            <Image
              src={hr}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="text-[#C6C6C6] text-2xl lg:text-4xl w-full lg:w-[1050px] text-center font-normal">
            We discussed this with our entire team, consisting of{" "}
            <span className="font-semibold text-3xl lg:text-5xl text-[#7D6DEB]">
              50
            </span>{" "}
            employees.
          </p>
          <div className="overflow-hidden w-full lg:w-[700px]">
            <Image
              src={meeting}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="text-[#C6C6C6] text-2xl lg:text-4xl w-full lg:w-[1050px] text-center font-normal">
            Thus, a new HRMS Software came into being. And we started to call it
            as
          </p>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
        <GlobeDemo />
      </section>
    </>
  );
};

export default Page;
