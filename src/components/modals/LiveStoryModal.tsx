'use client'
import { useModal } from "@/context/ModalContext";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import H2 from "../ui/CustomTags/H2";

export const Modal = () => {
  const { activeModal, modalProps, close } = useModal();

  if (activeModal !== 'liveStory') return null;

  return createPortal(
    <div className="fixed inset-0 bg-[rgba(10,10,10,0.7)] flex items-center justify-center z-50">
      <div className="w-86 lg:w-177.5 h-max rounded-[10px] lg:rounded-3xl bg-(--second-ground) text-white p-5 lg:p-10">
        <div className="flex flex-row items-start justify-between mb-5">
          <div className="w-full h-max flex flex-col items-start gap-2">
            <H2>{modalProps?.clientName}</H2>
            <p className="font-open-sans text-[12px] lg:text-[18px] text-center text-[#A29C9C]">
              {modalProps?.position}
            </p>
          </div>
          <RxCross2 className="text-xl lg:text-4xl cursor-pointer" onClick={close}/>
        </div>
        <p className="h-full font-open-sans text-[16px] lg:text-[24px] text-(--text-body)">
          {modalProps?.liveStory}
        </p>
      </div>
    </div>,
    document.body
  );
};