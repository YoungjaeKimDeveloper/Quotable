import React, { useState } from "react";
import { BiSolidDog } from "react-icons/bi";
import { GiSittingDog } from "react-icons/gi";

const CreatePage = () => {
  const [newQuote, setNewQuote] = useState({
    title: "",
    author: "",
    image: "",
  });
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="min-h-screen w-full bg-red-200">
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="mb-4">Create New Quote</h1>
        <form className="m-auto flex w-[50%] flex-col gap-y-4 rounded-xl lg:w-[40%]">
          <input
            type="text"
            className="input-info"
            placeholder="Title..."
            value={newQuote.title}
            required
            onChange={(e) =>
              setNewQuote((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            type="text"
            className="input-info"
            placeholder="Author..."
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
              <div className="m-auto rounded-xl bg-red-100 px-5 py-1 lg:px-10 lg:py-2">
                <BiSolidDog
                  className={`${isHover ? "opacity-100" : "opacity-100"} m-auto size-4 items-center rounded-xl text-center transition-all duration-700 xl:size-10`}
                />
              </div>
            ) : (
              <div className="m-auto rounded-xl bg-red-100 px-5 py-1 lg:px-10 lg:py-2">
                <GiSittingDog
                  className={`${isHover ? "opacity-100" : "opacity-100"} m-auto size-4 items-center rounded-xl text-center transition-all duration-700 xl:size-10`}
                />
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
