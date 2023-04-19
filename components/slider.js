import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper";

const SliderList = [
  {
    title: "JPYCNY",
    value: 1.0021,
    change: "+0.0136",
    percent: "+0.01%",
  },
  {
    title: "XAGUSD",
    value: 3965.21,
    change: "+0.022",
    percent: "+0.02%",
  },
  {
    title: "CADUSD",
    value: 65.21,
    change: "+0.032",
    percent: "+0.02%",
  },
  {
    title: "CNYUSD",
    value: 10.21,
    change: "+0.032",
    percent: "+0.02%",
  },
  {
    title: "CADUSD",
    value: 65.21,
    change: "+0.032",
    percent: "+0.02%",
  },
  {
    title: "CNYUSD",
    value: 10.21,
    change: "+0.032",
    percent: "+0.02%",
  },
  {
    title: "CADUSD",
    value: 65.21,
    change: "+0.032",
    percent: "+0.02%",
  },
  {
    title: "CNYUSD",
    value: 10.21,
    change: "+0.032",
    percent: "+0.02%",
  },
];

export default function Slider() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 pt-12 pb-16 text-alpha-800 font-alpha">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            590: {
              slidesPerView: 3,
            },
            760: {
              slidesPerView: 4,
            },
            990: {
              slidesPerView: 5,
            },
            1150: {
              slidesPerView: 6,
            },
          }}
          freeMode={true}
          grabCursor={true}
          autoplay={{
            delay: 0,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          speed={3500}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {SliderList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="border-r flex flex-col py-2 px-2">
                  <h1 className="font-bold uppercase text-sm">{item.title}</h1>
                  <h1 className="font-bold text-2xl font-exo uppercase">{item.value}</h1>
                  <div className="flex justify-between font-exo gap-x-2">
                    <div className="bg-gray-700 font-semibold text-white px-2">
                      {item.change}
                    </div>
                    <div className="bg-gray-700 font-semibold text-white px-2">
                      {item.percent}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
