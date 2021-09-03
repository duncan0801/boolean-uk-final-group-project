import React from 'react';
import "../styles/counsellors.css"; 
import CounsellorCard from "../components/CounsellorCard";
import CounsellorFilters from '../components/CounsellorFilters';
import useStore from "../store";
import { useEffect } from "react"

function Counsellors() {
    const counsellors = useStore(state => state.counsellors)
	const setCounsellors = useStore(state => state.setCounsellors)
	console.log(counsellors);

	useEffect(() => {
		fetch("http://localhost:4000/counsellors")
			.then((res) => res.json())
			.then((response) => setCounsellors(response.data))
			.then(() => console.log(counsellors));
	}, []);
	if (!counsellors) {
		return <h2>loading...</h2>;
	}
    return (
        <main className="counsellors">
            <section className="counsellor-filters">
                <h3 className="filter-title">Filter:</h3>
                <CounsellorFilters />
            </section>
            <section className="counsellor-card-grid">
            {counsellors.map((counsellor) => (
                <CounsellorCard counsellor={counsellor}/>
            ))}
            </section>
        </main>
    )
}

export default Counsellors