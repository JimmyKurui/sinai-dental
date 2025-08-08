"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Banner from "@/components/ui/Banner";
import bannerImg from "@img/office/room2_chair.jpg";
// import bannerImg from "@img/office/room1_01.jpg";
import dentalImg from "@img/illustrations/dental-bridges.jpg";
import BentoGrid from "@/components/ui/BentoGrid";


const Services = () => {

  const selectedCategoryKey = "general";
  const showHeadingContent = true;

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

              <h5 className="text-capitalize">Dental Checkups</h5>
              <p>
                With a general oral examination and x-rays, our dentists are
                able to detect any new cavities , pinpoint any leakages on old
                fillings or notice any new abnormalities in the mouth.
              </p>

              <h5 className="text-capitalize">Dental Cleaning</h5>
              <p>
                Because tartar and stubborn stains are extremely difficult to
                remove with your regular tooth brush, ultrasonic scalers are
                used by our dentist / hygienist to remove plaque, tartar and
                superficial stains that has built-up on the tooth. Sometimes our
                patient may require a deep scaling and this entails going under
                the gum to remove the tartar, this is normally done under
                anaesthesia.
              </p>

              <h5 className="text-capitalize">Digital Radiographs</h5>
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
                attain optimal oral health in a comfortable and professional
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
                condition in a comfortable and relaxed environment.
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
                  Painless exposure of the implant without cutting the gum
                </li>
                <li>Tongue-tie release</li>
                <li>Frenectomy (Frenum release)</li>
              </ol>
            </>
          ),
        },
        {
          key: "root-canal",
          title: "Painless Root Canal Treament",
          body: (
            <>
              <p>
                So what should I expect during a Root Canal procedure? Is the procedure painful? There are common
                misconceptions that root canals cause pain and/or illness and should be avoided at all costs. The exact
                opposite is true. Infact, root canal treatment has saved countless number of teeth and has led to
                restoration of function and aesthetics. Thanks to advances in dentistry, your root canal treatment can be
                done with no discomfort.
              </p>
              <p>
                Getting a root canal is alot like getting a filling except the appointments may be a little longer. The
                procedure involves numbing the gum around the problematic tooth. Once you are fully numb the third
                layer of the tooth called the pulp is accessed and all the infected tissue is carefully removed. A filling
                called gutta percha is then placed thereafter. We use high quality gutta percha and sealer material . After
                your root canal visit, a set of instructions will be given to you.
              </p>
              <p>
                Root canaled teeth are generally more brittle and are therefore susceptible to fractures. In order to
                ensure longevity, a tooth that has been root canaled must be crowned.
              </p>
              <p>
                At sinai dental we ensure that your root canal is done in a calm and relaxed environment. Our dentists
                are availabe should you require emergency dental treatment due to pain.
              </p>
            </>
          )
        },
        {
          key: "dental-anxiety",
          title: "Dental anxiety management",
          body: (
            <>
              <p>
                I have a great fear/ anxiety of dentists and yet I badly need dental intervention.
              </p>
              <p>
                Does the above statement apply to you? How can the team at Sinai dental allay your fears and work with
                you to achieve optimal oral health.
              </p>
              <p>
                At Sinai dental we encourage you to tell us about your fear, we schedule some extra time for the
                appointment, we also employ the TELL, SHOW and DO technique and we offer sedation treatment as
                an option to help alleviate anxiety.
              </p>
              <p>We pledge to support our patients in achieving the best oral health.</p>
            </>
          )
        }
      ]
    },
    {
      key: "cosmetic",
      category: "cosmetic",
      content: [
        {
          key: "composite-bonding",
          title: "Composite bonding (dental bonding)",
          body: (
            <>
              <p>Dental bonding involves applying a tooth-coloured resin material to the affected teeth. This material can
                change the shape, size, or color of the tooth. Dental bonding is commonly used for cosmetic
                improvements to your smile. It can conceal chips or cracks in your teeth, camouflage tooth discoloration,
                close gaps and spaces between teeth, make your teeth appear longer and alter the shape of your teeth
              </p>
              <p>Before dental bonding, your dentist will discuss your cosmetic goals with you. Dental X-rays and an
                examination of your teeth and gums ensure your eligibility for the procedure. During the bonding
                procedure, your dentist selects a shade of composite resin material that matches your natural teeth color.
              </p>
              <p>The same composite resin material used in dental bonding can also be used to fill cavities, replace old
                silver dental fillings with a more cosmetic alternative and protect exposed teeth roots due to gum
                recession.
              </p>
              <p>
                Remember that dental bonding is a versatile and common cosmetic dentistry option, allowing you to
                achieve a more confident smile. Schedule an appointment at Sinai Dental with one of dentists.
              </p>
            </>
          )
        },
        {
          key: "teeth-whitening",
          title: "Teeth whitening",
          body: (
            <>
              <p>
                Tooth whitening, also known as dental bleaching, is a popular cosmetic dental procedure aimed at
                enhancing the appearance of teeth by making them appear whiter and brighter. Tooth whitening primarily
                involves the use of peroxide-based agents to break down stains and discolorations on the tooth surface.
                Our dentists carefully evaluate patients before recommending tooth whitening.
              </p>
              <p>
                The safety and efficacy of peroxides are well-established, but potential complications should be
                considered. Some common side effects include tooth sensitivity and mild gum irritation.
              </p>
              <h5>Types of Tooth Whitening:</h5>
              <h5>At-Home Tooth Bleaching:</h5>
              <p>Patients use custom-made trays filled with a low concentration of peroxide gel.This method allows
                gradual whitening over several weeks.
              </p>
              <h5>In-Office Whitening:</h5>
              <p>Performed by dental professionals .High-concentration peroxide gels are applied directly to the teeth and
                results are achieved in a single session.
              </p>
            </>
          )
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
          body: (
            <>
              <p>Traditional braces, also known as metal braces, have been a reliable and effective orthodontic treatment
                for decades. Traditional metal braces are durable and can withstand the forces required to move teeth
                into proper alignment.They are also cost-effective compared to some other orthodontic options and are
                versatile in treating Complex Cases:
              </p>
              <p>
                Metal brackets are bonded to the teeth. An archwire connects the brackets, applying gentle pressure to
                guide teeth into their desired positions. Regular adjustments by the dentist ensures progress throughout
                the treatment.
              </p>
              <p>
                Remember that traditional braces remain a trusted choice for achieving a beautifully aligned smile. At
                sinai dental each patient’s treatment plan is tailored to their unique needs so please reach out to us for
                any specific concerns or questions for personalized advice.
              </p>
            </>
          )
        },
        {
          key: "ortho-aligners",
          title: "clear aligners",
          body: (
            <>
              <p>
                Clear aligners refers to a series of clear dental appliances custom-formed to the shape of a patient’s
                teeth. These clear aligners gradually improve both appearance and function by applying gentle,
                consistent pressure to the teeth. Clear aligners are less noticeable than traditional braces and are more
                convenient as patients can remove aligners for eating, brushing, and special occasions.
              </p>
              <p>
                Clear aligners can achieve many tooth movements, but some cases may still be better suited for
                traditional braces or a combination of techniques. Our dentists assess each patient’s unique
                requirements to determine the most suitable treatment plan.
              </p>
              <p>
                Consult with your dentist at Sinai Dental to explore whether Clear aligners is the right choice for you.
              </p>
            </>
          )
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
          body: (
            <>
              <p>
                Dental implants serve as artificial tooth roots made of biocompatible materials, typically titanium. They
                basically hold dental crowns, bridges and dentures in place.Dental implants are a wonderful way to keep
                your smile intact. They provide support for your facial muscles and they prevent bone loss by stimulating
                the jaw bone. Normally your jaw bone will deteriorate with missing teeth, however, dental implants can
                prevent that deterioration.
              </p>
              <p>
                During the implant process, the implant is carefully positioned in the jawbone during a minor surgical
                procedure which typically lasts 1 to 2 hours. Over time (approximately 3 to 6 months) the implant fuses
                with the bone, creating a strong bond. An abutment (connector) is attached to the implant.A custom-
                made crown (artificial tooth) is then secured to the abutment. Implant placement is usually painless as its
                done under local anesthesia and the healing time varies but most patients resume normal activities
                quickly.
              </p>
              <p>
                Implants look, feel, and function like natural teeth and with proper care, implants can last a lifetime.
                Enjoy your favorite foods without restrictions.
              </p>
              <p>
                At Sinai dental our skilled dentist will assess your suitability for implants. Following this assessment all
                processes involved in implant treatment will be discussed with you so you can make an informed choice.
                Remember implants provide you with the best alternative to a healthy mouth when teeth are missing.
              </p>
            </>
          )
        },
        {
          key: "surgery-molar-extract",
          title: "Third molar extractions",
          body: (
            <>
              <p>
                Third molar extractions, commonly known as wisdom teeth removal, are a frequent procedure in
                dentistry. Mandibular third molars (also called lower wisdom teeth) are the most frequently extracted
                teeth. These molars typically develop between the ages of 8 to 15 and erupt between 17 to 22 years old.
                Due to their delayed eruption, mandibular third molars are often impacted.
              </p>
              <p>
                Removal of wisdom teeth is a delicate procedure because of their proximity to the nerves which supply
                feeling to the lips, cheeks and tongue. The close proximity of mandibular third molars to the nerve poses
                a risk of nerve damage during extraction. Quantifying this risk by carefully assessing the tooth and taking
                radiographs is therefore important.
              </p>
              <p>
                When it is necessary to remove your tooth for your overall health, our dentists at Sinai keep your comfort
                in mind.
              </p>
            </>
          )
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
          body: (
            <>
              <p>
                A dental crown is a tooth-shaped cap that replaces your natural tooth above the gum line.It serves
                various purposes, including strengthening weak teeth, improving aesthetics, and restoring
                function.Getting a dental crown typically involves two visits:
              </p>
              <p>
                Your first visit involves numbing the neighbouring teeth and gum area around the tooth receiving the
                crown. Removing any old restorations or decay from the tooth and thereafter reshaping the tooth to
                prepare it for the crown. We then digitally scan your tooth and send it to a lab for your permanent crown
                to be made. We place a temporary crown and ask you to come in for a second visit where we fit the
                permanent crown.
              </p>
              <p>
                There are different types of crowns including ceramic crowns, gold crowns, porcelain fused to metal
                crowns and stainless steel crowns.
              </p>
              <p>Our dentists at Sinai are happy to discuss and recommend a crown type specific to your needs.</p>
            </>
          )
        },
        {
          key: "restorative-bridges",
          title: "dental bridges",
          body: (
            <>
              <Image src={dentalImg} alt="dental bridges illustration" className="img-fluid" width={300} />
              <p>
                Dental bridges replace missing teeth by connecting an artificial tooth or teeth to neighboring teeth. They
                restore form , function and aesthetics. Teeth naturally support our facial muscles and when we have
                missing teeth, our facial muscles appear sunken and can give us a tired look. One of the options
                available to replace missing teeth are bridges.
              </p>
              <p>
                The placement of bridges involves multiple visits. During your initial consultation with your dentist, your
                oral health will be evaluated and the most suitable type of bridge will be recommended based on different
                factors such as location of the missing teeth and condition of adjacent teeth and gums. Your subsequent
                visit will involve preparing the teeth, the prepared teeth will be digitally scanned and sent to our lab. Once
                your bridge is ready it will be placed and minor adjacements made for proper fit.
              </p>
              <p>
                Dental bridges offer numerous benefits beyond filling the gaps caused by missing teeth. They restore
                your ability to chew and speak properly, maintain the shape of your face, and prevent the surrounding
                teeth from shifting out of position. Dental bridges also enhance your smile, boosting self-confidence and
                oral health.
              </p>
              <p>Remember to consult our trusted dentists for your personalised treatment options.</p>
            </>
          )
        },
        {
          key: "restorative-dentures",
          title: "Dentures",
          body: (
            <>
              <p>
                Dental dentures are removable prosthetic devices that replace missing teeth and surrounding tissues.
                Missing teeth affect not just your appearance but also your ability to chew food properly. Properly chewed
                food allows your body to easily extract a large amount of nutrients it needs to sustain a healthy body and
                mind.
              </p>
              <p>
                Dentures will restore your ability to grind your food so your body does not need to work too hard to
                absorb nutrients. They will also restore your vibrant smile and your youthfull appearance by supporting
                your facial muscles.
              </p>

              <p><em>Partial Dentures</em></p>
              <p>
                Partial dentures like complete dentures are removable prothesis designed to replace missing teeth .
                These are recommended by your dentist if you are not a candidate for a bridge or implants and just lke
                the complete dentures, they restore your dazzling smile and allow you to chew your food properly and
                thoroughly.
              </p>
              <p>
                The dentists at Sinai provide excellent consultation and will present available options for replacing your
                missing teeth. Our unwavering commitment is to your oral health and your overall well being.
              </p>
            </>
          )
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
          body: (
            <>
              <p>
                Dental emergencies require prompt attention to prevent complications and alleviate pain. Whether its a
                chipped tooth, knocked out tooth, broken jaw, loose artificial tooth, Bleeding, swollen jaw, all these can
                cause excruciating pain.
              </p>
              <p>
                We understand that you need to see a dentist urgently and therefore encourage you to call Sinai for
                appropriate care for your emergency. We handle your emergency with compassion and skill.
              </p>
            </>
          )
        }
      ]
    }
  ];


  const toggleCategory = (key) => () => {
    if (selectedCategoryKey && key == selectedCategoryKey) {
      setSelectedCategoryKey(null);
    } else {
      setSelectedCategoryKey(key);
    }
  }

  const showContent = (index) => () => {
    if (index == showHeadingContent) {
      setShowHeadingContent(false);
      return
    }
    setShowHeadingContent(index);
  }
  return (
    <>
      <Banner image={bannerImg} message={'Services'} />
      <div className="container-fluid container-md">
        <section className="services-summary">
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
                To see the transformative results of our care, explore our
                <u className="position-relative px-2">
                  <strong>
                    View our Before & After Gallery
                    <small style={{ fontWeight: 300 }} className="position-absolute top-0 right-0 badge rounded-pill bg-secondary">Coming Soon</small>
                  </strong>
                </u>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <section className="services">
          <div className="row justify-content-center">
            <div className="cols-12 col-md-10">
              {services.map((categoryEl, i) => (
                <div className={`service-category ${selectedCategoryKey ? '' : 'ms-5'}`} key={i}>
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

                        <h4 className="text-capitalize heading-4 service-heading" onClick={showContent(j)} >
                          <FontAwesomeIcon
                            icon={(showHeadingContent == j) ? faCaretDown : faCaretRight}
                          ></FontAwesomeIcon>
                          {service.title}
                        </h4>
                        {(showHeadingContent == j) && <div className="service-content">{service.body}</div>}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </section> */}

      <section id="services">
        {/* <div className="container-fluid">
          <div className="row row-cols-lg-3 bento-grid">

            <div className="col-12 col-md bg-info bento-col">
              <div className="row flex-column h-100">
                <div className="col-12"><figure>
                  <img
                    src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                    alt="" srcset=""
                    className="img-fluid"
                  />
                  <figcaption>
                    <h3>Cosmetic</h3>
                    <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                  </figcaption>
                </figure>
                </div>
                <div className="col-12"><figure>
                  <img
                    src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                    alt="" srcset=""
                    className="img-fluid"
                  />
                  <figcaption>
                    <h3>Cosmetic</h3>
                    <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                  </figcaption>
                </figure>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg bg-warning bento-col flex-nowrap">
              <div className="row h-100">
                <div className="col-12 flex-third">
                  <div className="row">
                    <div className="col-8">
                      <figure>
                        <img
                          src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                          alt="" srcset=""
                          className="img-fluid"
                        />
                        <figcaption>
                          <h3>Cosmetic</h3>
                          <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-4">
                      <figure>
                        <img
                          src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                          alt="" srcset=""
                          className="img-fluid"
                        />
                        <figcaption>
                          <h3>Cosmetic</h3>
                          <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                        </figcaption>
                      </figure></div>
                  </div>
                </div>
                <div className="col-12 flex-half">
                  <div className="row">
                    <div className="col-12">
                      <figure>
                        <img
                          src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                          alt="" srcset=""
                          className="img-fluid"
                        />
                        <figcaption>
                          <h3>Cosmetic</h3>
                          <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                        </figcaption>
                      </figure></div>
                  </div>
                </div>
                <div className="col-12 flex-sixth">
                  <div className="row h-100">
                    <div className="col-3">
                      <figure>
                        <img
                          src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                          alt="" srcset=""
                          className="img-fluid"
                        />
                        <caption>
                          <h3>Cosmetic</h3>
                          <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                        </caption>
                      </figure>
                    </div>
                    <div className="col-6">
                      <figure>
                        <img
                          src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                          alt="" srcset=""
                          className="img-fluid"
                        />
                        <caption>
                          <h3>Cosmetic</h3>
                          <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                        </caption>
                      </figure>
                    </div>
                    <div className="col-3">
                      <figure>
                        <img
                          src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                          alt="" srcset=""
                          className="img-fluid"
                        />
                        <caption>
                          <h3>Cosmetic</h3>
                          <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                        </caption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col bg-secondary bento-col">
              <div className="row h-100">
                <div className="col-6 col-lg-12">
                  <figure>
                    <img
                      src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                      alt="" srcset=""
                      className="img-fluid"
                    />
                    <caption>
                      <h3>Cosmetic</h3>
                      <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                    </caption>
                  </figure>
                </div>
                <div className="col-6 col-lg-12">
                  <figure>
                    <img
                      src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                      alt="" srcset=""
                      className="img-fluid"
                    />
                    <caption>
                      <h3>Cosmetic</h3>
                      <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                    </caption>
                  </figure>
                </div>
                <div className="col-12 col-lg-12">
                  <figure>
                    <img
                      src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
                      alt="" srcset=""
                      className="img-fluid"
                    />
                    <caption>
                      <h3>Cosmetic</h3>
                      <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
                    </caption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <BentoGrid />
      </section >
    </>
  );
};

export default Services;
