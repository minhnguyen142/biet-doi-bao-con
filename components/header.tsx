import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCartAdd, BiMapAlt, BiSearch, BiUser } from "react-icons/bi";

export default function Header() {
  return (
    <main>
      <title>Biệt Đội Báo Con</title>
      <div className="bg-slate-100 w-full border-b-2 border-b-red-500 p-2 fixed">
        <div className="text-2xl flex items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center text-green-500 font-bold">
            <Image src="/4.png" width="50" height="50" alt="4"></Image>
            <p className="hidden md:flex">Biệt Đội Báo Con</p>
          </Link>
          <div className="hidden md:flex-1 md:justify-end md:flex md:items-center">
            <div className="flex items-center mx-6">
              <input
                type="text"
                name="Search"
                placeholder="Tìm kiếm"
                className="rounded-md pl-6 pr-6 border-3"
              />
              <Link href="/" className="flex items-center flex-1 justify-end">
                <BiSearch className="absolute mx-2" />
              </Link>
            </div>
            <Link href="">
              <BiUser />
            </Link>
            <Link href="" className="mx-6">
              <BiCartAdd />
            </Link>
            <Link href="">
              <BiMapAlt />
            </Link>
          </div>
        </div>

        <div className=""></div>
      </div>
    </main>
  );
}
