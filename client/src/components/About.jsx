import React from "react";
import { assets } from "../assets/assets";

export default function About() {
  const highlights = [
    {
      data: 5,
      label: "Department",
    },
    {
      data: "Hostel",
      label: "Service",
    },
    {
      data: "2000+",
      label: "Alumni",
    },
    {
      data: "ICONIC",
      label: "Campus",
    },
  ];
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-5 bg-[#dedede]/20 py-5 px-10 rounded-l-2xl">
        <h3 className="font-extrabold uppercas text-green-700">About Us</h3>
        <h2 className="text-3xl font-extrabold text-green-700">
          History of <br /> Square Polytechnic Institute
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
          recusandae doloribus et minima repudiandae sunt, tenetur odit sit
          dolores vitae sequi dolorem nesciunt aut nihil ducimus reprehenderit
          in doloremque eligendi...{" "}
          <span className="text-green-700 font-extrabold cursor-pointer">
            Read More
          </span>
        </p>

        <div className="grid grid-cols-2 gap-5 text-green-700">
          {highlights.map((item, idx) => (
            <div key={idx} className="text-center p-5 bg-white rounded-2xl">
              <h3 className="text-4xl font-extrabold uppercase">{item.data}</h3>
              <p className="font-extrabold uppercase text-sm mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={assets.campus} alt="campus" className="rounded-r-2xl" />
      </div>
    </div>
  );
}
