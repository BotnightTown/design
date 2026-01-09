'use client'

import { useModal } from "@/context/ModalContext";

export default function Button({title}: {title: string}){
  const { open } = useModal();

  return(
    <button 
      onClick={open}
      type="button"
      className="w-max h-max py-2.5 px-6.25 rounded-[10px] border-2 transition-all 
      border-white text-white hover:border-[#55CE9C] hover:text-[#55CE9C] 
      active:border-[#438A6C] active:text-[#438A6C] disabled:border-[#8F8B8B] disabled:text-[#8F8B8B]
      font-semibold font-main text-2xl cursor-pointer"
    >
      {title}
    </button>
  )
}