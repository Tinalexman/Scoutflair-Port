import { create } from "zustand";

export type tSettingsForm = {
  submit: boolean;
  basic: boolean;
  clear: () => void;
};

export const usePlayerBasicSettingsHook = create<tSettingsForm>((set) => ({
  submit: false,
  basic: false,
  clear: () => {
    set({ submit: false, basic: false });
  },
}));
