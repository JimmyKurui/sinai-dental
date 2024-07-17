import Banner from "../components/ui/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faUserAstronaut, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import drMatthewImage from "@img/team/dr-matthew-on-mountain.jpeg"
import drCheptoImage from "@img/team/dr-chepto.jpeg"
import nursesImage from "@img/team/nurses.jpeg"
import frontDeskImage from "@img/team/eva-front-desk-main.jpg"
// import { useState, useEffect } from "react";
// import { useIntersectionObserver } from "react-intersection-observer";

const Team = () => {
  document.title = 'Team | Sinai Dental'
  const stockImage = 'https://www.honolulufamilydentist.com/wp-content/uploads/2018/11/GettyImages-858252120-1170x550.jpg';
  return (
    <>
      <Banner image={stockImage} message={'Meet The Team'} />
      <section id="team-section">
        <div className="container-fluid container-md">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <p>We have a happy and motivated team at Sinai Dental Practice, sharing a common goal of achieving the highest standard of care for each of our patients. 
                <span> Our team includes dentists, nurses, administrative assistants, IT technician and a consultant aneasthesiologist who does our sedation cases.</span>
              </p>
              <p>We believe the best way to serve our clients is through the ability to listen and care for our patients overall well being. We are always available to assist you with queries on any aspect of your dental experience.</p>
            </div>
          </div>
          <div className="row team-member">
            <div className="team-member-figure col-12 col-md-4 mb-3 mb-md-0">
              <img
                src={drMatthewImage}
                alt="Team Member"
              />
            </div>
            <div className="team-member-description col-12 col-md-8">
              <h3>
                <FontAwesomeIcon icon={faUserDoctor} />
                Dr. Rubona Matthew
              </h3>
              <h4>Team Leader</h4> 
              <p>A graduate of College of Health Sciences Makerere University,  Matthew qualified with a distinction in practice of dentistry. During his studies he had an opportunity to intern at Kings College London and Queen Mary&apos;s in Belfast Ireland.</p>
              <p>After his qualification, he went on to join the busy department of oral and maxillo-facial surgery Mulago Hospital where he worked for a number of years. Through interaction with colleagues both within the oral surgery department and several visiting surgeons from allover the world he was able to acquire and become proficient in different surgical skills. After gaining experience he then went on to set up Sinai dental in 2010.</p>
              <p>Matthew takes on the role of clinical lead at the practice and has a special interest in  implants and  aesthetic dentistry including crowns , bridges , tooth whitening and composite fillings.</p>
              <p>When he is not at  Sinai, he enjoys running , hiking and the  occasional video gaming.</p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-md-6 mb-3 mb-md-0">
              <img
                src={drCheptoImage}
                alt="Team Member"
              />
            </div>
            <div className="team-member-description col-12 col-md-6">
              <h3>
                <FontAwesomeIcon icon={faUserDoctor} />
                Dr. Cheptoris Ashar 
              </h3>
              <p>Cheptoris graduated from College of Health Sciences Makerere University in 2010.  After graduating, she went on to join International Hospital Kampala (IHK) under Dr. Ian Clark as the hospital&apos;s lead dentist. After gaining experience working with IHK she joined Sinai Dental in 2017. Cheptoris has a Post Graduate Diploma in orthodontics and dentistry with Dr. Jaques cilliers. </p>
              <p>She has a keen interest in orthodontics and general dentistry and is instrumental in branding and building a reputation of clinical excellence at Sinai Dental.</p>
              <p>In addition she is also a recreational runner, enjoys hiking and gardening when she is not working.</p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-md-6 mb-3 mb-md-0">
              <img
                src={nursesImage}
                alt="Team Member"
              />
            </div>
            <div className="team-member-description col-12 col-md-6">
              <h3>
                <FontAwesomeIcon icon={faUserNurse} />
                Nursing team
              </h3>
              <p>
              Our nurses ensure your comfort and well-being throughout your dental treatment . From the moment you step into our clinic, they greet you with warmth and kindness. Behind-the-Scenes our nurses are busy preparing the treatment room. They sterilize instruments, organize supplies, and create a soothing environment.
              </p>
              <p>
              Nervous about dental procedures? Our nurses are experts in calming nerves. They hold your hand, explain each step, and make sure you feel safe. After your treatment, our nurses guide you through aftercare instructions. They ensure your recovery is smooth and pain-free.
              </p>
              <p>The best part? Our nurses celebrate your victories. When you leave with a brighter smile, they share in your joy. Remember, our nursing team is here to make your Sinai Dental experience exceptional.</p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-md-6 mb-3 mb-md-0">
              <img
                src={frontDeskImage}
                alt="Team Member"
              />
            </div>
            <div className="team-member-description col-12 col-md-6">
              <h3>
              <FontAwesomeIcon icon={faUserAstronaut} />
                Front desk
               </h3>
              <p>Eva is the first friendly face you see when you come to Sinai dental</p>
              <p>Ever noticed how our waiting area feels welcoming? That’s our administrators touch </p>
              <p> When hiccups happen (and they always do), Eva swoops in so feel at ease when you come to Sinai</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Team;
