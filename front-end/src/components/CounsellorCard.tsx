import react from "react"
import "../styles/counsellor-card.css"

function CounsellorCard() {
    return (
        <article className="counsellor-card">
            <img className="counsellor-image" src="https://avatars.githubusercontent.com/u/1071625?v=4"
            alt="John Doe"/>
            <h3 className="counsellor-name">John Doe</h3>
            <h4>Hypnotherapy, Anxiety, Depression</h4>
            <p>rating</p>
        </article>
    )
}

export default CounsellorCard
