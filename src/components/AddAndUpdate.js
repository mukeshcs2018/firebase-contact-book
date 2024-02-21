import React from "react";
import Modal from "./Modal";
import { Field, Formik, Form } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdate = ({ isOpen, onClose, isUpdate }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} contact_data={""}>
        <Formik
          initialValues={
            // isUpdate
            //   ? {
            //       name: contact.name,
            //       email: contact.email,
            //     }:
            {
              name: "",
              email: "",
            }
          }
          onSubmit={(values) => {
            addContact(values);
          }}
        >
          <Form className="flex flex-col px-2 gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border rounded-sm" />
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border rounded-sm" />
            </div>
            <button className="bg-orange rounded p-2 self-end border-2">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
