import { create } from "zustand";

export const useButtonVisible = create((set) => ({
  isLogoDisabled: false,
  toggleLogo: () => set((state) => ({ isLogoDisabled: !state.isLogoDisabled })),
}));
export const useChangeNavbarBackground = create((set) => ({
  navbarBackgroundColor: false,
  toogleNavbarBackground: (value) =>
    set((state) => ({
      navbarBackgroundColor: value,
    })),
}));
