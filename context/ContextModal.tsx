import React, { createContext } from "react";

export interface IModalOpen {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalOpen>({} as IModalOpen);

const CustomContext: React.FC = ({ children }) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default CustomContext;
