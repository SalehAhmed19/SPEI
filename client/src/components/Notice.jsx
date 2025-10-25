import { assets } from "../assets/assets";

export default function Notice() {
  const notices = [
    {
      title:
        "Establishment of a new office titled “Office of the International Affairs” at Square Polytechnic Institute",
      date: "15 October 2025",
      href: "#",
    },
    {
      title:
        "Establishment of a new office titled “Office of the International Affairs” at Square Polytechnic Institute",
      date: "15 October 2025",
      href: "#",
    },
    {
      title:
        "Establishment of a new office titled “Office of the International Affairs” at Square Polytechnic Institute",
      date: "15 October 2025",
      href: "#",
    },
    {
      title:
        "Establishment of a new office titled “Office of the International Affairs” at Square Polytechnic Institute",
      date: "15 October 2025",
      href: "#",
    },
    {
      title:
        "Establishment of a new office titled “Office of the International Affairs” at Square Polytechnic Institute",
      date: "15 October 2025",
      href: "#",
    },
  ];
  return (
    <div
      className="p-14 my-20"
      style={{ backgroundImage: `url(${assets.bg})` }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-5 rounded-2xl">
        <div>
          <div className="bg-green-700 text-white p-3 font-extrabold rounded-t-2xl">
            <p>Notice & Announcement</p>
          </div>
          <div className="bg-white rounded-b-2xl">
            <ul className="p-5 flex flex-col gap-10">
              {notices.map((notice, idx) => (
                <li key={idx}>
                  <a href={notice.href}>
                    <h4 className="font-bold">{notice.title}</h4>
                    <p className="font-bold uppercase text-xs text-green-700 mt-3">
                      {notice.date}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-green-700 text-white p-3 font-extrabold rounded-t-2xl">
            <p>Notice & Announcement</p>
          </div>
          <div className="bg-white rounded-b-2xl">
            <ul className="p-5 flex flex-col gap-10">
              {notices.map((notice, idx) => (
                <li key={idx}>
                  <a href={notice.href}>
                    <h4 className="font-bold">{notice.title}</h4>
                    <p className="font-bold uppercase text-xs text-green-700 mt-3">
                      {notice.date}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
