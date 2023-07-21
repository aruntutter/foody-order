import Service from "./Service";
import Title from "./Title";

import { services } from "../constants";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="variety" />
      <div className="section-center services-center">
        {services.map((item) => {
          return <Service {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Services;
