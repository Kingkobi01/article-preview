import { useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import Share from "./Share";

const Card = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  return (
    <article className="z-10 flex md:flex-row flex-col bg-white shadow-md mb-[2rem] rounded-lg w-[90%] max-w-[45.625rem]">
      <img
        className="mb-[2rem] md:mb-0 md:rounded-s-lg w-full md:w-[40%] object-center object-cover"
        src="/images/drawers.jpg"
        alt="Drawers"
      />
      <div className="space-y-[1.25rem] md:p-[2rem] pt-[1.75rem] w-full md:w-[60%] text-[0.875rem]">
        <h1 className="px-[2.5rem] md:px-0 font-semibold text-[1.25rem]">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="px-[2.5rem] md:px-0 text-neutral-400">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="md:block md:relative flex flex-col justify-center">
          <div
            className={
              !isShareOpen
                ? `flex justify-between items-center px-[2.5rem] md:px-0 py-[1.75rem] md:py-0`
                : "hidden md:flex justify-between items-center px-[2.5rem] md:px-0 py-[1.75rem] md:py-0"
            }
          >
            <div className="flex justify-center items-center gap-4">
              <img
                className="rounded-full w-20"
                src="/images/avatar-michelle.jpg"
                alt="Michelle"
              />
              <div className="text-neutral-400">
                <h2 className="font-semibold">Michelle Appleton</h2>
                <p>28 Jun 2020</p>
              </div>
            </div>
            <span
              onClick={() => {
                setIsShareOpen((prevState) => !prevState);
              }}
              className="place-items-center grid bg-neutral-200/50 hover:bg-neutral-200 rounded-full w-12 text-neutral-300 hover:text-neutral-100 duration-150 cursor-pointer aspect-square"
            >
              <IoIosShareAlt size={24} />
            </span>
          </div>
          <Share setIsShareOpen={setIsShareOpen} isShareOpen={isShareOpen} />
        </div>
      </div>
    </article>
  );
};

export default Card;
