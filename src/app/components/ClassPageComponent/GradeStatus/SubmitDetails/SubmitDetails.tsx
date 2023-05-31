import Image from "next/image";
import React from "react";

const SubmitDetails = ({ image, name, date, schedule }: any) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Image
          src={image}
          alt="student_image.png"
          height={50}
          width={50}
          className="w-auto h-50"
        />
        <div className="flex flex-col">
          <span>{name}</span>
          <span>{date}</span>
          <span className="">{schedule}</span>
        </div>
      </div>
      <span className="bg-[var(--primary-color)] p-5 px-8 h-10 flex items-center justify-center text-white rounded-full">
        Grade
      </span>
    </div>
  );
};

export default SubmitDetails;
