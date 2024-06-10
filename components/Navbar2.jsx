"use client"
import React from 'react'
import { ShiftingDropDown } from './ShiftingDropdown'
import Header from "./header"
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar2 = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log("Scroll Position:", currentScrollPos);
      console.log("Previous Scroll Position:", prevScrollPos);
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    
    <motion.div
    initial={{ y: 0 }}
    animate={{ y: visible ? 0 : -100 }} // Move header up when visible is false
    transition={{ duration: 0.3 }} // Smooth transition duration
    className={`fixed top-0 left-0 w-full transition-opacity duration-300 z-[999] ${
      visible ? "opacity-100" : "opacity-0"
    } ${!visible ? "pointer-events-none" : ""}`}
  >
    {" "}
    <div className='mx-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 pt-2 sticky top-0 z-[999]'>
        <div className='flex justify-center items-center'>
        <div className='bg-black w-[588px] h-10 p-6 flex justify-between items-center text-white text-xl rounded-full border border-gray-600'>
            <p className='font-semibold'>Loyaltri</p>
            <ShiftingDropDown/>
            <Header/>
            <p className='hidden md:block'>Login</p>
        </div>
        </div>
    </div>
  </motion.div>
  )
}

export default Navbar2