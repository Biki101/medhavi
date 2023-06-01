import React from "react";
import ReuseableStudentComponent from "../../ReuseableStudentComponent/ReuseableStudentComponent";
import PptDownloadComponent from "@/app/components/GlobalReuseables/PptDownloadComponent/PptDownloadComponent";
import GradeButton from "@/app/components/GlobalReuseables/GradeButton/GradeButton";

const ModalContent = ({ image, name, date, schedule, graded }: any) => {
  return (
    <div className="border-t-[1px] border-black border-opacity-10 pt-5 flex flex-col gap-3 mb-10">
      {/* -------------Student and Submission Details */}
      <ReuseableStudentComponent
        image={image}
        name={name}
        date={date}
        schedule={schedule}
      />
      {/* -------------Student and Submission Details */}

      {/* ------------Files ---------------------- */}
      <p className="opacity-title mt-3">Submitted files</p>
      <div className="flex gap-3">
        <PptDownloadComponent />
        <PptDownloadComponent />
      </div>
      {/* ------------Files End ---------------------- */}

      {/* ------------Comment ------------- */}
      <p className="opacity-title">Student Comment</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        voluptatum eveniet doloremque blanditiis quos fugiat expedita. Magnam,
        explicabo eos at placeat ducimus fugit esse! Suscipit ab autem nostrum
        expedita placeat. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Cupiditate placeat eligendi incidunt totam consequatur nulla
        pariatur quo, error architecto eaque.
      </p>
      {/* ------------Comment End ------------- */}

      {/* -----------Grade Obtained ---------- */}
      <p className="opacity-title">Grade obtained:</p>
      <div className="text-lg">
        <input
          type="text"
          placeholder="Enter grade here"
          className="border-b-[2px] border-black text-center w-[200px] p-4 outline-none"
        />
        <span className="p-7 bg-gray-100 ml-5 rounded-md">out of 10</span>
      </div>
      {/* -----------Grade Obtained End ---------- */}

      {/* ------------Suggestion ------------- */}
      <textarea
        className="textarea bg-gray-100 rounded-md p-4 outline-none h-[170px]"
        placeholder="Enter text..."
      />
      {/* ------------Suggestion End------------- */}

      <div className="flex items-center gap-10  self-end mt-10">
        <span className="text-red-600">Ask for Resubmission</span>
        <GradeButton />
      </div>
    </div>
  );
};

export default ModalContent;
