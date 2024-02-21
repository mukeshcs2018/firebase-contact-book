import { useState } from "react";
import NavBar from "./components/NavBar";
import { FiSearch } from "react-icons/fi";
import { MdLibraryAdd } from "react-icons/md";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclouse from "./Hooks/useDisclouse";

function App() {
  const [contacts, setContacts] = useState([]);

  const { isModalOpen, onClose, onOpen } = useDisclouse();

  useState(() => {
    const fetchContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactRef);
        const contactsObj = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setContacts(contactsObj);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContacts();
  }, [contacts, setContacts]);

  return (
    <div className="max-w-[370px] mx-auto px-4">
      <NavBar />

      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <FiSearch className="invert absolute mx-3 size-6" />
          <input
            className="bg-transparent flex-full h-10 flex-grow border border-white rounded-md px-10 text-white"
            type="text"
            placeholder="Search Contact"
          />
        </div>
        <div>
          <MdLibraryAdd
            onClick={onOpen}
            className="invert size-8 m-2 cursor-pointer hover:border border-black rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-col">
        {contacts.map((data) => (
          <ContactCard key={data.id} data={data} />
        ))}
      </div>
      <AddAndUpdate isOpen={isModalOpen} onClose={onClose} />
    </div>
  );
}

export default App;
