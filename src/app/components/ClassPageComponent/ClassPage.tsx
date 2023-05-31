import React from "react";
import RecentSubmit from "./RecentSubmit/RecentSubmit";
import GradeStatus from "./GradeStatus/GradeStatus";

const ClassPage = () => {
  return (
    <div className="flex flex-col">
      {/* ----------- Submits ------------*/}
      <RecentSubmit />
      {/* ----------- Submits End------------*/}
      {/*--------------- Grading Status --------------*/}
      <GradeStatus />
      {/*--------------- Grading Status End--------------*/}
    </div>
  );
};

export default ClassPage;
