import { create } from "zustand";

export const quoteStore = create((set) => ({
  quotes: [],
  getQuotes: async () => {
    try {
      const res = await fetch("/api/quote/quotes", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      set({ quotes: data.quotes });
      return { success: true };
    } catch (error) {
      console.log("ERROR", error.message);
    }
  },
  createQuote: async (quoteInfo) => {
    try {
      const res = await fetch("/api/quote/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(quoteInfo),
      });
      const newQuote = res.json();

      return { success: true, newQuote: newQuote };
    } catch (error) {
      console.error(error.message);
      return { success: false, message: error.message };
    }
  },
  deleteQuote: async (pid) => {
    try {
      const res = await fetch(`/api/quote/${pid}`, {
        method: "DELETE",
      });
      const deletedQuote = await res.json();
      set((state) => ({
        quotes: state.quotes.filter((product) => product._id !== pid),
      }));
      return { success: true, quote: deletedQuote };
    } catch (error) {
      console.error("ERROR IN DELETING ITEM", error.message);
      return {
        success: false,
        message: `Failed to delete Message :${error.message} `,
      };
    }
  },
}));
