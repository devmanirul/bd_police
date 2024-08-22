import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";
import "./ServiceCard/ServiceCard.css";
import servicesList from "../../ServiceList";
import youtubeVideos from "../../serviceVideo";

const Services = () => {
  return (
    <section className="services">
      <div className="service-more-button">
        <a href="#" className="more-button">
          More
        </a>
      </div>
      {/* services card container */}
      <div className="service-card-container">
        {servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            title={service.title}
            list={service.list}
          />
        ))}
      </div>
      {/* video services gallery */}
      <div className="service-video-gallery">
        <h2 className="">বাংলাদেশ পুলিশ ভিডিও</h2>
        {/* videos container */}
        <div className="videos-container">
          {/* video 1 */}
          {youtubeVideos.map((videoId) => (
            <div key={videoId} className="video1">
              <iframe
                width="265"
                height="223"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="বাবার মতো পুলিশ হবো"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
