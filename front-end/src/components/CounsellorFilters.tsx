import React from 'react';
import "../styles/counsellor-filters.css"
import ServiceFilter from "../components/ServiceFilter"
import LanguageFilter from "../components/LanguageFilter"
import HourlyRateSlider from '../components/HourlyRateSlider';
import GenderRadioButtons from '../components/GenderRadioButtons';
import YearsOfExperienceSlider from '../components/YearsOfExperienceSlider';

function CounsellorFilters() {

  return (
  
    <form className="counsellor-filters">
      <div className="service-filter">
        <ServiceFilter />
      </div>
      <div className="language-filter">
        <LanguageFilter />
      </div>
      <div className="gender">
        <GenderRadioButtons />
      </div>
      <div className="years-of-experience">
        <YearsOfExperienceSlider />
      </div>
      <div className="hourly-rate">
        <HourlyRateSlider />
      </div>
    </form>
  )} 

export default CounsellorFilters
  

