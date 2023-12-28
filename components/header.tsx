import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCartAdd, BiMapAlt, BiSearch, BiUser } from "react-icons/bi";

export default function Header() {
  return (
    <main>
      <title>Biệt Đội Báo Con</title>
      <div className="bg-slate-100 w-full border-b-2 border-b-red-500 p-2 fixed">
        <div className="text-xl flex items-center mx-auto max-w-6xl">
          <Link href="/" className="flex items-center text-green-500 font-bold">
            <Image src="/4.png" width="50" height="50" alt="4"></Image>
            <p className="hidden sm:flex">Biệt Đội Báo Con</p>
          </Link>

          <div className="hidden md:flex-1 md:justify-end md:flex md:items-center">
            <Link href="">
              <BiUser />
            </Link>
            <Link href="" className="mx-6">
              <BiMapAlt />
            </Link>
            <Link href="">
              <BiCartAdd />
            </Link>
            <Link href="">
              <button type="button" className="bg-green-500 p-2 ml-10 text-white ">
                Sign in
              </button>
            </Link>
          </div>
        </div>

        <div className=""></div>
      </div>
    </main>
  );
}
