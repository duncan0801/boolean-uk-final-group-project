import react from "react"
import "../styles/counsellor-card.css"
import useStore from "../store";



type Counsellor = {
    id: number
    firstName:    string
    lastName:     string
	avatar: string
    specialties:  string[]
}

function CounsellorCard(counsellor : Counsellor ) {
    return (
        <article className="counsellor-card">
            <img className="counsellor-image" src={counsellor.avatar}
            alt={counsellor.firstName}/>
            <h3 className="counsellor-name">{counsellor.firstName}</h3>
            <h4>{counsellor.specialties}</h4>
        </article>
    )
}

export default CounsellorCard
