import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLineChart,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "@/components/ui/Banner";
import ImageBox from "@/components/ui/ImageBox";

import room from "@img/office/room1_02.jpg";
import surgeryRoom from "@img/office/surgery-room.jpg";
import receptionImage from "@img/office/reception.jpg";

const Home = () => {

  const text = "Talk with our Front Desk for your needs";
  const url = "https://api.whatsapp.com/send?phone=256776045352&text=" + text;

  return (
    <>
      <Banner image={receptionImage} message={"Sinai Dental"} classes="animated" />
      <div class="hero-text">
        <h3>
          Say Goodbye to Dental Anxiety — Pain-Free Treatments Designed Just for
          You
        </h3>
        <p>
          Schedule a consultation under 5 minutes and join over 5000 people in
          experiencing the best dental care in Uganda
        </p>
      </div>
      <div className="hero container-fluid container-md">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9">
            <div className="px-2 my-1 mt-3 mt-md-0">
              <h2 className="heading">Our Mission</h2>
              <p>
                To develop long term relationships with our patients and ensure
                distinguished service through personalised, honest and informed
                care.
              </p>
              <h2 className="heading">Personalized Care</h2>
              {/* <ImageBox image={room} /> */}
              <div className="image-wrapper">
                <Image src={""} alt="" />
                <div className="penta-1 text-center">
                  <h4>Holisitc</h4>
                  <p>
                    We save your long-term health by finding the root cause of
                    your discomfort - not just the symptoms
                  </p>
                </div>
                <div className="penta-2 text-center">
                  <h4>Advanced Tech</h4>
                  <p>
                    We save your long-term health by finding the root cause of
                    your discomfort - not just the symptoms
                  </p>
                </div>
              </div>
              <div className="call-to-action mt-5">
                <p>
                  Our awesome team looks forward to receiving you and we hope to
                  exceed your expections.
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-app-primary"
                >
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid container-md">
        <section className="services-summary">
          <div className="row">
            <h2 className="heading">Services</h2>
            <div className="col-12 col-md-6 order-2 order-md-0">
              <p>
                We use cutting-edge technology in our work to get you the best
                results while in our care. Our services include:
              </p>
              <ul>
                <li>General</li>
                <li>Orthodontic</li>
                <li>Oral Surgery</li>
                <li>Restorative</li>
                <li>Emergency</li>
                <li>Others</li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ImageBox image={surgeryRoom}></ImageBox>
            </div>
          </div>
        </section>
        <section className="reviews">
          <h2 className="d-none">Reviews</h2>
          {/* <CardTiles infoArray={[]} /> */}
        </section>

        <section className="kpis my-4">
          <div className="d-flex justify-content-md-center border-bottom border-top py-4">
            <h2 className="d-none">KPIs</h2>
            <div className="inner bg-info my-3">
              <FontAwesomeIcon icon={faHeart} size="lg" className="py-2" />
              <h3 className="py-3">Clients</h3>
              <p>Over 4000</p>
            </div>
            <div className="inner bg-warning">
              <FontAwesomeIcon icon={faTrophy} size="lg" className="py-2 " />
              <h3 className="py-3">Average General Treatment</h3>
              <p>3 hours</p>
            </div>
            <div className="inner bg-success my-3">
              <FontAwesomeIcon icon={faLineChart} size="lg" className="py-2" />
              <h3 className="py-3">Years of XP</h3>
              <p>10</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
