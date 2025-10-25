import React from "react";
import SectionTitle from "./SectionTitle";
import { assets } from "../assets/assets";

export default function Recognition() {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title={"Recognitions"} />
      <div className="flex items-center gap-10 text-center">
        <div>
          <img src={assets.govt} alt="" className="w-20 mx-auto mb-3" />
          <h4 className="font-extrabold text-green-700 text-xl">
            People's Republic of Bangladesh
          </h4>
        </div>
        <div>
          <img src={assets.bteb} alt="" className="w-20 mx-auto mb-3" />
          <h4 className="font-extrabold text-green-700 text-xl">
            Bangladesh Technical Education Board
          </h4>
        </div>
      </div>
    </div>
  );
}
