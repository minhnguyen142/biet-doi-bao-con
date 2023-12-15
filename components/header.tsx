import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCartAdd, BiMapAlt, BiSearchAlt, BiUser } from "react-icons/bi";

export default function Header() {
  return (
    <main className="min-h-screen">
      <title>Biệt Đội Báo Con</title>
      <div className="bg-slate-100 w-full border-b-2 border-b-red-500 p-2">
        <div className="text-2xl flex items-center">
          <Link href="/" className="flex items-center text-green-500 font-bold">
            <Image src="/4.png" width="50" height="50" alt="4"></Image>
            <p className="hidden md:flex">Biệt Đội Báo Con</p>
          </Link>
         <div className="hidden md:flex-1 md:justify-end md:flex md:items-center">
            <input
              type="text"
              name="Search"
              placeholder="Tìm kiếm"
              className="text-base rounded-md mx-2 pl-2 pr-6"
            />
            <Link href="">
              <BiUser />
            </Link>
            <Link href="">
              <BiCartAdd className="mx-6" />
            </Link>
            <Link href="">
              <BiMapAlt />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
