import Image from "next/image";
import React from "react";

const ReuseableStudentComponent = ({ image, name, date, schedule }: any) => {
  return (
    <div className="flex gap-2">
      <Image
        src={image}
        alt="student_image.png"
        height={64}
        width={64}
        className="w-[64px] h-[64px]"
      />
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{date}</span>
        <span className="">{schedule}</span>
      </div>
    </div>
  );
};

export default ReuseableStudentComponent;
