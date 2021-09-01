import React from 'react'
import "../styles/counsellors.css" 
import CounsellorCard from "../components/CounsellorCard"

function Counsellors() {
    return (
        <main>
            <h2>Counsellors</h2>

            <section className="counsellor-card-grid">
                <CounsellorCard />
                

            </section>
        </main>
    )
}

export default Counsellors