import { create } from 'zustand';

type State = {
  open: boolean;
  openWheel: () => void;
  closeWheel: () => void;
};

export const useWheelStore = create<State>((set) => ({
  open: false,
  openWheel: () => set({ open: true }),
  closeWheel: () => set({ open: false }),
}));
