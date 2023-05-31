"use client";
import Image from "next/image";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

export default function Home() {
  return (
    <main className="pt-5 mx-5 ">
      <div className="home-layout">
        {/* ----------- Logo ---------------- */}
        <div className="h-[100px] flex justify-center items-center">
          <img
            width={100}
            height={50}
            alt="logo.png"
            src="/logo.png"
            className="w-full h-[70px] mx-5"
          />
        </div>
        {/* --------------Logo End ---------- */}
        {/* --------------Top Bar ----------- */}
        <TopBar />
        {/* --------------Top Bar End -------- */}
        {/* --------------Side Bar ------------ */}
        <SideBar />
        {/* -------------- SideBar End -------- */}
        {/* -------------- Main Content ------- */}
        <div className="bg-gray-100">Main Content</div>
        {/* -------------- Main Content ------- */}
      </div>
    </main>
  );
}
