import React from 'react'
import "./Services.css";
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
  return (
    <section className="services">
      <a href="#" className="more-services">
        More
      </a>
      {/* Services card container */}
      <div className="service-card-container">
        <ServiceCard />
      </div>
    </section>
  )
}

export default Services