import React from "react";
import Image from "next/image";
import SubmitHeader from "./SubmitHeader/SubmitHeader";
import { GrDownload } from "react-icons/gr";

const RecentSubmit = () => {
  return (
    <div className="bg-white m-5 mb-3 flex flex-col gap-5 p-5 rounded-lg ">
      {/* -----------Submit Header ------------------ */}
      <SubmitHeader />
      {/* -----------Submit Header End ------------------ */}
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
        accusantium est. Veniam sapiente qui voluptatum veritatis, blanditiis
        accusamus. Suscipit, beatae. Eaque architecto a beatae modi. Nesciunt
        iusto adipisci, harum consequatur ipsa quam ea tempora quas odio
        blanditiis modi, perferendis reiciendis. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Eos exercitationem similique cupiditate
        soluta quis. Itaque illo, sit sequi suscipit aliquid, ex, minima animi
        error perspiciatis est nisi tempore accusantium laboriosam.
      </p>
      {/* ------------------ Download Submit -------------- */}
      <div className="flex items-center gap-5 border-[1px] border-gray-500 border-opacity-40 w-[450px] p-5 rounded-xl">
        <Image
          src="/assets/ppt-icon.png"
          alt="ppt-icon"
          width={30}
          height={30}
        />
        <div className="flex items-center">
          <span className="flex flex-col">
            <p>Evolution chapter notes</p>
            <p>32.5</p>
          </span>
          <GrDownload className="ml-[150px]" />
        </div>
      </div>
      {/* ------------------ Download Submit End-------------- */}
    </div>
  );
};

export default RecentSubmit;
