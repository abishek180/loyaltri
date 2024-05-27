import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextEffect = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      setScrollProgress(progress);

      // Check if sticky section reaches top-0
      const stickySection = document.querySelector('.sticky-section');
      if (stickySection) {
        const { top } = stickySection.getBoundingClientRect();
        setAnimationStart(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="sticky-wrapper h-[350vh]">
        <section className="sticky-section sticky top-0 h-screen flex justify-center items-center bg-black">
          <div className="flex flex-col justify-center items-center">
            {["Then", "something", "crazy", "happened"].map((text, index) => (
              <motion.p
                key={index}
                className={`text-${animationStart && scrollProgress > index * 0.2 ? 'white' : 'white/20'} text-[86px] font-semibold text-center leading-none transition-all ease-in-out duration-300`}

                style={{
                  scale: animationStart && scrollProgress > index * 0.2 ? 1.2 : 1,
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TextEffect;
