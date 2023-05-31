import React from "react";
import { Input } from "antd";
// ----------- Icons Import -------------------
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="flex items-center mx-10 gap-5">
      <BiLeftArrowAlt className="text-[40px] opacity-30" />
      <Input
        placeholder="Assignments / lorem ipsum dolor sit"
        type="text"
        className=""
      />
      <IoMdNotificationsOutline className="text-[40px] opacity-6" />
      <Image
        width={100}
        height={100}
        src="/avatar.png"
        alt="avatar.png"
        className="rounded-full h-[100px] w-[100px]"
      />
    </div>
  );
};

export default TopBar;
