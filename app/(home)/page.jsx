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
import HexagonLayout from "@/components/ui/geometricBlocks/HexagonalLayout";
import Reviews from "@/components/reviews/Reviews";
import FeaturedMediaCard from "@/components/ui/FeaturedMediaCard";
import valuePropositions from "./valuePropositions";
import reviews from "./reviews";
import featuredPieces from "./featuredPieces";

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
              <HexagonLayout textBlocks={valuePropositions} />
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
              <span>
                <span>With over <strong>10 years</strong> of experience we provide a rich catalog of services to meet your unique needs.</span>
                <br />
                <span>*Average General Treatment takes 1 to 3 hours</span>
              </span>
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
            Add Google Review
          </Link>
          <Link
            href="https://www.facebook.com/sinaidental/reviews"
            target="_blank"
            about="Add a Facebook recommendation"
            rel="noopener noreferrer"
            className="px-3"
          >
            Add Facebook Recommendation
          </Link>
        </div>
      </section>

      <section className="featured">
        <h2 className="ms-5 px-3">Featured</h2>
        <div className="container-fluid">
          <div className="row gy-3">
            <div className="col-12 col-md-6 col-lg-4">
              <FeaturedMediaCard url={featuredPieces[0].cite} video={featuredPieces[0].video} caption={featuredPieces[0].caption} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <FeaturedMediaCard url={featuredPieces[1].cite} caption={featuredPieces[1].caption} />
            </div>
            <div className="col-12 col-lg-4 minor-featured">
              <div className="row gy-2">
                {featuredPieces.slice(2).map((piece, idx) => (
                  <div className="col-12 col-md-4 col-lg-12">
                    <FeaturedMediaCard
                      key={idx}
                      url={piece.cite}
                      thumbnail={piece.thumbnail}
                      caption={piece.caption}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
