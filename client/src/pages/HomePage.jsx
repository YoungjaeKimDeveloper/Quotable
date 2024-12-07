import React, { useEffect } from "react";
import { quoteStore } from "../store/quoteStore.js";
import QuoteCard from "../components/QuoteCard.jsx";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { quotes, getQuotes } = quoteStore();
  useEffect(() => {
    getQuotes();
  }, []);

  console.log(quotes);
  return (
    <div className="min-h-screen w-full bg-red-200">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {quotes == null && (
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className="mt-40 text-2xl font-semibold text-red-500">
              No Quote...🥹
            </h1>
            <Link to="/create">
              <p className="font-bold tracking-widest text-red-400 underline duration-150 hover:text-red-500 hover:underline">
                Create New Quote
              </p>
            </Link>
          </div>
        )}
        {quotes?.map((quote) => (
          <QuoteCard key={quote._id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
