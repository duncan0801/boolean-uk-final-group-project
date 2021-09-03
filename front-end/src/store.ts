import internal from "stream";
import create from "zustand";
import { devtools } from "zustand/middleware";
import Counsellor from "./pages/Counsellor";

type Faq = {
  id: number;
  question: string;
  answer: string;
};

type Store = {
  faqs: Faq[] | null;
  setFaqs: (faqs: Faq[]) => void;
};

const useStore = create<Store>(
  devtools((set) => ({
    faqs: null,
    setFaqs: (faqs) => set({ faqs: faqs }),
  }))
);

export default useStore;
