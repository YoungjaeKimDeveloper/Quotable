import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { quoteStore } from "../store/quoteStore";
import { toast } from "react-toastify";

const Modal = ({ quote, modalToggle, updateQuote }) => {
  const { title, author, image } = quote;

  const [updateNewQuote, setUpdateNewQuote] = useState({
    title: title,
    author: author,
    image: image,
  });
  const submitEdit = async (e) => {
    try {
      e.preventDefault();
      await updateQuote(quote._id, updateNewQuote);
      console.info(updateNewQuote);
      modalToggle();
      toast.success("Editted Quote");
      console.info("SUCCESSFULLY EDITTED", updateNewQuote);
    } catch (error) {
      console.error("FAILED TO EDIT THE QUOTE", error.message);
      toast.error("Failed to edit the Quote");
    }
  };
  return (
    <div>
      <form
        className="absolute left-[50%] top-[50%] z-10 flex h-full w-full -translate-x-1/2 flex-col items-center justify-center gap-y-2 rounded-xl bg-red-300 lg:w-[120%]"
        onSubmit={submitEdit}
      >
        <h2 className="mb-2 text-2xl font-semibold tracking-wider text-white">
          Edit the Quote
        </h2>
        <IoMdCloseCircleOutline
          className="absolute right-0 top-0 m-2 size-10 hover:cursor-pointer"
          onClick={modalToggle}
        />
        <input
          type="text"
          value={updateNewQuote.title}
          onChange={(e) =>
            setUpdateNewQuote((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="New Title..."
          className="w-[70%] rounded-xl p-2 text-black"
        />
        <input
          type="text"
          value={updateNewQuote.author}
          onChange={(e) =>
            setUpdateNewQuote((prev) => ({ ...prev, author: e.target.value }))
          }
          placeholder="New author..."
          className="w-[70%] rounded-xl p-2 text-black"
        />
        <input
          type="text"
          value={updateNewQuote.image}
          onChange={(e) =>
            setUpdateNewQuote((prev) => ({ ...prev, image: e.target.value }))
          }
          placeholder="New image URL..."
          className="w-[70%] rounded-xl p-2 text-black"
        />
        <button
          className="mt-4 rounded-full bg-pink-700 px-4 py-2 font-bold text-white duration-300 hover:bg-pink-300"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default Modal;
