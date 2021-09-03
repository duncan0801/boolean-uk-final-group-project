import create from "zustand";
import { devtools } from "zustand/middleware";

type Counsellor = {
    firstName:    String
    lastName:     String
	avatar: String
    specialties:  String[]
}

type Faq = {
	id: number;
	question: string;
	answer: string;
};

type Store = {
	faqs: Faq[] | null;
	setFaqs: (faqs: Faq[]) => void;
	counsellors: Counsellor[] | null;
	setCounsellors: (counsellors: Counsellor[]) => void;
};

const useStore = create<Store>(
	devtools((set) => ({
		faqs: null,
		setFaqs: (faqs) => set({ faqs: faqs }),
		counsellors: null,
		setCounsellors: (counsellors) => set({ counsellors: counsellors }),
	})),
);

export default useStore;
