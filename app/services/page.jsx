import Banner from "@/components/ui/Banner";
import bannerImg from "@img/office/room2_chair.jpg";

import BentoGrid from "@/components/ui/BentoGrid";

const Services = () => {
  return (
    <>
      <Banner image={bannerImg} message={'Services'} />
      <section className="services-summary">
        <div className="container-fluid container-md">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <p>
                We offer a full range of treatments and services within the
                practice, from essential preventative services to advanced cosmetic
                and skin treatments.
              </p>
              <p>
                We stay at the forefront of dental technology. Using our state-of-the-art chair side monitors and intra-oral cameras that let you see what the dentist sees - deepening your understanding of your treatment. We also use digital x-rays, reducing radiation exposure to prioritize your safety and well being.
              </p>
              <p>
                See our transformative results here 
                <u className="px-2">
                  <strong>
                    View our Before & After Gallery
                  </strong>
                </u>
                <strong><small className="badge rounded-pill bg-secondary">Coming Soon</small></strong>
              </p>
            </div>
          </div>
        </div >
      </section>

      <section id="services">
        <BentoGrid />
      </section >
    </>
  );
};

export default Services;
