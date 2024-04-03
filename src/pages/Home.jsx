// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLineChart,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPaypal,
  faStrava,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Components
import Banner from "../components/ui/Banner";
import ImageBox from "../components/ui/ImageBox";
import CardTiles from "../layouts/CardTiles";

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
    {
      img: "path_to_your_image3.jpg",
      body: "Third body text",
      title: "Third title",
      buttonText: "xxxx",
    },
  ];

  return (
    <>
      <Banner message="Home" />
      <div className="call-to-action text-center py-5">
        <p>About
Many patients generally have a fear of dentists and so when we started Sinai Dental, we wanted to
create a safe haven where our patients felt comfortable and in control during the course of their
personalised care.
our mission is to develop long term relationships with our patients and ensure distinguished service
through personalised , honest and informed care.
what do we mean by personalised care?
Have you visited a dentist and felt that you were being rushed through your problem and therefore your
treatment. At Sinai dental we are heavily invested in your well being. studies have shown that the
mouth is a window to your overall health therefore our treatment approach to your health is a holistic
one. we strive to identify the source of your discomfort and offer long lasting solutions.
Our awesome team looks forward to receiving you and we hope to exceed your expections.</p>
        <button className="button bg-info">Book</button>
      </div>
      <section className="services-summary">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Services</h2>
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
              <ImageBox></ImageBox>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <h2 className="text-center">Reviews</h2>
        <CardTiles infoArray={infoArray} />
        {/* <Card img={infoArray[0].img} body={infoArray[0].body} title={infoArray[0].title} buttonText={infoArray[0].buttonText} /> */}
      </section>

      <section className="kpis my-4">
        <div className="d-flex border-bottom border-top py-4">
          <div className="inner text-center p-4">
            <FontAwesomeIcon icon={faHeart} size="lg" className="py-2" />
            <h3 className="py-3">Clients</h3>
            <p className="text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
              turpis, cursus eget orci amet aliquam congue semper. Etiam eget
              ultrices risus nec tempor elit.
            </p>
          </div>
          <div className="inner text-center p-4 border-secondary border-end border-start">
            <FontAwesomeIcon icon={faTrophy} size="lg" className="py-2 " />
            <h3 className="py-3">Impact</h3>
            <p className="text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
              turpis, cursus eget orci amet aliquam congue semper. Etiam eget
              ultrices risus nec tempor elit.
            </p>
          </div>
          <div className="inner text-center p-4">
            <FontAwesomeIcon icon={faLineChart} size="lg" className="py-2" />
            <h3 className="py-3">Years of XP</h3>
            <p className="text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
              turpis, cursus eget orci amet aliquam congue semper. Etiam eget
              ultrices risus nec tempor elit.
            </p>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="placeholder">
          <h2 className="text-center text-light">Partners</h2>
          <div className="container">
            <div className="row align-self-center">
              <div className="col cols-12">
                {/* <Carousel
                  interval={3000}
                  indicators={false}
                  controls={false}
                  pause={false}
                >
                  <Carousel.Item>
                  </Carousel.Item>
                  <Carousel.Item>
                  <FontAwesomeIcon icon={faPaypal}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStrava}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </Carousel.Item>
                  </Carousel> */}
                <div
                  className="partner-logos d-flex justify-content-between"
                  style={{ padding: "0 10rem" }}
                >
                  <FontAwesomeIcon
                    icon={faPaypal}
                    size="5x"
                    className="text-white"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStrava}
                    size="5x"
                    className="text-white"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="5x"
                    className="text-white"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faStrava}
                    size="5x"
                    className="text-white"
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
