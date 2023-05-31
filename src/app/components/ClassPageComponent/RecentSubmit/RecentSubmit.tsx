import React from "react";
import SubmitHeader from "./SubmitHeader/SubmitHeader";

const RecentSubmit = () => {
  return (
    <div className="bg-white m-5 mb-3 flex flex-col p-5 rounded-lg">
      {/* -----------Submit Header ------------------ */}
      <SubmitHeader />
      {/* -----------Submit Header End ------------------ */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
        accusantium est. Veniam sapiente qui voluptatum veritatis, blanditiis
        accusamus. Suscipit, beatae. Eaque architecto a beatae modi. Nesciunt
        iusto adipisci, harum consequatur ipsa quam ea tempora quas odio
        blanditiis modi, perferendis reiciendis.
      </p>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus,
        eligendi!
      </div>
    </div>
  );
};

export default RecentSubmit;
