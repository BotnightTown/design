'use client'
import { createPortal } from "react-dom";
import { useModal } from "@/context/ModalContext";
import H2 from "./ui/CustomTags/H2";
import { RxCross2 } from "react-icons/rx";

export const Modal = () => {
  const { isOpen, close } = useModal();

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-[rgba(14,14,14,0.5)] flex items-center justify-center z-50">
      <div className="w-177.5 h-max rounded-3xl bg-(--second-ground) text-white p-10">
        <div className="flex flex-row items-center justify-between">
          <H2>Get your design</H2>
          <RxCross2 className="text-4xl cursor-pointer" onClick={close}/>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Name</p>
            <input 
              type="text" 
              name="name" 
              placeholder="Name"
              className="font-main w-full h-15 rounded-[10px] pl-5 text-lg border border-(--border) outline-(--border) active:outline-(--border)"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Email</p>
            <input 
              type="email" 
              name="email" 
              placeholder="Email"
              className="font-main w-full h-15 rounded-[10px] pl-5 text-lg border border-(--border) outline-(--border) active:outline-(--border)"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl">About the project</p>
            <textarea 
              name="email" 
              placeholder="About the project"
              className="font-main w-full h-61 rounded-[10px] p-5 text-lg border border-(--border) outline-(--border) active:outline-(--border)"
            />
          </div>
          <div className="w-full flex justify-center mt-5">
            <button 
              type="submit"
              className="w-max h-max py-2.5 px-6.25 rounded-[10px] border-2 transition-all 
              border-white text-white hover:border-[#55CE9C] hover:text-[#55CE9C] 
              active:border-[#438A6C] active:text-[#438A6C] disabled:border-[#8F8B8B] disabled:text-[#8F8B8B]
              font-semibold font-main text-2xl cursor-pointer capitalize"
            >
              Ask and get answers!
            </button>
          </div>

        </form>
      </div>
    </div>,
    document.body
  );
};
