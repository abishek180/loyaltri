"use client";
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import story from '@/public/images/story.jpg';

const SplitImageEffect = () => {
  const controls = useAnimation();
  const ref = useRef();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const imageHeight = ref.current.offsetHeight;
    const scrollPosition = (scrollTop + windowHeight - ref.current.offsetTop) / imageHeight;

    controls.start(scrollPosition > 0.9 ? 'visible' : 'hidden');
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-40">
      <div className="flex justify-center items-center relative">
        <motion.div
          ref={ref}
          className="w-[200px] h-[250px] overflow-hidden rounded-3xl"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Image src={story} className="w-full h-full object-cover object-center" />
        </motion.div>
        <motion.div
          className="w-[200px] h-[250px] overflow-hidden rounded-3xl"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 0 },
            hidden: { opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Image src={story} className="w-full h-full object-cover object-center" />
        </motion.div>
      </div>
    </div>
  );
};

export default SplitImageEffect;
