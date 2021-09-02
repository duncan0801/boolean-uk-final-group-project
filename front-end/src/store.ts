import create from "zustand";
import { devtools } from "zustand/middleware";

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
