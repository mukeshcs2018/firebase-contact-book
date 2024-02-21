import React from "react";
import { IoMdContact } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { FaTrashArrowUp } from "react-icons/fa6";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclouse from "../Hooks/useDisclouse";
import AddAndUpdate from "./AddAndUpdate";

const ContactCard = ({ data }) => {
  const { isModalOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  deleteContact;
  return (
    <>
      <div
        key={data.id}
        className="mt-4 bg-yellow rounded-lg  gap-4 flex items-center justify-between p-3"
      >
        <div className="flex items-center gap-1">
          <IoMdContact className="text-orange size-12" />
          <div>
            <h2 className="font-medium">{data.name}</h2>
            <p className="text-sm">{data.email}</p>
          </div>
        </div>
        <div className="flex gap-2 relative right-0">
          <RiEditCircleLine
            onClick={onOpen}
            className="text-black size-8 cursor-pointer"
          />
          <FaTrashArrowUp
            onClick={() => deleteContact(data.id)}
            className="text-red-900 size-7 cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdate isOpen={isModalOpen} onClose={onClose} isUpdate={true} />
    </>
  );
};

export default ContactCard;
