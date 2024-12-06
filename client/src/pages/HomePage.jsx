import React, { useEffect } from "react";
import { quoteStore } from "../store/quoteStore.js";
import QuoteCard from "../components/QuoteCard.jsx";

const HomePage = () => {
  const { quotes, getQuotes } = quoteStore();
  useEffect(() => {
    getQuotes();
  }, []);

  console.log(quotes);
  return (
    <div className="min-h-screen w-full bg-red-200">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {quotes.map((quote) => (
          <QuoteCard key={quote._id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
