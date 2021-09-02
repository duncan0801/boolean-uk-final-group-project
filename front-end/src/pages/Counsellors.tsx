import React from 'react'
import "../styles/counsellors.css" 
import CounsellorCard from "../components/CounsellorCard"
import CounsellorFilters from '../components/CounsellorFilters'

function Counsellors() {
    return (
        <main className="counsellors">
            <section className="counsellor-filters">
                <h3 className="filter-title">Filter:</h3>
                <CounsellorFilters />
            </section>
            <section className="counsellor-card-grid">
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
                <CounsellorCard />
            </section>
        </main>
    )
}

export default Counsellors