// import { Tab, Tabs, Row, Col, Nav } from "react-bootstrap";
// import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/ui/Banner";
import bannerImg from "@img/office/room-1-closeup.jpg";

const Services = () => {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);
  const [showHeadingContent, setShowHeadingContent] = useState(false);

  const services = [
    {
      key: "general",
      category: "general",
      content: [
        {
          key: "generals",
          title: "General examination and radiographs",
          body: (
            <>
              <p>
                When you schedule an appointment at Sinai Dental and come in for
                you first visit, our experienced dentists will perform a
                thorough assessment of your oral health and may require any
                number of x-rays especially if you need extensive dental
                treatment.
              </p>
              <p>
                At Sinai we keep abreast of the latest technologies to aid with
                a fast, comfortable and seamless delivery of diagnosis and
                subsequent treatment so don&apos;t hesistate to get in touch
                with us
              </p>
            </>
          ),
        },
        {
          key: "dental-cleaning",
          title: "Dental cleaning",
          body: (
            <>
              <p>
                Even when we brush our teeth regularly, some areas that we
                can&apos;t reach properly get build-up (calculus/ tartar). The
                more build-up we get, the more the gum around the build-up gets
                inflammed. inflammation can lead to bleeding gums, bone loss
                around a tooth and eventually mobile/loose teeth which can
                fall-out if you don&apos;t receive any kind of intervention.
              </p>
              <p>
                We also use the scheduled cleaning appointments to do checkups,
                While we check your teeth and gums we look out for any early
                signs of other pathologies e. g cancer. These checkups therefore
                ensure that any small problems if present don&apos;t become big
                problems that require extensive and expensive treatment.
              </p>
              <p>
                Our professional team of dentists and hygienists will guide you
                through your cleaning regimen with a gentle hand.
              </p>
            </>
          ),
        },
        {
          key: "preventative",
          title: "Preventive and Family dentistry",
          body: (
            <>
              <p>
                &quot; Prevention is better than cure &quot; - this proverb is
                true in regards to your oral health. At Sinai Dental we
                emphasize the importance of incorporating good oral hygiene
                practices in your daily routine as we believe this will
                eventually lead to a happier and more fulfilling life. These
                inexpensive proactive measures help maintain healthy gums and
                teeth.
              </p>

              <h5 className="text-capitalize">Dental checkups</h5>
              <p>
                With a general oral examination and x-rays, our dentists are
                able to detect any new cavities , pinpoint any leakages on old
                fillings or notice any new abnormalities in the mouth.
              </p>

              <h5 className="text-capitalize">dental cleaning</h5>
              <p>
                Because tartar and stubborn stains are extremely difficult to
                remove with your regular tooth brush, ultrasonic scalers are
                used by our dentist / hygienist to remove plaque, tartar and
                superficial stains that has built-up on the tooth. Sometimes our
                patient may require a deep scaling and this entails going under
                the gum to remove the tartar, this is normally done under
                anaesthesia.
              </p>

              <h5 className="text-capitalize">digital radiographs</h5>
              <p>
                Dental digital radiographs use 80% to 90% less radiation
                compared to the traditional radiographs and so they are safer
                and produce an enhanced image of your teeth , gums and any
                surrounding structures.
              </p>

              <h5 className="text-capitalize">Fluoride</h5>
              <p>
                Demineralisation of teeth can be detected early during your
                bi-annual checkup and fortunately it can be reversed through
                remineralisation. fluoride gels in moderation can be used to
                help remineralise teeth.
              </p>

              <h5 className="text-capitalize">Tooth grinding/ bruxism</h5>
              <p>
                Tooth grinding (bruxism) means ginding / gnashing teeth usually
                unconciously especially at night and one of the causes is
                stress. Bruxism can lead to chipping of teeth, un- natural wear
                and tear of teeth and cracked fillings. Early detection can lead
                to early intervention.
              </p>
            </>
          ),
        },
        {
          key: "fissure",
          title: "fissure sealants and fluoride",
          body: (
            <>
              <h5 className="text-capitalize">Sealants</h5>
              <p>
                Fissure sealants are coatings that are applied to the grooves at
                the back of your teeth to prevent cavities. Children in
                particular benefit alot from sealants. Children&apos;s new teeth
                have deep grooves that encourgage food impaction and your child
                may not be very ardent at brushing his/her teeth. In order to
                prevent cavities from developing in these areas we place
                sealants.
              </p>
              <p>
                At Sinai dental , we are committed to ensuring that our patients
                attain optimal oral health in a confortable and professional
                environment
              </p>

              <h5 className="text-capitalize">Fluoride</h5>
              <p>
                Did you know plaque has bacteria that produces acid that sap
                important minerals from your teeth? This process, known as
                demineralization, can negatively impact your oral health by
                making you more susceptible to cavities.
              </p>
              <p>
                Fluoride is a cavity fighter that aids in making our teeth
                stronger through a process known as remineralization.
              </p>
              <p>
                At Sinai Dental, we recommend fluoride in moderation as a
                preventative measure to ensure your teeth remain healthy.
              </p>
            </>
          ),
        },
        {
          key: "night-guards",
          title: "Night guards/ splints for teeth grinding",
          body: (
            <>
              <p>
                Tooth grinding (bruxism) means ginding / gnashing teeth usually
                unconciously especially at night and one of the causes is
                stress. Bruxism can lead to chipping of teeth, un- natural wear
                and tear of teeth and cracked fillings. Early detection can lead
                to early intervention.
              </p>
              <p>
                After a thorough assessment, our dentists at Sinai Dental may
                recommend a custom made night guard/splints together with other
                interventions to alleviate symptoms caused by bruxism.
              </p>
              <p>
                Our team at Sinai Dental endeavours to give you all the
                information including solutions that you require about your
                condition in a comfortable and relaxed environment.{" "}
              </p>
            </>
          ),
        },
        {
          key: "halitosis",
          title: "Halitosis treatment",
          body: (
            <>
              <p>
                Halitosis is an oral condition where the main symptom is bad
                breath. Halitosis decreases self esteem, makes you isolated and
                lowers your dignity. How common is halitosis? Halitosis is a
                widespread condition, affecting approximately 1 out of 4 people
                around the globe. One research study, which combined the
                findings of 13 medical journal articles, found that halitosis
                affects about 31.8% of the population.
              </p>
              <p>
                Identifying the source of the bad breath is the first step in
                it&apos;s management. Some of the common causes of halistosis
                are poor oral hygiene, infections of the gum and accumulation of
                proteins at the back of the tongue. We provide you with the
                knowledge that you require to keep your breath pleasant
              </p>
              <p>
                Visit our expert dentists at your conveniece from Monday to
                Friday 8am to 5pm and Saturday at 8am to 2pm.
              </p>
            </>
          ),
        },
        {
          key: "laser",
          title: "Laser dentistry",
          body: (
            <>
              <p>
                Our advanced laser technology offers a pain free, minimally
                invasive alternative to traditional procedures. Laser dentistry
                is comfortable, ensures faster healing and is accurate. some of
                the treatments done with a laser include:
              </p>
              <ol>
                <li>Crown lengthening without cutting the gum with a scapel</li>
                <li>
                  Gum reshaping following traditional braces and in gummy smiles
                </li>
                <li>
                  Painless exposure of the implant without cutting the gum{" "}
                </li>
                <li>Tongue-tie release</li>
                <li>
                  Frenectomy (Frenum release)
                  <ol>
                    <li>Painless Root Canal Treament</li>
                    <li>Dental anxiety management</li>
                    <li>chipped tooth</li>
                  </ol>
                </li>
              </ol>
            </>
          ),
        },
      ],
    },
    {
      key: "cosmetic",
      category: "cosmetic",
      content: [
        {
          key: "cosmetic-veneers",
          title: "veneers",
          body: "Veneers are thin shells of porcelain or composite resin that cover the front surface of teeth to improve their appearance, often used to fix chipped, stained, or misaligned teeth."
        },
        {
          key: "cosmetic-fillings",
          title: "Tooth coloured fillings (dental bonding)",
          body: "Tooth coloured fillings, also known as dental bonding, use composite resin to repair decayed, chipped, or discolored teeth, blending seamlessly with the natural tooth color."
        },
        {
          key: "cosmetic-whitening",
          title: "Teeth whitening",
          body: "Teeth whitening is a cosmetic procedure that uses bleaching agents to lighten teeth and remove stains, resulting in a brighter, more attractive smile."
        }
      ]
    },
    {
      key: "orthodontic",
      category: "orthodontic",
      content: [
        {
          key: "ortho-braces",
          title: "traditional braces",
          body: "Traditional braces use metal brackets and wires to gradually move teeth into proper alignment, effectively correcting a wide range of dental alignment issues."
        },
        {
          key: "ortho-aligners",
          title: "clear aligners",
          body: "Clear aligners, such as Invisalign, are custom-made, transparent trays that fit over the teeth and gently shift them into place without the need for metal braces."
        }
      ]
    },
    {
      key: "surgery",
      category: "Oral surgery",
      content: [
        {
          key: "surgery-implants",
          title: "Dental implants",
          body: "Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone to support replacement teeth or bridges, providing a permanent solution for missing teeth."
        },
        {
          key: "surgery-molar-extract",
          title: "Third molar extractions",
          body: "Third molar extractions involve the surgical removal of wisdom teeth, which are the last set of molars that can cause overcrowding or other dental issues if not properly aligned."
        },
        {
          key: "surgery-difficult-extract",
          title: "Difficult extractions",
          body: "Difficult extractions refer to the removal of teeth that are impacted, broken, or otherwise challenging to extract, requiring specialized surgical techniques."
        }
      ]
    },
    {
      key: "restorative",
      category: "restorative",
      content: [
        {
          key: "restorative-crowns",
          title: "dental crowns",
          body: "Dental crowns are custom-made caps that cover and restore the shape, size, and strength of damaged teeth, protecting them from further damage while improving appearance."
        },
        {
          key: "restorative-bridges",
          title: "dental bridges",
          body: "Dental bridges consist of one or more artificial teeth anchored by crowns on adjacent natural teeth, effectively filling the gap left by missing teeth."
        },
        {
          key: "restorative-dentures",
          title: "Dentures",
          body: "Dentures are removable appliances that replace missing teeth and surrounding tissues, available as full or partial sets to restore function and aesthetics."
        }
      ]
    },
    {
      key: "emergency",
      category: "emergency",
      content: [
        {
          key: "emergency-same-day",
          title: "Same day emergencies",
          body: "Same day emergency services provide immediate dental care for urgent issues such as severe pain, broken teeth, or infections, ensuring prompt relief and treatment."
        },
        {
          key: "emergency-tooth-jaw-pain",
          title: "tooth pain/jaw pain",
          body: "Emergency treatment for tooth and jaw pain addresses acute discomfort caused by conditions like tooth decay, abscesses, or TMJ disorders, offering timely relief."
        }
      ]
    },
    {
      key: "others",
      category: "others",
      content: [
        {
          key: "others-sedation",
          title: "Sedation",
          body: "Sedation dentistry uses medication to help patients relax during dental procedures, making it suitable for those with dental anxiety or undergoing lengthy treatments."
        }
      ]
    }
    
  ];

  // Sort the content array of each element alphabetically by title
  const sortedServices = [...services].map((category) => {
    category.content.sort((serviceA, serviceB) => {
      const titleA = serviceA.title.toLowerCase();
      const titleB = serviceB.title.toLowerCase();
      return titleA.localeCompare(titleB);
    });
    return category;
  })

  const toggleCategory = (key) => () => {
    if (selectedCategoryKey && key == selectedCategoryKey) {
      setSelectedCategoryKey(null);
    } else {
      setSelectedCategoryKey(key);
    }
  }

  const showContent = (index) => () => {
    if(index == showHeadingContent) {
      setShowHeadingContent(false);
      return
    }
    setShowHeadingContent(index);
  }
  return (
    <>
      <Banner image={bannerImg} />
      <div className="container">
        <section className="services-summary">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <h2 className="text-center">Services</h2>
              <p>
                We offer a full range of treatment and services within the
                practice, ranging from preventative services, to cosmetic
                treatments and skin treatments. We use the latest in dental
                technology, and our chair side monitors and intra-oral cameras
                let you see what the dentist can see. Our digital x-rays allow
                us to reduce radiation, keeping patient safety and well being a
                priority. <u>View our Before & After Gallery</u>
              </p>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="row">
            <div className="col cols-12">
              {sortedServices.map((categoryEl, i) => (
                <div className="service-category" key={i}>
                  <h3
                    className="text-uppercase heading-3 category-title"
                    onClick={toggleCategory(categoryEl.key)}
                  >
                  <FontAwesomeIcon icon={faLocationArrow}
                    className={`rotate-icon ${selectedCategoryKey === categoryEl.key ? "rotated" : ""}`}
                  ></FontAwesomeIcon>
                    {categoryEl.category}
                  </h3>

                  {selectedCategoryKey === categoryEl.key &&
                    categoryEl.content.map((service, j) => (
                      <div className="service" key={j}>
                        
                        <h4 className="text-capitalize heading-4 category-heading">
                          <FontAwesomeIcon 
                            icon={(showHeadingContent == j) ? faCaretDown : faCaretRight} 
                            onClick={showContent(j)} 
                          ></FontAwesomeIcon>
                          {service.title}
                        </h4>
                        {(showHeadingContent == j) && <div className="heading-content">{service.body}</div>}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
