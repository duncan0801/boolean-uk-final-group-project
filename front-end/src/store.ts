import create from "zustand";
import { devtools } from "zustand/middleware";
import { useEffect } from "react";

export type Faq = {
  id: number;
  question: string;
  answer: string;
};
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  username: string;
  password: string;
  counsellor_ID?: number;
  appointments?: Appointment[];
  messages?: Message[];
  reviews?: Review[];
};
export type Service = {
  id: number;
  name: string;
};
export type Language = {
  id: number;
  language: string;
  counsellors: Counsellor[];
};
export type CounsellorOnLanguage = {
  id: number;
  language_ID: number;
  counsellor_ID: number;
  counsellor?: Counsellor;
  language?: Language;
};
export type CounsellorOnService = {
  id: number;
  counsellor_ID: number;
  service_ID: number;
  counsellor: Counsellor;
  service: Service;
};
export type Counsellor = {
  id: number;
  firstName: string;
  lastName: string;
  about: string;
  licensing: string;
  avatar: string;
  hourlyRate: number;
  yearsExperience: number;
  gender: string;
  appointments: Appointment[];
  messages: Message[];
  reviews: Review[];
  specialties: Service[];
  languages: Language[];
};
export type Review = {
  id: number;
  date: string;
  content: string;
  user_ID: number;
  counsellor_ID: number;
  user?: User;
  counsellor?: Counsellor;
};
export type Message = {
  id: number;
  date: string;
  content: string;
  user_ID: number;
  counsellor_ID: number;
  user?: User;
  counsellor?: Counsellor;
};
export type Appointment = {
  id: number;
  date: string;
  time: string;
  user_ID: number;
  counsellor_ID: number;
};

export type loggedinUser = {
  id: number;
  username: string;
};

type Store = {
  faqs: Faq[] | null;
  setFaqs: (faqs: Faq[]) => void;

  services: Service[] | null;
  setServices: (services: Service[]) => void;
  counsellors: Counsellor[] | null;
  setCounsellors: (counsellors: Counsellor[]) => void;
  counsellor: Counsellor | null;
  setCounsellor: (counsellor: Counsellor) => void;
  user: User | null;
  setUser: (user: User) => void;
  loggedinUser: loggedinUser | null;
  setLoggedinUser: (loggedinUser: User | null) => void;
  languages: Language[] | null;
  setLanguages: (languages: Language[]) => void;
  reviews: Review[] | null;
  setReviews: (reviews: Review[]) => void;
  messages: Message[] | null;
  setMessages: (messages: Message[]) => void;
  appointments: Appointment[] | null;
  setAppointments: (appointments: Appointment[]) => void;

  fetchFaqs: () => void;
  fetchServices: () => void;
  fetchCounsellors: () => void;
  fetchCounsellorById: (id: string) => void;
  fetchUser: (loggedinUser: loggedinUser) => void;
  fetchLanguages: () => void;
  fetchReviews: () => void;
};

const useStore = create<Store>(
  devtools((set) => ({
    faqs: null,
    setFaqs: (faqs) => set({ faqs: faqs }),

    services: null,
    setServices: (services) => set({ services: services }),
    counsellors: null,
    setCounsellors: (counsellors) => set({ counsellors: counsellors }),
    counsellor: null,
    setCounsellor: (counsellor) => set({ counsellor: counsellor }),
    user: null,
    setUser: (user) => set({ user: user }),
    languages: null,
    setLanguages: (languages) => set({ languages: languages }),
    reviews: null,
    setReviews: (reviews) => set({ reviews: reviews }),
    messages: null,
    setMessages: (messages) => set({ messages: messages }),
    appointments: null,
    setAppointments: (appointments) => set({ appointments: appointments }),
    loggedinUser: null,
    setLoggedinUser: (loggedinUser) => set({ loggedinUser: loggedinUser }),

    fetchFaqs: () => {
      fetch("http://localhost:4000/faq")
        .then((res) => res.json())
        .then((entity) => set({ faqs: entity.data }));
    },
    fetchServices: () => {
      fetch("http://localhost:4000/services", { credentials: "include" })
        .then((res) => res.json())
        .then((entity) => set({ services: entity.data }));
    },
    fetchCounsellors: () => {
      fetch("http://localhost:4000/counsellors")
        .then((res) => res.json())
        .then((entity) => set({ counsellors: entity.data }));
    },
    fetchCounsellorById: (id) => {
      fetch(`http://localhost:4000/counsellors/${id}`)
        .then((res) => res.json())
        .then((counsellor) => set({ counsellor: counsellor.data }));
    },
    fetchUser: (loggedinUser) => {
      fetch(`http://localhost:4000/user/${loggedinUser.id}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((entity) => set({ user: entity.data }));
    },
    fetchLanguages: () => {
      fetch("http://localhost:4000/languages")
        .then((res) => res.json())
        .then((entity) => set({ languages: entity.data }));
    },
    fetchReviews: () => {
      fetch("http://localhost:4000/reviews", { credentials: "include" })
        .then((res) => res.json())
        .then((entity) => set({ reviews: entity.data }));
    },
  }))
);

export default useStore;
