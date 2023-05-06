import { create } from "zustand";
import { FilterState } from "../interfaces/filter";
import { filt } from "../view/filter";

export const useFilter = create<FilterState>((set, get) => ({
    filter: filt,
    changeFilter: (event) => {
        const newFilter = get().filter.map((el) => {
            if (el.active === true) {
              return { ...el, active: false };
            }
            if (el.event === event) {
              return { ...el, active: true };
            }
            return el;
          });
          set({filter: newFilter})
    }
}))