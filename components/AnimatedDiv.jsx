import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedDiv = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(box1Ref.current, {
      scale: 1.2,
      top: 30,
      zIndex: 10,
      duration: 0.5,
      ease: "power2.inOut",
    })
      .to(box1Ref.current, {
        scale: 1,
        top: 0,
        zIndex: 1,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(
        box2Ref.current,
        {
          scale: 1.2,
          top: 30,
          zIndex: 10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(box2Ref.current, {
        scale: 1,
        top: 0,
        zIndex: 1,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(
        box3Ref.current,
        {
          scale: 1.2,
          top: 30,
          zIndex: 10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to(box3Ref.current, {
        scale: 1,
        top: 0,
        zIndex: 1,
        duration: 1,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 h-screen flex flex-col justify-center items-center gap-24 lg:gap-32">
      <div className="flex flex-col gap-5">
        <p className="text-[#7D6DEB] text-[56px] font-semibold uppercase">
          QUERY
        </p>
        <p className="text-white text-xl lg:text-[40px] font-semibold">
          The constant question we faced then was
        </p>
      </div>
      <div className="relative">
        <div
          ref={box1Ref}
          className="w-[280px] lg:w-[800px] rounded-[46px] bg-[#6D4EFF] p-3 lg:p-10 flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2"
          style={{ zIndex: 1 }}
        >
          <p className="text-white text-sm lg:text-5xl font-medium text-center">
            HOW YOU GONNA UPGRADE YOUR SOFTWARE??
          </p>
        </div>
        <div
          ref={box2Ref}
          className="w-[280px] lg:w-[800px] rounded-[46px] bg-[#4e31d1] p-3 lg:p-10 flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2"
          style={{ zIndex: -1 }}
        >
          <p className="text-white text-sm lg:text-5xl font-medium text-center">
            hgfdvafdbvDOJFANJDFFD NNJNBB NBNBBKB{" "}
          </p>
        </div>
        <div
          ref={box3Ref}
          className="w-[280px] lg:w-[800px] rounded-[46px] bg-[#24185e] p-3 lg:p-10 flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2"
          style={{ zIndex: -2 }}
        >
          <p className="text-white text-sm lg:text-5xl font-medium text-center">
            with jdjivjdwviwv IARGIARGRGN DGNGNG{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedDiv;
