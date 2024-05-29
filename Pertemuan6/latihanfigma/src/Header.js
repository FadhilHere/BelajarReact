import React from "react";

export default function Header() {
  function KomponenHeader() {
    return (
      <div className="bg-white drop-shadow-md flex flex-row justify-between px-[150px] py-[23px] items-center">
        <Logo />
        <Menu />
        <LoginRegister />
      </div>
    );
  }

  function Logo() {
    return (
      <div className="flex flex-row items-center">
        <img src={"./Logo.png"} className="w-10 h-10 m-[8px]" alt="Logo" />
        <label className="text-[14px] font-bold text-[#545BE8]">
          mangCoding Store
        </label>
      </div>
    );
  }

  function Menu() {
    return (
      <div>
        <ul className="flex flex-row space-x-[40px]">
          <li className="text-[16px] font-bold text-black hover:underline">
            Home
          </li>
          <li className="text-[16px] text-black hover:underline">Course</li>
          <li className="text-[16px] text-black hover:underline">About Us</li>
          <li className="text-[16px] text-black hover:underline">Article</li>
          <li className="text-[16px] text-black hover:underline">Contact</li>
        </ul>
      </div>
    );
  }

  function LoginRegister() {
    return (
      <div className="flex space-x-4">
        <button className="px-6 py-2 border border-[#545BE8] text-[#545BE8] rounded-lg hover:bg-[#545BE8] hover:text-white transition-colors duration-300">
          Log in
        </button>
        <button className="px-6 py-2 bg-[#545BE8] text-white rounded-lg hover:bg-[#3e46d7] transition-colors duration-300">
          Register
        </button>
      </div>
    );
  }

  return (
    <div>
      <KomponenHeader />
    </div>
  );
}
