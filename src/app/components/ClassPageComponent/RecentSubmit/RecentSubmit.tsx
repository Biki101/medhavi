import React from "react";
import Image from "next/image";
import SubmitHeader from "./SubmitHeader/SubmitHeader";
import { GrDownload } from "react-icons/gr";
import PptDownloadComponent from "../../GlobalReuseables/PptDownloadComponent/PptDownloadComponent";

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
      <PptDownloadComponent />
    </div>
  );
};

export default RecentSubmit;
