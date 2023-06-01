import React from "react";
import SubmitDetails from "../SubmitDetails/SubmitDetails";

const NotGraded = () => {
  return (
    <div className="flex flex-col gap-4 p-5 overflow-auto overflow-x-hidden mt-3  h-[350px] scroll-bar">
      <SubmitDetails
        name="Savannah Nguyen"
        date="October 25, 2019"
        schedule="On time"
        image="/assets/students/student1.png"
        graded={false}
      />
      <SubmitDetails
        name="Savannah Nguyen"
        date="October 25, 2019"
        schedule="On time"
        image="/assets/students/student2.png"
        graded={false}
      />
      <SubmitDetails
        name="Savannah Nguyen"
        date="October 25, 2019"
        schedule="On time"
        image="/assets/students/student3.png"
        graded={false}
      />
      <SubmitDetails
        name="Savannah Nguyen"
        date="October 25, 2019"
        schedule="On time"
        image="/assets/students/student4.png"
        graded={false}
      />
      <SubmitDetails
        name="Savannah Nguyen"
        date="October 25, 2019"
        schedule="On time"
        image="/assets/students/student1.png"
        graded={false}
      />
      <SubmitDetails
        name="Savannah Nguyen"
        date="October 25, 2019"
        schedule="On time"
        image="/assets/students/student2.png"
        graded={false}
      />
    </div>
  );
};

export default NotGraded;
