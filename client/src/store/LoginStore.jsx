// import { useState } from "react";
import { create } from "zustand";

// const [isToggle, setIsToggle] = useState(false);

const useLoginStore = create((set) => ({
    isToggle: true,
    setToggle:() => set((state) => ({isToggle:!state.isToggle})),
    
}));


export default useLoginStore;