import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import LatestNews from "../components/LatestNews";
import Notice from "../components/Notice";
import Recognition from "../components/Recognition";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-20">
        <About />
        <LatestNews />
      </div>
      <Notice />
      <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-20">
        <Recognition />
      </div>
    </div>
  );
}
