import React from "react";
//import ResizePanel from "react-resize-panel";
import ResizePanel from "./ResizePanel";
import style from "./Resizemain.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import story from "@/public/images/story.jpg";
import story1 from "@/public/images/loyaltriold.png";
import ellipse from "@/public/images/Ellipse.png";

let cx = classNames.bind(style);

export default () => (
  <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 flex flex-col lg:flex-row justify-between gap-10 items-center relative py-40">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[1283px]">
        <Image src={ellipse} className="w-full h-full object-cover object-center"/>
    </div>
    {/* <div className="absolute left-1/2 top-[80px] border border-[#404040] -translate-x-1/2 w-[1283px] h-[1250px] bg-black rounded-full -z-10 shrink-0">
    </div> */}
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
            <stop stop-color="#A594FD" />
            <stop offset="1" stop-color="#CE40FF" />
          </linearGradient>
        </defs>
      </svg>
      <p className="text-[26px] text-white font-bold">2012</p>
    </div>
    <div className={cx("container")}>
      {/* <ResizePanel direction="s">
      <div className={cx('header', 'panel')}>
        <span>header</span>
      </div>
    </ResizePanel> */}

      <div className={cx("body")}>
        {/* <ResizePanel direction="e" style={{ flexGrow: '1' }} >
        <div className={cx('sidebar', 'withMargin', 'panel')}>left panel<br /> with margin <br />default 50% of content area using flex-grow</div>
      </ResizePanel> */}
        <div className={cx("content", "panel")}>
          <Image
            src={story1}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <ResizePanel
          direction="w"
          style={{ width: "100%" }}
          handleClass={style.customHandle}
          borderClass={style.customResizeBorder}
        >
          <div className={cx("sidebar", "panel")}>
            <Image
              src={story}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </ResizePanel>
      </div>

      {/* <ResizePanel direction="n" style={{height: '200px'}}>
      <div className={cx('footer', 'panel')}>
        <div className={cx('footerArea')}>
          <div className={cx('footerAreaContent')}>
            <span>footer area, min height: 100px</span>
          </div>
        </div>
        <div className={cx('footerBottomBar')}>
          bottom bar
        </div>
      </div>
    </ResizePanel> */}
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
            <stop stop-color="#A594FD" />
            <stop offset="1" stop-color="#CE40FF" />
          </linearGradient>
        </defs>
      </svg>
      <p className="text-[26px] text-white font-bold">2012</p>
    </div>
  </div>
);
