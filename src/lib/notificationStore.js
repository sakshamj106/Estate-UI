import { create } from "zustand";
import apiRequest from "./apiRequest";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    const res = await apiRequest("/users/notification");
    set({ number: res.data });
  },
  decrease: () => {
    console.log("Decreasing notification count");
    set((prev) => ({ number: prev.number - 1 }));
    console.log("New notification count:", get().number);
  },
  reset: () => {
    set({ number: 0 });
  },
}));
