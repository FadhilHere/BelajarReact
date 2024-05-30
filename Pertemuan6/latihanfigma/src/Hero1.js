import React from "react";

export default function Hero1() {
  function HeroText() {
    return (
      <div>
        <label className="inter-400 text-[18px] text-[#545BE8]">
          Let's <font className="font-bold">Begins</font>
        </label>
        <div className="poppins-bold text-[64px]">
          Let's Find The <br />
          Right <font className="text-[#545BE8]">Course</font> For <br />
          you
        </div>
        <p className="poppins-regular text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <br />
          dignissim, sem non convallis molestie.
        </p>
      </div>
    );
  }

  function HeroImage() {
    return <div></div>;
  }

  return (
    <div>
      <HeroText />
      <HeroImage />
    </div>
  );
}
