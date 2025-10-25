import React from "react";
import SectionTitle from "./SectionTitle";
import { assets } from "../assets/assets";

export default function LatestNews() {
  const latestNewses = [
    {
      thumbnail: assets.teacher,
      title: "Master Class on English Language Improvement and...",
      date: "15 October 2025",
    },
    {
      thumbnail: assets.teacher,
      title: "Master Class on English Language Improvement and...",
      date: "15 October 2025",
    },
    {
      thumbnail: assets.teacher,
      title: "Master Class on English Language Improvement and...",
      date: "15 October 2025",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title={"Latest News"} />

      <div className="grid grid-cols-3 gap-5">
        {latestNewses.map((news, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-5 bg-[#dedede]/20 rounded-2xl"
          >
            <img src={news.thumbnail} alt="" className="rounded-t-2xl" />
            <div className="p-5">
              <h4 className="font-extrabold">{news.title}</h4>
              <p className="font-extrabold uppercase text-xs text-green-700 mt-5">
                {news.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
