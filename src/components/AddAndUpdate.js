import React from "react";
import Modal from "./Modal";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

const AddAndUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact added successfully...");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Updated Successfully...");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} contact_data={""}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col px-2 gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border rounded-sm" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="flex flex-col gap-1 ">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border rounded-sm" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
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
