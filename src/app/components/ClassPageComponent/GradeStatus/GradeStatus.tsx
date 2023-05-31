import React from "react";
import { FiSearch } from "react-icons/fi";
import SubmitDetails from "./SubmitDetails/SubmitDetails";

const GradeStatus = () => {
  return (
    <div className="bg-white m-5 mt-0 p-5 ">
      {/* -----------------Grade Status Tob Navigation Bar ----------- */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="bg-[var(--primary-color)] p-4 px-11 text-white rounded-lg">
            Not-Graded
          </span>
          <span className="p-4 px-11">Graded</span>
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

      {/* ------------------ Submit Details ------------------ */}
      <div className="flex flex-col gap-4 p-5 overflow-scroll overflow-x-hidden mt-3  h-[350px]">
        <SubmitDetails
          name="Savannah Nguyen"
          date="October 25, 2019"
          schedule="On time"
          image="/assets/students/student1.png"
        />
        <SubmitDetails
          name="Savannah Nguyen"
          date="October 25, 2019"
          schedule="On time"
          image="/assets/students/student2.png"
        />
        <SubmitDetails
          name="Savannah Nguyen"
          date="October 25, 2019"
          schedule="On time"
          image="/assets/students/student3.png"
        />
        <SubmitDetails
          name="Savannah Nguyen"
          date="October 25, 2019"
          schedule="On time"
          image="/assets/students/student4.png"
        />
        <SubmitDetails
          name="Savannah Nguyen"
          date="October 25, 2019"
          schedule="On time"
          image="/assets/students/student1.png"
        />
        <SubmitDetails
          name="Savannah Nguyen"
          date="October 25, 2019"
          schedule="On time"
          image="/assets/students/student2.png"
        />
      </div>
      {/* ------------------ Submit Details End ------------------ */}
    </div>
  );
};

export default GradeStatus;
