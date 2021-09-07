import "../styles/counsellor.css"
import { Counsellor } from "../store";
import useStore from "../store"
import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

type SingleCounsellorProps = {
    counsellor: Counsellor
}

function SingleCounsellor() {
    let counsellor = useStore((state) => state.counsellor);
    const fetchCounsellorById = useStore((state) => state.fetchCounsellorById);

    const {id}: {id:string} = useParams();
    console.log(id)


	useEffect(() => {
        fetchCounsellorById(id)
	}, []);

	if (!counsellor) {
		return <h2>loading...</h2>;
	}

    console.log(counsellor)

    return (
        <main>
            <header>
                <h2 className="single-counsellor-name">{counsellor.firstName + " " + counsellor.lastName}</h2>
                <img className="single-counsellor-image" src={counsellor.avatar}
                alt={counsellor.firstName + " " + counsellor.lastName}/>
                <nav>
                    <ul>
                        <li>About me</li>
                        <li>Specialties</li>
                        <li>Licensing</li>
                        <li>Reviews</li>
                    </ul>
                </nav>
                </header>
                <section className="single-counsellor-about-me">
                    <h3 className="single-counsellor-subtitle">About me</h3>
                    <p>{counsellor.about}</p>
                </section>
                <Link to="/bookings/counsellor:id">
                <button className="link-to-counsellor">Work with me</button>
                </Link>
                <section className="single-counsellor-specialties">
                    <h3 className="single-counsellor-subtitle">Specialties</h3>
                    <p>{counsellor.specialties}</p>
                </section>
        </main>
        
    )
}

export default SingleCounsellor