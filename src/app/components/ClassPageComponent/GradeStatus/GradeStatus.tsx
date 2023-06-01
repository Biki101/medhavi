import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Graded from "./Graded/Graded";
import NotGraded from "./Not-Graded/NotGraded";

const GradeStatus = () => {
  // -------- Application State ----------
  const [showGraded, setShowGraded] = useState(false);
  // -------- Application State ----------

  return (
    <div className="bg-white m-5 mt-0 p-5 ">
      {/* -----------------Grade Status Tob Navigation Bar ----------- */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* --------Not Graded --------------- */}
          <span
            className={`${
              showGraded ? "" : "bg-[var(--primary-color)] text-white"
            }  p-3 px-12  rounded-lg cursor-pointer`}
            onClick={() => setShowGraded(false)}
          >
            Not-Graded
          </span>
          {/* --------Not Graded End--------------- */}
          {/* -------- Graded --------------- */}
          <span
            className={`${
              showGraded ? "bg-[var(--primary-color)] text-white" : ""
            }  p-3 px-12  rounded-lg cursor-pointer`}
            onClick={() => setShowGraded(true)}
          >
            Graded
          </span>
          {/* -------- Graded End--------------- */}
        </div>
        {/* ---------------Search  Input --------------*/}
        <div className="flex items-center ">
          <span className="text-2xl bg-gray-100 p-3 pl-4 rounded-full rounded-r-none">
            <FiSearch className="opacity-60" />
          </span>
          <input
            placeholder="Search"
            className="p-3 bg-gray-100 rounded-l-none rounded-full w-[300px] outline-none"
          />
        </div>
        {/* ---------------Search  Input End --------------*/}
      </div>
      {/* -----------------Grade Status Tob Navigation Bar End ----------- */}

      {!showGraded ? <NotGraded /> : <Graded />}
    </div>
  );
};

export default GradeStatus;
