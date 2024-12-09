import React from "react";
import sample from "../../public/fox.webp";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
const QuoteCard = ({ quote, deleteQuote }) => {
  const { title, author, image } = quote;
  const deleteNotify = (quote) => toast(`${quote.title} has been deleted🥹`);
  const deleteQuoteCard = (quote) => {
    deleteQuote(quote._id);
    deleteNotify(quote);
  };
  return (
    <div className="w-full text-white shadow-xl lg:w-[30%]">
      <div className="rounded-xl border-2 border-solid border-white p-4">
        <div className="flex justify-center">
          <img
            src={image || sample}
            alt="image"
            className="h-[200px] rounded-lg bg-cover sm:object-contain lg:object-fill lg:shadow-xl"
          />
        </div>
        <div className="mt-4">
          <h1 className="py-2 font-mono font-extrabold tracking-wide">
            {title}
          </h1>
          <div className="flex items-center justify-between py-4">
            <p className="font-semibold tracking-widest">{author}</p>
            <div className="flex justify-end gap-x-4 px-4">
              <MdEdit className="size-7 rounded-xl border-solid bg-red-300 p-1 text-center text-xl shadow-lg hover:cursor-pointer lg:text-2xl" />
              <MdDeleteOutline
                className="size-7 rounded-xl border-solid bg-red-300 p-1 text-center text-xl shadow-lg hover:cursor-pointer lg:text-2xl"
                onClick={() => deleteQuoteCard(quote)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
