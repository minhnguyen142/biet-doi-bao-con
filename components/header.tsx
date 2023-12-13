import React from "react";
import {
  BiEnvelope,
  BiLogoFacebookCircle,
  BiPhone,
  BiSearch,
  BiShoppingBag,
} from "react-icons/bi";

export default function Header() {
  return (
    <div className="bg-green-500 p-3">
      <div className="flex w-full">
        <div className="flex items-center mx-auto">
          <div className="flex items-center">
            <BiLogoFacebookCircle className="text-blue-500 text-2xl bg-white rounded-full" />
            <p className="text-white mx-1 text-sm">Biệt Đội Báo Con</p>
          </div>
          <div className="flex items-center mx-10">
            <BiEnvelope className="text-red-500 text-2xl bg-white rounded-md" />
            <p className="text-white text-sm mx-1">bietdoibaocon@gmail.com</p>
          </div>
          <div className="flex items-center">
            <BiPhone className="text-white text-2xl" />
            <p className="text-white text-sm mx-1">0376342263</p>
          </div>
        </div>

        <div className="flex items-center mx-auto">
          <BiSearch className="text-2xl"/>
          <BiShoppingBag className="text-2xl"/>
        </div>
      </div>
    </div>
  );
}
