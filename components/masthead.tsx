import React from "react";
import Image from "next/image";

export default function MastHead() {
  return (
    <div className="h-screen">
      <Image
        src="/xUvm1i5-christmas-trees-wallpaper.jpg"
        alt="xUvm1i5-christmas-trees-wallpaper"
        height="4000"
        width="4000"
        className="rounded-b-md w-full h-full object-cover"
      ></Image>
    </div>
  );
};