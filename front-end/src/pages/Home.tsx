import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import useStore from "../store";
import "../styles/home.css";

type ServiceTileProps = {
	service: string;
	imageLink: string;
};
function ServiceTile({ service, imageLink }: ServiceTileProps) {
	return (
		<li>
			<img src={imageLink} alt={imageLink} />
			<h3>{service}</h3>
		</li>
	);
}

function CounsellorDisc({ counsellorImage }: { counsellorImage: string }) {
	return (
		<div className="counsellor-disc">
			<img src={counsellorImage} alt="" />
		</div>
	);
}

function Home() {
	const services = useStore((state) => state.services);
	const setServices = useStore((state) => state.setServices);
	const counsellors = useStore((state) => state.counsellors);
	const setCounsellors = useStore((state) => state.setCounsellors);

	useEffect(() => {
		fetch("http://localhost:4000/services")
			.then((res) => res.json())
			.then((entity) => setServices(entity.data))
			.then(() => console.log(services));
	}, []);
	useEffect(() => {
		fetch("http://localhost:4000/counsellors")
			.then((res) => res.json())
			.then((entity) => setCounsellors(entity.data))
			.then(() => console.log(services));
	}, []);

	return (
		<>
			<Banner
				title=""
				imageLink="https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
			/>
			<div className="wrapper">
				<h2>Services</h2>
				<section className="services">
					<ul>
						{services ? (
							services.map((service) => {
								return (
									<ServiceTile
										key={service.name}
										service={service.name}
										imageLink=""
									/>
								);
							})
						) : (
							<h2>loading...</h2>
						)}
					</ul>
				</section>
				<section className="counsellors">
					<div>
						<div>
							<h2>
								Professional, licensed and vetted therapist who
								you can trust
							</h2>
							<div className="counsellor-container">
								{counsellors ?counsellors.map((counsellor) => {
									return (
										<CounsellorDisc
											counsellorImage={counsellor.avatar}
										/>
									);
								}) : <h2>Loading...</h2>}
							</div>
						</div>
						<div></div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Home;
