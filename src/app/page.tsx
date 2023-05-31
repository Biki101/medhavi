"use client";
import Image from "next/image";
import Dashboard from "./components/Dashboard/Dashboard";
import TopBar from "./components/TopBar/TopBar";

export default function Home() {
  return (
    <main className="mt-10 mx-5">
      <div className="home-layout">
        {/* ----------- Logo ---------------- */}
        <div className="nav-bar h-[100px] flex justify-center items-center">
          <Image
            width={100}
            height={50}
            alt="logo.png"
            src="/logo.png"
            className="w-full h-[70px]"
          />
        </div>
        {/* --------------Logo End ---------- */}
        {/* --------------Top Bar ----------- */}
        <div className="side-bar">
          <TopBar />
        </div>
        {/* --------------Top Bar End -------- */}
        {/* --------------Side Bar ------------ */}
        <div className="main-content">Sidebar</div>
        {/* -------------- SideBar End -------- */}
      </div>
    </main>
  );
}
