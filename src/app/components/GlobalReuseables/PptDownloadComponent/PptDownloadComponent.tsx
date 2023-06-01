import Image from "next/image";
import React from "react";
import { GrDownload } from "react-icons/gr";

const PptDownloadComponent = () => {
  return (
    <div className="flex items-center gap-5 border-[1px] border-gray-500 border-opacity-40 w-[450px] p-5 rounded-xl">
      <Image src="/assets/ppt-icon.png" alt="ppt-icon" width={30} height={30} />
      <div className="flex items-center">
        <span className="flex flex-col">
          <p>Evolution chapter notes</p>
          <p>32.5</p>
        </span>
        <GrDownload className="ml-[150px]" />
      </div>
    </div>
  );
};

export default PptDownloadComponent;
