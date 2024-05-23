"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import story from "@/public/images/story.jpg";

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

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 pt-20 flex flex-col gap-20">
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
      <div className="sticky-wrapper h-[300vh]">
        <section className="sticky-section sticky top-0 h-screen flex justify-center items-center bg-black">
          <div className="flex flex-col justify-center items-center">
            {["Something", "Then", "Crazy", "Happened"].map((text, index) => (
              <p
                key={index}
                className="text-white text-6xl font-bold text-center"
              >
                {text}
              </p>
            ))}
          </div>
        </section>
      </div>
      <section className="h-screen bg-black text-white flex justify-center items-center">
        <h2>Next Section Content</h2>
      </section>
    </>
  );
};

export default Page;
