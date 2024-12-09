import { create } from "zustand";

export const quoteStore = create((set) => ({
  // State
  quotes: [],
  isLoading: true,
  // Actions
  getQuotes: async () => {
    try {
      set({ isLoading: true });
      const res = await fetch("/api/quote/quotes", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      set({ quotes: data.quotes, isLoading: false });
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      console.log("ERROR", error.message);
    } finally {
      set({ isLoading: false });
    }
  },
  createQuote: async (quoteInfo) => {
    try {
      const res = await fetch("/api/quote/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(quoteInfo),
      });
      const newQuote = await res.json();

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
  updateQuote: async (pid, updateInfo) => {
    try {
      const res = await fetch(`/api/quote/${pid}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(updateInfo),
      });
      const data = await res.json();
      set((state) => ({
        quotes: state.quotes.map((quote) =>
          quote._id === pid ? data.updatedItem : quote,
        ),
      }));
      return { success: true, updatedQuote: data.updatedItem };
    } catch (error) {
      console.error("ERROR IN UPDATING QUOTE: ", error.message);
      return { success: false, message: error.message };
    }
  },
}));
