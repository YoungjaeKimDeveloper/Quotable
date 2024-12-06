import React from "react";
import sample from "../../public/fox.webp";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const QuoteCard = ({ quote }) => {
  const { title, author, image } = quote;
  return (
    <div className="w-full text-white shadow-xl lg:w-[30%]">
      <div className="rounded-xl border-2 border-solid border-white p-4">
        <img
          src={sample}
          alt="image"
          className="h-[200px] w-full rounded-lg bg-cover sm:object-contain lg:object-fill lg:shadow-xl"
        />
        <div className="mt-4">
          <h1 className="py-2 font-mono font-extrabold tracking-wide">
            {title}
          </h1>
          <div className="flex items-center justify-between py-4">
            <p className="font-semibold tracking-widest">{author}</p>
            <div className="flex justify-end gap-x-4 px-4">
              <MdEdit className="size-7 rounded-xl border-solid bg-red-300 p-1 text-center text-xl shadow-lg hover:cursor-pointer lg:text-2xl" />
              <MdDeleteOutline className="size-7 rounded-xl border-solid bg-red-300 p-1 text-center text-xl shadow-lg hover:cursor-pointer lg:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
