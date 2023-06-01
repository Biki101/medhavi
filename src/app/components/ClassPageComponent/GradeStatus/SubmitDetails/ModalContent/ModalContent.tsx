import React, { useState } from "react";
import ReuseableStudentComponent from "../../ReuseableStudentComponent/ReuseableStudentComponent";
import PptDownloadComponent from "@/app/components/GlobalReuseables/PptDownloadComponent/PptDownloadComponent";
import GradeButton from "@/app/components/GlobalReuseables/GradeButton/GradeButton";
import StudentSubmissionDetails from "@/app/components/GlobalReuseables/StudentSubmissionDetails/StudentSubmissionDetails";

const ModalContent = ({ image, name, date, schedule, graded }: any) => {
  // ----------------- Application State -----------
  const [editMode, setEditMode] = useState(graded);
  // ----------------- Application State End -----------
  return (
    <div className="border-t-[1px] border-black border-opacity-10 pt-5 flex flex-col gap-3 mb-10">
      {/* ----------Submission Details ----------- */}
      <StudentSubmissionDetails
        image={image}
        name={name}
        date={date}
        schedule={schedule}
      />
      {/* ----------Submission Details End ----------- */}

      {/* -----------Grade Obtained ---------- */}
      <p className="opacity-title">Grade obtained:</p>
      <div className="text-lg">
        <input
          type="text"
          placeholder="Enter grade here"
          className="border-b-[2px] border-black text-center w-[200px] p-4 outline-none"
          disabled={editMode}
          defaultValue={editMode ? "08" : ""}
          maxLength={2}
        />
        <span className="p-5 bg-gray-100 ml-5 rounded-md">out of 10</span>
      </div>
      {/* -----------Grade Obtained End ---------- */}

      {/* ------------Suggestion ------------- */}
      <textarea
        className="textarea bg-gray-100 rounded-md p-4 outline-none h-[170px]"
        placeholder="Enter text..."
        disabled={editMode}
      />
      {/* ------------Suggestion End------------- */}

      <div className="flex items-center gap-10  self-end mt-10">
        <span className="text-red-600">Ask for Resubmission</span>
        <div
          className="bg-[var(--primary-color)] p-5 px-8 h-10 flex items-center justify-center text-white rounded-full w-[150px] cursor-pointer"
          onClick={() => setEditMode(false)}
        >
          {graded ? "Edit Grade" : "grade"}
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
