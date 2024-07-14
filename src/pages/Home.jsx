// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLineChart,
  faTrophy,
  faTag,
  faPersonWalkingWithCane
} from "@fortawesome/free-solid-svg-icons";
// Components
import Banner from "../components/ui/Banner";
import ImageBox from "../components/ui/ImageBox";
import CardTiles from "../layouts/CardTiles";

import bannerImg from "@img/office/surgery-room.jpg";
import receptionImage from "@img/office/reception.jpg";

const Home = () => {
  const infoArray = [
    {
      img: "path_to_your_image1.jpg",
      body: "First body text",
      title: "First title",
      buttonText: "xxxx",
    },
    {
      img: "path_to_your_image2.jpg",
      body: "Second body text",
      title: "Second title",
      buttonText: "xxxx",
    },
  ];

  const text = 'Talk with our Front Desk for your needs';
  const url = "https://api.whatsapp.com/send?phone=256776045352&text=" + text;

  return (
    <>
      <Banner image={bannerImg} message={'Sinai Dental'}/>

      <div className="hero">
        <blockquote className="bg-app-primary-light p-3">
        &#8220;Many patients generally have a fear of dentists and so when we started
          Sinai Dental, we wanted to create a safe haven where our patients felt
          comfortable and in control during the course of their personalised
          care&#8221;
        </blockquote>
        <div className="px-2">
          <h5 className="text-app-primary">
            <FontAwesomeIcon icon={faTag} className="px-2"></FontAwesomeIcon>
            Our <span>mission</span>
          </h5>
          <p>
          To develop long term relationships with our patients
            and ensure distinguished service through personalised, honest and informed care.
          </p>
          <h5 className="text-app-primary">
            <FontAwesomeIcon icon={faPersonWalkingWithCane} className="px-2"></FontAwesomeIcon>
            What do we mean by personalised care?
          </h5>
          <p>
            Have you visited a dentist and felt that you were being rushed
            through your problem and therefore your treatment. At Sinai dental
            we are heavily invested in your well being. studies have shown that
            the mouth is a window to your overall health therefore our treatment
            approach to your health is a holistic one. we strive to identify the
            source of your discomfort and offer long lasting solutions.
          </p>
          <div className="call-to-action mt-5">
            <p>
              Our awesome team looks forward to receiving you and we hope to
              exceed your expections.
            </p>
            <a href={url} target="_blank" rel="noreferrer" className="btn bg-app-primary">Book</a>
          </div>
        </div>
      </div>

      <div className="container-fluid container-md">
        <section className="services-summary">
          <div className="row">
            <h2>Services</h2>
            <div className="col-12 col-md-6">
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
              <ImageBox image={receptionImage}></ImageBox>
            </div>
          </div>
        </section>
        {/* <section className="reviews">
          <h2 className="text-center">Reviews</h2>
          <CardTiles infoArray={[]} />
        </section> */}

        <section className="kpis my-4 flex-wrap">
          <div className="d-flex justify-content-center border-bottom border-top py-4">
            <div className="inner bg-info">
              <FontAwesomeIcon icon={faHeart} size="lg" className="py-2" />
              <h3 className="py-3">Clients</h3>
              <p>200</p>
              {/* <p className="text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
              turpis, cursus eget orci amet aliquam congue semper. Etiam eget
              ultrices risus nec tempor elit.
            </p> */}
            </div>
            <div className="inner border-secondary border-end border-start bg-warning">
              <FontAwesomeIcon icon={faTrophy} size="lg" className="py-2 " />
              <h3 className="py-3">
                Average General Treatment Time {/* Patient Satisfaction */}
              </h3>
              <p>3 hours</p>
            </div>
            <div className="inner bg-success">
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
