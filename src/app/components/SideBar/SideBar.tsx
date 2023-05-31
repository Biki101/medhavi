import React from "react";
// ------------ Icons ----------
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  BsChevronRight,
  BsGraphUp,
  BsPersonCircle,
  BsPersonPlus,
  BsQuestionDiamond,
} from "react-icons/bs";
import { TbNotification, TbReportAnalytics } from "react-icons/tb";
import { BiMessageSquareDots } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { VscSettings } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className="display flex flex-col text-[18px] gap-28">
      <div className="text-[18px] flex flex-col gap-2 mt-5">
        {/*--------- Dashboard ------------*/}
        <div className="sidebar-component">
          <RxDashboard />
          Dashboard
        </div>
        {/* --------- Dashboard End --------- */}
        {/*--------- Class ------------*/}
        <div className="sidebar-component bg-[var(--primary-color)] text-white">
          <HiOutlineUserGroup />
          Class
        </div>
        {/* --------- Class End --------- */}
        {/*--------- Attendance ------------*/}
        <div className="sidebar-component">
          <BsPersonPlus />
          Attendance
        </div>
        {/* --------- Attendance End --------- */}
        {/*--------- Test ------------*/}
        <div className="sidebar-component  justify-between">
          <div className="flex items-center gap-[20px]">
            <TbReportAnalytics />
            <span>Test</span>
          </div>
          <BsChevronRight />
        </div>
        {/* --------- Test End --------- */}
        {/*--------- Reports ------------*/}
        <div className="sidebar-component justify-between">
          <div className="flex  items-center gap-[20px]">
            <BsGraphUp />
            <span>Reports</span>
          </div>
          <BsChevronRight />
        </div>
        {/* --------- Reports End --------- */}
        {/*--------- Discipline ------------*/}
        <div className="sidebar-component">
          <BsPersonCircle />
          Discipline
        </div>
        {/* --------- Discipline End --------- */}
        {/*--------- Doubts ------------*/}
        <div className="sidebar-component">
          <BsQuestionDiamond />
          Doubts
        </div>
        {/* --------- Doubts End --------- */}
        {/*--------- Messages ------------*/}
        <div className="sidebar-component">
          <BiMessageSquareDots />
          <span>
            Messages <span className="notification-text">4</span>
          </span>
        </div>
        {/* --------- Messages End --------- */}
        {/*--------- Schedule ------------*/}
        <div className="sidebar-component">
          <SlCalender />
          Schedule
        </div>
        {/* --------- Schedule End --------- */}
        {/*--------- Notify ------------*/}
        <div className="sidebar-component">
          <TbNotification />
          Notify
        </div>
        {/* --------- Notify End --------- */}
      </div>

      {/*--------- Settings and Logout ------------*/}
      <div>
        <div className="sidebar-component">
          <VscSettings />
          <span>
            Settings <span className="notification-text">4</span>
          </span>
        </div>
        <div className="sidebar-component">
          <FiLogOut />
          Log Out
        </div>
        {/* --------- Settings and Logout End --------- */}
      </div>
    </div>
  );
};

export default SideBar;
