import { useState } from "react";

const useDisclouse = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(false);
  };

  const onOpen = () => {
    setModalOpen(true);
  };
  return { isModalOpen, onClose, onOpen };
};

export default useDisclouse;
