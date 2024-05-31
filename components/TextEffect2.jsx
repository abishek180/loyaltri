import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextEffect2 = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.animated-text');

    textElements.forEach((text, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top 0%',
          end: 'bottom 0%',
          scrub: true,
          onEnter: () => {
            gsap.to(text, { opacity: 1, scale: 1.2, duration: 0.3 });
            if (index > 0) {
              gsap.to(textElements[index - 1], { scale: 1, duration: 0.3 });
            }
          },
          onLeaveBack: () => {
            gsap.to(text, { opacity: 0.2, scale: 1, duration: 0.3 });
          },
        },
      });

      // Add a delay between animations
      tl.to(text, { scale: 1.2, duration: 0.3, delay: index * 2.5 });
    });
  }, []);

  return (
    <div>
      <div className="sticky-wrapper h-[200vh]">
        <section className="sticky-section sticky top-0 h-screen flex justify-center items-center bg-black">
          <div className="flex flex-col justify-center items-center">
            {["Then", "something", "crazy", "happened"].map((text, index) => (
              <p
                key={index}
                className="animated-text text-white text-[86px] font-semibold text-center leading-none"
                style={{ opacity: 0.2 }}
              >
                {text}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TextEffect2;
