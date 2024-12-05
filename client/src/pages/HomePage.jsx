import React, { useEffect } from "react";
import { quoteStore } from "../store/quoteStore.js";

const HomePage = () => {
  const { quotes, getQuotes } = quoteStore();
  useEffect(() => {
    getQuotes();
  }, []);

  console.log(quotes);
  return <div className="h-screen w-full bg-black"></div>;
};

export default HomePage;
