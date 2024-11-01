import React from "react";
import Navbar from "./navbar";

export default function FaqHero() {
  return (
    <div>
      <div className="w-full h-[400px] md:h-[596px] flex bg-yellowShade">
        <Navbar page=""/>
        <div className="w-full flex flex-col h-full  md:pt-20">
          <div className="flex w-full max-w-4xl mx-auto min-h-[600px] px-4 lg:p-0">
            <div className="flex flex-col gap-6 h-fit text-[#12305B] my-auto items-start text-sm w-full max-w-2xl">
              <p className="text-sm">We are here to help you</p>
              <h2 className="font-bold text-4xl md:text-6xl">
                How can we assist?
              </h2>
              <input
                type="text"
                placeholder="Search FAQs here"
                autoFocus
                className="w-full bg-white  h-12 p-4 mb-5 md:mb-0"
              />
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}
