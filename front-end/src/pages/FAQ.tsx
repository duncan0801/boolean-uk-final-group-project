import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "../components/Banner";
import useStore from "../store";
import "../styles/faq.css";

type QuestionAndAnswer = {
	question: string;
	answer: string;
};

function QuestionAndAnswer({ question, answer }: QuestionAndAnswer) {
	return (
		<li>
			<button>{question}</button>
			<p>{answer}</p>
            <hr></hr>
		</li>
        
	);
}
function FAQ() {
	const faqs = useStore(state => state.faqs)
	const setFaqs = useStore(state => state.setFaqs)
	console.log(faqs);

	useEffect(() => {
		fetch("http://localhost:4000/faq")
			.then((res) => res.json())
			.then((response) => setFaqs(response.data))
			.then(() => console.log(faqs));
	}, []);
	if (!faqs) {
		return <h2>loading...</h2>;
	}
	return (
		<>
			<Banner
            title="FAQs"
            imageLink=""
            />
			<section className={"faqs"}>
				<ul className="faq-list">
					{faqs.map((faq: QuestionAndAnswer, index: number) => {
						return (
							<QuestionAndAnswer
								question={faq.question}
								answer={faq.answer}
								key={index}
							/>
						);
					})}
				</ul>
			</section>
		</>
	);
}

export default FAQ;
