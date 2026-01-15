'use client'
import { createContext, useContext, useState, ReactNode } from "react";

type LiveStoryModalProps = {
  clientName: string;
  position: string;
  liveStory: string;
};

type ModalPayloadMap = {
  getDesign: undefined;
  liveStory: LiveStoryModalProps;
};

type ModalContextType = {
  activeModal: keyof ModalPayloadMap | null;
  modalProps: ModalPayloadMap[keyof ModalPayloadMap] | null;
  open: <T extends keyof ModalPayloadMap>(
    modal: T,
    props?: ModalPayloadMap[T]
  ) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<keyof ModalPayloadMap | null>(null);
  const [modalProps, setModalProps] = useState<ModalPayloadMap[keyof ModalPayloadMap] | null>(null);

  const open = <T extends keyof ModalPayloadMap>(
    modal: T,
    props?: ModalPayloadMap[T]
  ) => {
    setActiveModal(modal);
    setModalProps(props ?? null);
  };

  const close = () => {
    setActiveModal(null);
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, modalProps, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
