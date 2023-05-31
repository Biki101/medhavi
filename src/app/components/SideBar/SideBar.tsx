import React from "react";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="display flex flex-col text-[16px] gap-28">
      <div className="text-[16px] flex flex-col gap-2 mt-5">
        {/*--------- Dashboard ------------*/}
        <div className="sidebar-component">
          <Image
            src="/icons/dashboard.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          Dashboard
        </div>
        {/* --------- Dashboard End --------- */}
        {/*--------- Class ------------*/}
        <div className="sidebar-component bg-[var(--primary-color)] text-white">
          <Image
            src="/icons/class_icon.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          Class
        </div>
        {/* --------- Class End --------- */}
        {/*--------- Attendance ------------*/}
        <div className="sidebar-component">
          <Image
            src="/icons/attendence.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          Attendance
        </div>
        {/* --------- Attendance End --------- */}
        {/*--------- Test ------------*/}
        <div className="sidebar-component  justify-between">
          <div className="flex items-center gap-[20px]">
            <Image
              src="/icons/test.png"
              alt="class-icon"
              height={18}
              width={18}
            />
            <span>Test</span>
          </div>
          <Image
            src="/icons/class_icon.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          <BsChevronRight />
        </div>
        {/* --------- Test End --------- */}
        {/*--------- Reports ------------*/}
        <div className="sidebar-component justify-between">
          <div className="flex  items-center gap-[20px]">
            <Image
              src="/icons/report.png"
              alt="class-icon"
              height={18}
              width={18}
            />
            <span>Reports</span>
          </div>
          <BsChevronRight />
        </div>
        {/* --------- Reports End --------- */}
        {/*--------- Discipline ------------*/}
        <div className="sidebar-component">
          <Image
            src="/icons/Discipline.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          Discipline
        </div>
        {/* --------- Discipline End --------- */}
        {/*--------- Doubts ------------*/}
        <div className="sidebar-component">
          <Image
            src="/icons/doubt.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          Doubts
        </div>
        {/* --------- Doubts End --------- */}
        {/*--------- Messages ------------*/}
        <div className="sidebar-component">
          <Image
            src="/icons/Messages.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          <span className=" flex items-center gap-1">
            Messages <span className="notification-text">4</span>
          </span>
        </div>
        {/* --------- Messages End --------- */}
        {/*--------- Schedule ------------*/}
        <div className="sidebar-component">
          <Image
            src="/icons/calendar.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          Schedule
        </div>
        {/* --------- Schedule End --------- */}
        {/*--------- Notify ------------*/}
        <div className="sidebar-component">
          <Image
            src="/icons/notify.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          Notify
        </div>
        {/* --------- Notify End --------- */}
      </div>

      {/*--------- Settings and Logout ------------*/}
      <div>
        <div className="sidebar-component">
          <Image
            src="/icons/setting.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          <span className=" flex items-center gap-1">
            Settings <span className="notification-text">4</span>
          </span>
        </div>
        <div className="sidebar-component">
          <Image
            src="/icons/logout.png"
            alt="class-icon"
            height={18}
            width={18}
          />
          Log Out
        </div>
        {/* --------- Settings and Logout End --------- */}
      </div>
    </div>
  );
};

export default SideBar;
