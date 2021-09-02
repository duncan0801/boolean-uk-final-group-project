import React from 'react'
import "../styles/counsellors.css" 
import CounsellorCard from "../components/CounsellorCard"
import CounsellorFilters from '../components/CounsellorFilters'

function Counsellors() {
    return (
        <main className="counsellors">
            <section className="counsellor-filters">
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