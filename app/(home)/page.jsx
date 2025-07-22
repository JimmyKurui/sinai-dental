import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLineChart,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "@/components/ui/Banner";
import ImageBox from "@/components/ui/ImageBox";
import Reviews from "../components/reviews/Reviews";
import reviews from "./reviews";

import chairFocusedImage from "@img/office/room1_02.jpg";
import surgeryRoomImage from "@img/office/surgery-room.jpg";
import receptionImage from "@img/office/reception_renovation.jpg";

const Home = () => {
  const text = "Talk with our Front Desk for your needs";
  const url = "https://api.whatsapp.com/send?phone=256776045352&text=" + text;

  return (
    <>
      <Banner
        image={receptionImage}
        message={"Sinai Dental Practice"}
        classes="animated"
      >
        <div class="banner-text">
          <h3>
            Say Goodbye to Dental Anxiety — Pain-Free Treatments Designed Just
            for You
          </h3>
          <p>
            Schedule a consultation under 5 minutes and join over 5000 people in
            experiencing the best dental care in Uganda
          </p>
        </div>
      </Banner>
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
            </div>
            <div>
              <h2 className="heading">Personalized Care</h2>
              <div className="pentagon-wrapper">
                <div className="pentagon-image">
                  <Image
                    src={chairFocusedImage}
                    alt="spotlight dental surgery chair"
                  />
                </div>
                <div className="pentagon-card pentagon-position-1">
                  <h4>Holisitc</h4>
                  <p>
                    We save your long-term health by finding the root cause of
                    your discomfort - not just the symptoms
                  </p>
                </div>
                <div className="pentagon-card pentagon-position-2">
                  <h4>Long Term Value</h4>
                  <p>
                    High value for your investment through a long lasting
                    solution, escaping unnecessary surgeries and future spending
                  </p>
                </div>
                <div className="pentagon-card pentagon-position-3">
                  <h4>Trusted by Thousands, Growing Rapidly</h4>
                  <p>
                    It mirrors our commitment to excellence and innovation, just
                    like top-performing dental groups worldwide. We continuously
                    refine our ways to exceed your expectations on every visit
                  </p>
                </div>
                <div className="pentagon-card pentagon-position-4">
                  <h4>Comprehensive Care Under One Roof</h4>
                  <p>
                    From routine cleanings to specialty procedures, our
                    integrated approach means you receive all your dental care
                    without referrals or delays
                  </p>
                </div>
                <div className="pentagon-card pentagon-position-5">
                  <h4>Advanced Technology</h4>
                  <p>
                    Faster procedures, comfort, and precise treatment using the
                    latest dental tech in 3D printing and digital imaging
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

      <section className="services-summary">
        <div className="container-fluid container-md">
          <div className="row">
            <h2 className="heading">Services</h2>
            <div className="col-12 col-md-6 order-2 order-md-0">
              <p>
                Access our rich catalog of services to meet your unique needs.
              </p>
              <ul>
                <li>Preventative Care</li>
                <li>Cosmetic Dentistry</li>
                <li>Restorative Treatments</li>
                <li>Orthodontics</li>
                <li>Pediatric Dentistry</li>
                <li>Emergeny Dental Care</li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ImageBox image={surgeryRoomImage}></ImageBox>
            </div>
          </div>
        </div>
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

      <section className="reviews">
        <h2 className="ms-5 px-3">Latest Reviews</h2>
        <Reviews reviews={reviews} />
        <div className="d-flex ms-5">
          <p className="me-1">Share a few thoughts on our service, we love feedback!</p>
          <Link
            href="https://www.google.com/maps/place/Sinai+Dental+Practice/@0.3380534,32.5870149,17z/data=!4m8!3m7!1s0x177dbba666177429:0x5a1ad88f3a5c5f9a!8m2!3d0.3380534!4d32.5870149!9m1!1b1!16s%2Fg%2F11csqvhg35?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            about="Add a Google review"
            rel="noopener noreferrer"
            className="px-3"
          >
            Google
          </Link>
          <Link
            href="https://www.facebook.com/sinaidental/reviews"
            target="_blank"
            about="Add a Facebook recommendation"
            rel="noopener noreferrer"
            className="px-3"
          >
            Facebook
          </Link>
        </div>
      </section>

      <section className="reviews">
        <h2 className="">Feedback</h2>
      </section>

      <section className="steps">
        <div className="row">
          <div className="col p-6">
            <Banner src={{}} />
          </div>
          <div className="col">
            <h3 className="">Getting Started</h3>
            <div>
              <h4>1. Get In Touch</h4>
              <p>
                Via call or a Whatsapp chat and our assistant will tend to you.
              </p>
            </div>
            <div>
              <h4>2. Tell Us Your Issue</h4>
              <p>
                Describe how you're feeling or what look you envision briefly{" "}
              </p>
            </div>
            <div>
              <h4>3. Book consultation</h4>
              <p>Be added to a slot while still on call and in time</p>
            </div>
            <small className="text-muted">
              Note: Insurance options are accepted at the clinic - check out
              FAQs
            </small>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
