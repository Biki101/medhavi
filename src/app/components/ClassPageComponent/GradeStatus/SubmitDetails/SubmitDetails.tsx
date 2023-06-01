import Image from "next/image";
import React from "react";
import ReuseableStudentComponent from "../ReuseableStudentComponent/ReuseableStudentComponent";

const SubmitDetails = ({ image, name, date, schedule, graded }: any) => {
  return (
    <div className="flex justify-between">
      <ReuseableStudentComponent
        image={image}
        name={name}
        date={date}
        schedule={schedule}
      />
      {!graded ? (
        <span className="bg-[var(--primary-color)] p-5 px-8 h-10 flex items-center justify-center text-white rounded-full">
          Grade
        </span>
      ) : (
        <div className="flex flex-col bg-green-500 text-white items-center justify-center p-3 px-6 rounded-xl">
          <span>Graded</span>
          <span>08/10</span>
        </div>
      )}
    </div>
  );
};

export default SubmitDetails;
