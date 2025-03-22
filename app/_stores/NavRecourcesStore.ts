import { create } from "zustand";

interface navBarRecorcesType {
  currentTab: number;
  setCurrentTab: (val: number) => void;
}

export const navBarRecorces = create<navBarRecorcesType>((set, get) => ({
  currentTab: 0,
  setCurrentTab: (val) => {
    set({
      currentTab: val,
    });
  },
}));

export default navBarRecorces;
