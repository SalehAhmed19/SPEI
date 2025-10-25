import React from "react";
import { assets } from "../assets/assets";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  const options = [
    { name: "Tution fee calculator", link: "#" },
    { name: "Online examination", link: "#" },
    { name: "Results", link: "#" },
    { name: "Library", link: "#" },
    { name: "News Letter", link: "#" },
    { name: "Online Payment", link: "#" },
    { name: "All Form", link: "#" },
  ];

  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Academic", link: "/academic" },
    { name: "Department", link: "/department" },
    { name: "Admission", link: "/admission" },
    { name: "Administration", link: "/administration" },
    { name: "Teachers", link: "/teachers" },
    { name: "Journal & Publication", link: "/journal-publication" },
    { name: "Gallery", link: "/gallery" },
    { name: "Alumni", link: "/alumni" },
    { name: "Career", link: "/career" },
  ];
  return (
    <div className="bg-white border-b-2 border-green-600">
      <div className="max-w-7xl mx-auto py-5">
        <div className="flex items-center justify-between">
          <img src={assets.logo} alt="logo" className="w-52 mx-auto md:mx-0" />{" "}
          <div>
            <button className="bg-green-700 text-white px-5 py-2 rounded-full cursor-pointer font-bold flex items-center gap-2">
              <MdLogin className="text-xl" /> Student Login
            </button>
            {/* <input
              type="text"
              className="border rounded-full border-black/20 bg-black/5 px-5 py-1 outline-none w-full hidden md:block"
              placeholder="Search..."
            /> */}
          </div>
        </div>
        <div className="text-xs font-extrabold md:flex items-center justify-end gap-2 w-full hidden">
          {options.map((option, idx) => (
            <Link
              key={idx}
              to={option.link}
              className="hover:text-green-600 duration-300"
            >
              {option.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Menus */}
      <div className="bg-green-700 p-4 text-white hidden md:flex items-center justify-center gap-5 font-extrabold text-[12px]">
        {menus.map((menu, idx) => (
          <Link to={menu.link} key={idx} className="cursor-pointer uppercase">
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
