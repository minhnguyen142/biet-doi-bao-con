import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Explore() {
    return (
        <div className="border-4 my-10 mx-auto justify-center max-w-6xl">
            <p className="text-4xl">Hãy đến tiệm Báo Con của chúng mình!</p>
            <p>Sau những tiết học vật vã trên giảng đường, sau những giờ thể dục {'"hết mana"'} ở sân thể chất </p>
            <Link href="/" className="flex w-fit" ><p className="p-3 bg-green-500 m-4">Khám phá</p></Link>
        </div>
    )
}