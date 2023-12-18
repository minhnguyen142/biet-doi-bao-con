import React from "react";
import Image from "next/image";

const MastHead: React.FC = () => {
  return (
    <div className="w-full h-full bg-green-500">
      <Image
        src="/xUvm1i5-christmas-trees-wallpaper.jpg"
        alt="xUvm1i5-christmas-trees-wallpaper"
        height="1000"
        width="1000"
        className="rounded-b-md w-full h-full"
      ></Image>
      <p>Hello</p>
    </div>
  );
};

export default MastHead;
