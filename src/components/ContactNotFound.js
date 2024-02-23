import React from "react";
import contact from "../assets/hands_contact.png";

const ContactNotFound = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center gap-2">
      <div>
        <img src={contact} alt="contact-logo" />
      </div>
      <h3 className="text-white text-2xl font-semibold">Contact not found</h3>
    </div>
  );
};

export default ContactNotFound;
