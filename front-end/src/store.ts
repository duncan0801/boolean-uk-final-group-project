import create from "zustand";
import { devtools } from "zustand/middleware";

type Faq = {
	id: number;
	question: string;
	answer: string;
};

type Service = {
	id: number;
	name: string;
};

type Store = {
	faqs: Faq[] | null;
	setFaqs: (faqs: Faq[]) => void;
	services: Service[] | null;
	setServices: (services: Service[]) => void;
};

const useStore = create<Store>(
	devtools((set) => ({
		faqs: null,
		setFaqs: (faqs) => set({ faqs: faqs }),
		services: null,
		setServices: (services) => set({ services: services }),
	}))
);

export default useStore;
