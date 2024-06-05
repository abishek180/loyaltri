import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedLineBox = () => {
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
    <div className="flex flex-col items-center gap-6">
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={lineVariants}
        className="w-[1px] bg-gradient-to-b from-[#111] to-[#414141]"
      ></motion.span>
      {/* <motion.div
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
              <stop stopColor="#A594FD" />
              <stop offset="1" stopColor="#CE40FF" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-[26px] text-white font-bold">2012</p>
      </motion.div> */}
    </div>
  );
};

export default AnimatedLineBox;
