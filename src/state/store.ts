import create from "zustand";
import { IUiState } from "./types";

const useUiStore = create<IUiState>((set) => ({
  isMobileMenuOpen: false,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));

export { useUiStore };
