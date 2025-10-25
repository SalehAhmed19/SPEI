import { assets } from "../assets/assets";

export default function Banner() {
  return (
    <div>
      <img src={assets.banner} alt="" className="h-[742px]" />
      <marquee className="bg-green-700 text-white p-3 font-extrabold">
        Admission Open | Session 2025-26 | Up to 40000 BDT Scholarships |
        Programs: Civil Technology, Electrical Technology, Mechanical
        Technology, Computer Science & Technology, Textile Technology
      </marquee>
    </div>
  );
}
