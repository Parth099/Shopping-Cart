import { useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(0);

    //simple wrappers to improve readabilty 
    const openModal = () => setIsOpen(1);
    const closeModal = () => setIsOpen(0);

    return [isOpen, openModal, closeModal];
};

export default useModal;
