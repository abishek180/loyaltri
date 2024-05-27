"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import story from "@/public/images/story.jpg";
import SplitImageEffect from "@/components/SplitImageEffect";
import TextEffect from "@/components/TextEffect";

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
      height: "15rem",
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
      rootMargin: '0px',
      threshold: Array.from({ length: 21 }, (_, i) => i * 0.05), // Creates an array [0, 0.05, 0.1, ..., 1]
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index'), 10);
        if (entry.intersectionRatio >= 0.9) {
          setActiveIndex(index);
        } else if (entry.intersectionRatio < 0.9 && activeIndex === index) {
          setActiveIndex(-1); // Reset if the element is less than 50% visible
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.observer-element');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [activeIndex]);

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 pt-20 py-20 flex flex-col gap-20">
        <div className="flex flex-col justify-center items-center gap-10 relative">
          <div className="w-[600px] h-[600px] overflow-hidden rounded-3xl">
            <Image
              src={story}
              className="w-full h-full object-cover object-center"
              alt="Story"
            />
          </div>
          <p>Mayuresh & Tejas' story of creating Chronicle.</p>
          <h1 className="absolute text-center text-[110px] text-white font-semibold leading-tight">
            A decade long affair with presentations
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <motion.span
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={lineVariants}
            className="w-[1px] bg-gray-400"
          ></motion.span>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            className="bg-black border border-gray-500 rounded-3xl flex justify-center items-center px-5 py-2"
          >
            <p className="text-sm text-white font-medium">2012</p>
          </motion.div>
        </div>
      </section>
      <TextEffect/>
      <section className=" max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 bg-black py-20 text-white flex flex-col gap-28 justify-between items-center">
      {Array(4).fill(0).map((_, index) => (
        <div
          key={index}
          data-index={index}
          className={`observer-element flex flex-col justify-center items-center gap-10 transition-transform duration-300 ease-in-out transform ${
            index === activeIndex ? 'scale-110 text-white' : 'scale-90 text-white/10'
          }`}>
          <div className={`rounded-3xl flex justify-center items-center transition-colors duration-300 ease-in-out ${
            index === activeIndex ? 'bg-purple-600 ' : 'bg-gray-500/40 '
          }`}>
            <p className="text-6xl font-semibold py-5 px-10">A</p>
          </div>
          <p className="text-[80px] font-semibold">Narrative</p>
        </div>
      ))}
    </section>

   <SplitImageEffect/>
    </>
  );
};

export default Page;
