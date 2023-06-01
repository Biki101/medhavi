import Image from "next/image";
import React, { useState } from "react";
import ReuseableStudentComponent from "../ReuseableStudentComponent/ReuseableStudentComponent";
import { Modal } from "antd";
import { GrClose } from "react-icons/gr";
import ModalContent from "./ModalContent/ModalContent";

const SubmitDetails = ({ image, name, date, schedule, graded }: any) => {
  // ----------- Application State -----------
  const [isModalOpen, setIsModalOpen] = useState(false);
  // ----------- Application State End -----------

  // ---------- Event Handles --------------
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // ---------- Event Handles End --------------

  return (
    <div className="flex justify-between">
      {/* -------------Modal Start ------------------- */}
      <Modal
        title="Student Submission"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={<GrClose />}
        footer={null}
        width={1080}
      >
        <ModalContent
          image={image}
          name={name}
          date={date}
          schedule={schedule}
        />
      </Modal>
      {/* -------------Modal Start End ------------------- */}
      <ReuseableStudentComponent
        image={image}
        name={name}
        date={date}
        schedule={schedule}
      />
      {!graded ? (
        <span
          className="bg-[var(--primary-color)] p-5 px-8 h-10 flex items-center justify-center text-white rounded-full"
          onClick={showModal}
        >
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
