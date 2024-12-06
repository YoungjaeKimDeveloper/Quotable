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
      console.log("ERROR");
    }
  },
  uploadQuote: async (quoteInfo) => {
    try {
      const res = await fetch("/api/quote/create",{
        
      })
    } catch (error) {

    }
  },
}));
