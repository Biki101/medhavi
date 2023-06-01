import React from "react";
import Image from "next/image";
// ----------- Icons Import -------------------
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between mx-10 gap-5 h-[100px] mb-5">
      <div className="flex items-center gap-5">
        <BiLeftArrowAlt className="text-[30px] opacity-30" />
        <span>Assignments / Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="flex items-center gap-5">
        {/* <IoMdNotificationsOutline className="text-[30px] opacity-6" /> */}
        <Image
          src="/icons/icon/notifications.svg"
          alt="notification"
          height={25}
          width={25}
          className="cursor-pointer"
        />
        <Image
          width={50}
          height={50}
          src="/assets/Ellipse5.png"
          alt="avatar.png"
          className="rounded-full h-[40px] w-[40px]"
        />
      </div>
    </div>
  );
};

export default TopBar;
