import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center backdrop-blur top-0 z-40 absolute h-screen w-screen">
          <div className="m-auto min-h-[200px] bg-white min-w-[80%] rounded-md p-4 relative z-50">
            <div className="flex justify-end">
              <AiOutlineCloseSquare onClick={onClose} className="text-2xl j" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
