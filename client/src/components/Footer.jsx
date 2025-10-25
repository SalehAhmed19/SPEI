import { assets } from "../assets/assets";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
  ];

  const importantLinks = [
    {
      name: "Admission",
      links: [
        "Why study at SPEI?",
        "Entry requirements",
        "Payments Guidelines",
        "Tution Fees",
      ],
    },
    {
      name: "About",
      links: [
        "About SPEI",
        "Overview",
        "Mission, Vision & Motto",
        "Our unique features",
      ],
    },
    {
      name: "Coure Links",
      links: [
        "Running students",
        "Results Archive",
        "Library",
        "Our unique features",
      ],
    },
    {
      name: "Quick Links",
      links: [
        "Contact Us",
        "News & Events",
        "Notice & Announcement",
        "Privacy Policy",
      ],
    },
  ];
  const year = new Date().getFullYear();
  return (
    <div
      className="mt-20 text-white p-10"
      style={{
        backgroundImage: `url(${assets.footer})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h5 className="text-center font-bold text-xl">Connected with us</h5>

      <div className="flex justify-center items-center gap-5 text-xl my-5">
        {socialLinks.map((link, idx) => (
          <a key={idx} href={link.url}>
            {link.icon}
          </a>
        ))}
      </div>

      <hr className="w-36 mx-auto my-10" />
      <div className="flex justify-center mt-5 gap-20">
        {importantLinks.map((section, idx) => (
          <ul key={idx} className="flex flex-col gap-5">
            <h6 className="font-bold text-xl text-yellow-500">
              {section.name}
            </h6>
            {section.links.map((link, idx) => (
              <li key={idx} className="font-bold cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <p className="text-center mt-10">
        © {year} Square Polytechnic Institute | Sherpur, Bogura, Bangladesh. All
        Rights Reserved.
      </p>
    </div>
  );
}
