import React, { useEffect } from "react";
import { quoteStore } from "../store/quoteStore.js";
import QuoteCard from "../components/QuoteCard.jsx";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { quotes, getQuotes, deleteQuote, updateQuote } = quoteStore();
  useEffect(() => {
    getQuotes();
    console.info("All Files have been fetched");
  }, [getQuotes, deleteQuote, updateQuote]);

  console.log(quotes);
  return (
    <div className="min-h-screen w-full bg-red-200">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {quotes.length === 0 && (
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
          <QuoteCard
            key={quote._id}
            quote={quote}
            deleteQuote={deleteQuote}
            updateQuote={updateQuote}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
