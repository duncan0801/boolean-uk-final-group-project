import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
			<section className={"banner"}>
				<h1>FAQs</h1>
				<img
					src="https://images.pexels.com/photos/3771060/pexels-photo-3771060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt="https://images.pexels.com/photos/3771060/pexels-photo-3771060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				></img>
			</section>
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
