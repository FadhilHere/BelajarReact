import React from "react";

export default function Hero() {
  function HeroText() {
    return (
      <div className="md:w-1/2">
        <p className="text-[#545BE8] text-lg font-semibold">Let's Begins</p>
        <h1 className="text-5xl font-bold text-black leading-tight">
          Let's Find The Right <span className="text-[#545BE8]">Course</span>{" "}
          For you
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim, sem non convallis molestie.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-[#545BE8] text-white rounded-lg">
            Register
          </button>
          <button className="px-6 py-3 flex items-center space-x-2 border border-gray-300 rounded-lg">
            <span className="w-6 h-6 flex items-center justify-center">
              <img
                src="./playKuning.png"
                alt="Play Icon"
                className="w-full h-full"
              />
            </span>
            <span>Play Video</span>
          </button>
        </div>
      </div>
    );
  }

  // function Buttons() {
  //   return (

  //   );
  // }

  function HeroImage() {
    return (
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src="./fotoKanan.png" alt="Foto Kanan" className="w-full" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex flex-col md:flex-row items-center md:justify-between px-[150px] py-[50px]">
      <HeroText />
      <HeroImage />
    </div>
  );
}
