import React from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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
  const fetchServices = useStore((state) => state.fetchServices);
  const counsellors = useStore((state) => state.counsellors);
  const setCounsellors = useStore((state) => state.setCounsellors);
  const fetchCounsellors = useStore((state) => state.fetchCounsellors);
  const history = useHistory();

  useEffect(() => {
    fetchServices();
    fetchCounsellors();
  }, []);

  const fiveCounsellors = counsellors ? counsellors.slice(0, 5) : null;

  function handleCouncillorButtonClick() {
    history.push("/counsellors");
  }

  return (
    <>
      <Banner
        title=""
        imageLink="https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="wrapper">
        <h2 className="homeH2">Services</h2>
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
              <h2 className="homeH2">loading...</h2>
            )}
          </ul>
        </section>
      </div>
      <section className="counsellors">
        <div className="wrapper">
          <h2 className="homeH2">Counsellors</h2>
          <h3>
            Professional, licensed, and vetted therapist who you can trust
          </h3>
          <div className="counsellor-container">
            {fiveCounsellors ? (
              fiveCounsellors.map((counsellor) => {
                return <CounsellorDisc counsellorImage={counsellor.avatar} />;
              })
            ) : (
              <h2 className="homeH2">Loading...</h2>
            )}
          </div>
        </div>
        <button onClick={handleCouncillorButtonClick}>
          View Our Counsellors
        </button>
      </section>
    </>
  );
}

export default Home;
