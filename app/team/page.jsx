// import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/ui/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faUserAstronaut,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import stockPhoto from "@img/office/black_boy_patient_stock.jpg";
import drMatthewImage from "@img/team/dr-matthew-on-mountain.jpeg";
import drCheptoImage from "@img/team/dr-chepto.jpeg";
import nursesImage from "@img/team/nurses.jpeg";
import frontDeskImage from "@img/team/eva_sinai_banner_window.jpg";

export const metadata = {
  title: 'Team | Sinai Dental',
  description: 'Meet the multiple award team at Sinai Dental Practice, committed to providing exceptional dental care with compassion and expertise.',
};

const Team = () => {
  return (
    <>
      <Banner image={stockPhoto} message={"Meet The Team"}>
        <blockquote className="bg-app-primary-light p-3 ms-md-4 me-md-2 mt-md-3 float-right rotate-45">
          &#8220;Many patients generally have a fear of dentists and so
          when we started Sinai Dental, we wanted to create a safe haven
          where our patients felt comfortable and in control during the
          course of their personalised care&#8221;
        </blockquote>
      </Banner>

      <section id="team">
        <div className="container-fluid container-md">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <p>
                We have a happy and motivated team at Sinai Dental Practice - sharing a common goal of achieving the highest standard of care for each of our patients.
              </p>
              <p>
                Our team consists of dentists, nurses, administrative assistants,
                an IT technician, and a consultant aneasthesiologist who does our
                sedation cases.
              </p>
            </div>
          </div>
          <div className="row team-member">
            <div className="team-member-figure col-12 col-lg-4 mb-3 mb-lg-0">
              <Image src={drMatthewImage} alt="Doctor Matthew Rubona" className="img-fluid" />
            </div>
            <div className="team-member-description col-12 col-lg-8">
              <h3>
                <FontAwesomeIcon icon={faUserDoctor} />
                Dr. Rubona Matthew
              </h3>
              <h4>Team Lead, President - Uganda Dental Association (UDA)</h4>
              <p>
                A graduate of College of Health Sciences <strong>Makerere University</strong>, Matthew qualified with a distinction in practice of dentistry - wherein he interned at <strong>Kings College London</strong> and <strong>Queen Mary's University Belfast</strong> Ireland.
              </p>
              <p>
                He then worked at the busy department of oral and maxillo-facial surgery at <strong>Mulago Hospital</strong> for half a decade. In this period, he interacted with several colleagues and visiting surgeons from around the world, becoming proficient in several surgical skills.
              </p>
              <p>
                In 2010, Matthew set up <strong>Sinai Dental</strong>. He acts as the clinical lead at the practice and has a special interest in implants and aesthetic dentistry including: crowns, bridges, tooth whitening and composite fillings. Currently, he also serves as the <strong>President of Uganda Dental Association (UDA)</strong> after being elected in 2024.
              </p>
              <p>
                When he’s not at Sinai, he enjoys running, hiking and the occasional video gaming.
              </p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-lg-4 mb-3 mb-lg-0">
              <Image src={drCheptoImage} alt="Doctor Cheptoris Ashar" className="img-fluid" />
            </div>
            <div className="team-member-description col-12 col-lg-8">
              <h3>
                <FontAwesomeIcon icon={faUserDoctor} />
                Dr. Ashar Cheptoris
              </h3>
              <p>
                After her distinctive studies from the College of Health Sciences <strong>Makerere University</strong> in 2010, she joined <strong>International Hospital Kampala (IHK)</strong> under <strong>Dr. Ian Clarke</strong> as the hospital's lead dentist.
              </p>
              <p>
                After practicing in the field diligently, she joined <strong>Sinai Dental</strong> in 2017. Cheptoris has a keen interest in orthodontics and general dentistry at the clinic in which she possesses a <strong>Post Graduate</strong> Diploma in orthodontics and dentistry with <strong>Dr. Jaques Cilliers</strong>.
              </p>
              <p>
                She is also instrumental in <strong>branding</strong> and building a reputation of clinical excellence at Sinai Dental, where she has been featured in <strong>Pakasa</strong>, <strong>New Vision</strong> and <strong>Monitor</strong> in business and promoting healthy living.
              </p>
              <p>
                Away from the clinic, she’s also a recreational runner, enjoys hiking, and gardening
              </p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-lg-4 mb-3 mb-lg-0">
              <Image src={nursesImage} alt="Nurses Sinai Dental Practice" className="img-fluid" />
            </div>
            <div className="team-member-description col-12 col-lg-8">
              <h3>
                <FontAwesomeIcon icon={faUserNurse} />
                Nursing Team
              </h3>
              <p>
                Whether you're visiting us for <strong>routine dental care</strong>, <strong>family dentistry</strong>, or more <strong>advanced oral surgery</strong>, our experienced nursing team plays a critical role in ensuring a <strong>smooth and stress-free</strong> experience for every patient.
              </p>
              <p>
                Behind the scenes before your treatment begins, our nurses meticulously prepare your treatment room - from <strong>sterilizing dental instruments</strong> to organizing supplies - creating a clean, calm and safe environment. They take the time to explain <strong>dental procedures</strong> and offer the reassurance you need to feel safe and confident in your care.
              </p>
              <p>
                After your treatment, they provide <strong>clear aftercare instructions</strong> and support your recovery, ensuring it is smooth and pain-free.
              </p>
              <p>
                When you leave with a brighter smile, we celebrate your success right alongside you at Sinai Dental 😊.
              </p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-lg-4 mb-3 mb-lg-0">
              <Image src={frontDeskImage} alt="Eva Sinai Dental Practice" className="img-fluid" />
            </div>
            <div className="team-member-description col-12 col-lg-8">
              <h3>
                <FontAwesomeIcon icon={faUserAstronaut} />
                Front Desk
              </h3>
              <p>
                Your comfort begins the moment you walk through our doors — and that moment starts with Eva, the friendly face at our front desk. With a calm, professional demeanor and a genuine passion for patient care, Eva ensures every visit feels <strong>personal, seamless, and stress-free</strong>.
              </p>
              <p>
                Whether you’re a <strong>local resident or visiting from abroad</strong> for specialized dental treatment, Eva is here to guide you. From <strong>fast and efficient check-ins</strong>, <strong>answering your questions</strong>, or handling <strong>last-minute schedule adjustments</strong>, she makes sure everything runs smoothly — so you can focus on what matters most: your smile.
              </p>
              <p>
                Families love Eva’s thoughtful approach — whether it’s helping <strong>children feel at ease</strong>, organizing <strong>family appointments</strong>, or explaining general treatment clearly for first-time visitors. Even during busy hours or complex care coordination, Eva stays composed and helpful, providing support every step of the way even in <strong>emergencies</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
