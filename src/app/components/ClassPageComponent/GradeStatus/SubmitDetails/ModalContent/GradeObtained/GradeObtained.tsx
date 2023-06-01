import GradeButton from "@/app/components/GlobalReuseables/GradeButton/GradeButton";
import React from "react";

const GradeObtained = () => {
  return (
    <>
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
    </>
  );
};

export default GradeObtained;
