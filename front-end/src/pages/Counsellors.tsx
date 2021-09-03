import React from 'react';
import "../styles/counsellors.css"; 
import CounsellorCard from "../components/CounsellorCard";
import CounsellorFilters from '../components/CounsellorFilters';
import useStore from "../store";
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Counsellors() {
    let counsellors = useStore((state) => state.counsellors);
    const fetchCounsellors = useStore((state) => state.fetchCounsellors);

	useEffect(() => {
        fetchCounsellors()
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
                <CounsellorCard key={counsellor.id} counsellor={counsellor}/>
            ))}
            </section>
        </main>
    )
}

export default Counsellors