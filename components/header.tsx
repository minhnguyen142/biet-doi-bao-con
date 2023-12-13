import React from "react";
import { BiLogoFacebookCircle, BiLogoInstagram, BiPhone } from "react-icons/bi";

export default function Header() {
  return (
    <div className="">
        <BiLogoFacebookCircle className="text-blue-500 text-6xl"/>
        <BiLogoInstagram className="text-6xl text-rose-500"/>
        <BiPhone className="text-6xl text-green-500"/>
    </div>
  );
}
