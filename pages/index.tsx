import React from "react";
import '@/app/globals.css';
import Header from "@/components/header";
import MastHead from "@/components/masthead";
import Explore from "@/components/explore";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <MastHead />
      <Explore />
    </main>
  );
};

