import { Dispatch, FC, SetStateAction } from "react";
import { FaFacebookSquare, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

interface ShareProps {
  isShareOpen: boolean;
  setIsShareOpen: Dispatch<SetStateAction<boolean>>;
}

const Share: FC<ShareProps> = ({ setIsShareOpen, isShareOpen }) => {
  return (
    <div
      className={
        isShareOpen
          ? `opacity-100 border md:top-0 md:after:bottom-0 md:left-1/2 md:after:left-1/2 md:absolute md:after:absolute flex justify-between md:justify-between items-center md:gap-3 md:after:border-[0.75rem] bg-neutral-400 px-[2.375rem] py-4 md:after:border-t-neutral-400 md:after:border-transparent rounded-b-lg md:rounded-xl md:after:w-[0.75rem] text-neutral-100 md:translate-x-10 md:-translate-y-full md:after:aspect-square md:after:-translate-x-1/2 md:after:translate-y-full duration-200`
          : `hidden`
      }
    >
      <p className="z-50 text-neutral-200 uppercase tracking-[0.3rem]">Share</p>
      <div className="flex justify-between items-center gap-4 w-1/3 md:w-2/3">
        <FaFacebookSquare className="text-xl cursor-pointer" />
        <FaTwitter className="text-xl cursor-pointer" />
        <FaPinterest className="text-xl cursor-pointer" />
      </div>
      <span
        onClick={() => {
          setIsShareOpen((prevState) => !prevState);
        }}
        className="place-items-center md:hidden grid bg-neutral-200/50 hover:bg-neutral-200 rounded-full w-12 duration-150 cursor-pointer aspect-square"
      >
        <IoIosShareAlt size={24} />
      </span>
    </div>
  );
};

export default Share;
