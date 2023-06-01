"use client";
import Image from "next/image";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import ClassPage from "./components/ClassPageComponent/ClassPage";

export default function Home() {
  return (
    <main className="pt-3 ml-5 ">
      <div className="home-layout">
        {/* ----------- Logo ---------------- */}
        <div className="h-[100px] flex justify-center items-center">
          <Image
            width={100}
            height={50}
            alt="logo.png"
            src="logo.svg"
            className="w-[170px] h-auto mx-5"
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
        <div className="bg-gray-100">
          <ClassPage />
        </div>
        {/* -------------- Main Content ------- */}
      </div>
    </main>
  );
}
