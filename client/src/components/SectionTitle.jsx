import React from "react";

export default function SectionTitle({ title, className }) {
  return (
    <h2 className={`text-3xl font-extrabold text-green-700 ${className}`}>
      {title}
    </h2>
  );
}
