"use client";
import Image from "next/image";
import { useState } from "react";
import oldloyaltri from "@/public/images/loyaltriold.png";
import newloyaltri from "@/public/images/loyaltrinew.png";
import ellipse from "@/public/images/Ellipse.png";
import ellipse1 from "@/public/images/Ellipse1.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

export const ImageSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleMouseEnter = () => setIsDragging(true);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center relative py-40">
      <div className="absolute left-1/2 top-[-300px] -translate-x-1/2 w-[1220px] h-[800px] -z-20">
        <Image
          src={ellipse1}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute left-1/2 top-[50px] -translate-x-1/2 -z-10 w-[1283px]">
        <Image
          src={ellipse}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="bg-black border border-[#828282] rounded-3xl flex justify-center items-center gap-2 px-4 py-2 shadow-3xl">
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
          <p className="text-[26px] text-white font-bold">2010</p>
        </div>
        <div
          className="relative w-[800px] bg-[#141414] border border-[#828282] p-5 rounded-[32px]"
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="relative w-full max-w-[800px] aspect-[70/45] overflow-hidden select-none"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseEnter={handleMouseEnter}
              onTouchStart={handleMouseEnter}
            >
              <Image
                alt=""
                fill
                priority
                src={newloyaltri}
                className="w-full h-full object-center object-cover"
              />

              <div
                className="absolute top-0 left-0 right-0 w-full max-w-[800px] aspect-[70/45] overflow-hidden select-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  fill
                  priority
                  alt=""
                  src={oldloyaltri}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 w-2 bg-[#957EFF] cursor-ew-resize"
                style={{
                  left: `calc(${sliderPosition}% - 1px)`,
                }}
              >
                <div className="bg-[#957EFF] absolute rounded-full h-11 w-11 -left-5 top-[calc(50%-5px)] flex justify-center items-center gap-1">
                  <FaChevronLeft />
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black border border-[#828282] rounded-3xl flex justify-center items-center gap-2 px-4 py-2 shadow-3xl">
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
          <p className="text-[26px] text-white font-bold">2024</p>
        </div>
      </div>
    </div>
  );
};
