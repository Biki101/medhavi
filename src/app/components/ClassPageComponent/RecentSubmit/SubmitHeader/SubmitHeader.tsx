import { Avatar, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { CgSandClock } from "react-icons/cg";
import Image from "next/image";
import React from "react";

const SubmitHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <span className="w-[70px] h-auto rounded-xl border-2 flex justify-center text-red-400 items-center shadow-md shadow-gray-100">
          SC
        </span>
        <div>
          <h1 className="font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            consectetur.
          </h1>
          <div className="flex gap-5">
            {/* ------------- Submitted By ------------- */}
            <div className="flex gap-3 items-center">
              <span>Submitted by:</span>
              <Avatar.Group
                maxCount={2}
                maxPopoverTrigger="click"
                size="large"
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                }}
              >
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </div>
            {/* ------------- Submitted By End ------------- */}

            {/* -------------- Assigned Date -------------- */}
            <div className="flex gap-3 items-center">
              Assigned on:
              <span>14 Apr 2021, 8:43PM</span>
            </div>
            {/* -------------- Assigned Date End -------------- */}
          </div>
        </div>
      </div>
      {/* <Image
        src="/assets/pending-date.png"
        alt="data-image"
        height={100}
        width={100}
        className="w-20 h-10"z
      /> */}
      <span className="flex gap-3 text-[14px] items-center self-start border-[2px] border-green-600 p-1 rounded-full">
        <span className="bg-green-600 text-[16px] p-3 text-white rounded-full">
          <CgSandClock className=" " />
        </span>
        <p className="mr-2"> 4 Days</p>
      </span>
    </div>
  );
};

export default SubmitHeader;
