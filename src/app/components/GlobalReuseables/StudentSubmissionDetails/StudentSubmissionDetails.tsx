import React from "react";
import ReuseableStudentComponent from "../../ClassPageComponent/GradeStatus/ReuseableStudentComponent/ReuseableStudentComponent";
import PptDownloadComponent from "../PptDownloadComponent/PptDownloadComponent";

const StudentSubmissionDetails = ({ image, name, date, schedule }: any) => {
  return (
    <>
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
    </>
  );
};

export default StudentSubmissionDetails;
