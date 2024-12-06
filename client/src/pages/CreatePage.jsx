import React, { useState } from "react";
import { BiSolidDog } from "react-icons/bi";
import { GiSittingDog } from "react-icons/gi";
import { quoteStore } from "../store/quoteStore";

const CreatePage = () => {
  const { createQuote } = quoteStore();
  const [newQuote, setNewQuote] = useState({
    title: "",
    author: "",
    image: "",
  });
  const createQuoteSubmit = async (e) => {
    e.preventDefault();
    const { success } = await createQuote(newQuote);
    if (success) {
      setNewQuote({
        title: "",
        author: "",
        image: "",
      });
    }
  };
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="min-h-screen w-full bg-red-200">
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="mb-4">Create New Quote</h1>
        <form
          className="m-auto flex w-[50%] flex-col gap-y-4 rounded-xl lg:w-[40%]"
          onSubmit={createQuoteSubmit}
        >
          <input
            type="text"
            className="input-info"
            placeholder="Title..."
            value={newQuote.title}
            minLength={1}
            maxLength={30}
            required
            onChange={(e) =>
              setNewQuote((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            type="text"
            className="input-info"
            placeholder="Author..."
            min={1}
            max={10}
            value={newQuote.author}
            required
            onChange={(e) =>
              setNewQuote((prev) => ({ ...prev, author: e.target.value }))
            }
          />
          <input
            type="url"
            className="input-info"
            placeholder="Image Url..."
            pattern="https://.*"
            value={newQuote.image}
            required
            onChange={(e) =>
              setNewQuote((prev) => ({ ...prev, image: e.target.value }))
            }
          />
          <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            type="submit"
            className="flex items-center text-center transition-all duration-700"
          >
            {isHover ? (
              <div className="m-auto rounded-xl bg-red-100 px-2 py-1 lg:px-5">
                <div className="flex h-20 w-20 items-center justify-center">
                  <BiSolidDog
                    className={`${isHover ? "opacity-100" : "opacity-100"} m-auto size-10 items-center rounded-xl text-center text-2xl transition-all duration-700 xl:size-10`}
                    onSubmit={() => createQuoteSubmit(newQuote)}
                  />
                </div>
              </div>
            ) : (
              <div className="m-auto rounded-xl bg-red-100 px-2 py-1 lg:px-5">
                <div className="flex h-20 w-20 items-center justify-center">
                  <GiSittingDog
                    className={`${isHover ? "opacity-100" : "opacity-100"} m-auto size-10 items-center rounded-xl text-center text-2xl transition-all duration-700 xl:size-10`}
                  />
                </div>
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
