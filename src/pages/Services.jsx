import { Tab, Tabs, Row, Col, Nav } from "react-bootstrap";
import htmlParser from 'html-react-parser';
// import Tabs from 'react-bootstrap/Tabs';
import Banner from "../components/ui/Banner";

const Services = () => {
  const services = [
    {
      key: "general",
      category: "general",
      content: [
        {
          key: "generals",
          title: "General examination and radiographs",
          body: <>
            <p>When you schedule an appointment at Sinai Dental and come in for you first visit, our experienced dentists will perform a thorough assessment of your oral health and may require any number of x-rays especially if you need extensive dental treatment.</p>
            <p>At Sinai  we keep abreast of the latest technologies to aid with a fast, comfortable and seamless delivery of diagnosis and subsequent treatment so don&apos;t hesistate to get in touch with us</p>
            </>,
        },
        {
          key: "dental-cleaning",
          title: "Dental cleaning",
          body: <>
            <p>Even when we brush our teeth regularly, some areas that we can&apos;t reach properly get build-up (calculus/ tartar). The more build-up we get, the more the gum around the build-up gets inflammed. inflammation can lead to bleeding gums, bone loss around a tooth and eventually mobile/loose teeth which can fall-out if you don&apos;t receive any kind of intervention.</p>
            <p>We also use the scheduled cleaning appointments to do checkups, While we check your teeth and gums we look out for any early signs of other pathologies e. g cancer. These checkups therefore ensure that any small problems if present don&apos;t become big problems that require extensive and expensive treatment.</p>
            <p>Our professional team of dentists and hygienists will guide you through your cleaning regimen with a gentle hand.</p>
          </>,
        },
        {
          key: "preventative",
          title: "Preventive and Family dentistry",
          body: <>
          <p>&quot; Prevention is better than cure &quot; - this proverb is true in regards to your oral health. At Sinai Dental we emphasize the importance of incorporating good oral hygiene practices in your daily routine as we believe this will eventually lead to a happier and more fulfilling life. These inexpensive proactive measures help maintain healthy gums and teeth.</p>
          
          <h5 className="text-capitalize">Dental checkups</h5>
          <p>With a general oral examination and x-rays, our dentists are able to detect any new cavities , pinpoint any leakages on old fillings or notice any new abnormalities in the mouth.</p>
          
          <h5 className="text-capitalize">dental cleaning</h5>
          <p>Because tartar and stubborn stains are extremely difficult to remove with your regular tooth brush, ultrasonic scalers are used by our dentist / hygienist to remove plaque, tartar and superficial stains that has built-up on the tooth. Sometimes our patient may require a deep scaling and this entails going under the gum to remove the tartar, this is normally done under anaesthesia.</p>
          
          <h5 className="text-capitalize">digital radiographs</h5>
          <p>Dental digital radiographs use 80% to 90% less radiation compared to the traditional radiographs and so they are safer and produce an enhanced image of your teeth , gums  and any surrounding structures.</p>
          
          <h5 className="text-capitalize">Fluoride</h5>
          <p>Demineralisation of teeth can be detected early during your bi-annual checkup and fortunately it can be reversed through remineralisation. fluoride gels in moderation can be used to help remineralise teeth.</p>  
          
          <h5 className="text-capitalize">Tooth grinding/ bruxism</h5>
          <p>Tooth grinding (bruxism) means ginding / gnashing teeth usually unconciously especially at night and one of the causes is stress. Bruxism can lead to chipping of teeth, un- natural wear and tear of teeth and cracked fillings. Early detection can lead to early intervention.</p>
          </>,
        },
        {
          key: "fissure",
          title: "fissure sealants and fluoride",
          body: <>
          <h5 className="text-capitalize">Sealants</h5>
          <p>Fissure sealants are coatings that are applied to the grooves at the back of your teeth to prevent cavities. Children in particular benefit alot from sealants.  Children&apos;s new teeth have deep grooves that encourgage food impaction and your child may not be very ardent at brushing his/her teeth. In order to prevent cavities from developing in these areas we place sealants.</p>
          <p>At Sinai dental , we are committed to ensuring that our patients attain optimal oral health in a confortable and professional environment</p>
          
          <h5 className="text-capitalize">Fluoride</h5>
          <p>Did you know plaque has bacteria that produces acid that sap important minerals from your teeth? This process, known as demineralization, can negatively impact your oral health by making you more susceptible to cavities.</p>
          <p>Fluoride is a cavity fighter that aids in making our teeth stronger through a process known as remineralization.</p>
          <p>At Sinai Dental, we recommend fluoride in moderation as a preventative measure to ensure your teeth remain healthy.</p>
          </>,
        },
        {
          key: "night-guards",
          title: "Night guards/ splints for teeth grinding",
          body: <>
          <p>Tooth grinding (bruxism) means ginding / gnashing teeth usually unconciously especially at night and one of the causes is stress. Bruxism can lead to chipping of teeth, un- natural wear and tear of teeth and cracked fillings. Early detection can lead to early intervention.</p>
          <p>After a thorough assessment, our dentists at Sinai Dental may recommend a custom made night guard/splints  together with other interventions to alleviate symptoms caused by bruxism.</p>
          <p>Our team at Sinai Dental  endeavours to give you all the information including solutions that you require about your condition in a comfortable and relaxed environment. </p>
          </>,
        },
        {
          key: "halitosis",
          title: "Halitosis treatment",
          body: <>
          <p>Halitosis is an oral condition where the main symptom is bad breath. Halitosis decreases self esteem, makes you isolated and lowers your dignity. How common is halitosis? Halitosis is a widespread condition, affecting approximately 1 out of 4 people around the globe. One research study, which combined the findings of 13 medical journal articles, found that halitosis affects about 31.8% of the population.</p>
          <p>Identifying the source of the bad breath is the first step in it&apos;s management. Some of the common causes of halistosis are poor oral hygiene, infections of the gum and accumulation of proteins at the back of the tongue. We provide you with the knowledge that you require to keep your breath pleasant</p>
          <p>Visit our expert dentists at your conveniece from Monday to Friday 8am to 5pm  and Saturday at 8am to 2pm.</p>
          </>,
        },
        {
          key: "laser",
          title: "Laser dentistry",
          body: <>
          <p>Our advanced laser technology offers a pain free, minimally invasive alternative to traditional procedures. Laser dentistry is comfortable, ensures faster healing and is accurate. some of the treatments done with a laser include:</p>
          <ol>
            <li>Crown lengthening without cutting the gum with a scapel</li>
            <li>Gum reshaping following traditional braces  and in gummy smiles</li>
            <li>Painless exposure of the implant without cutting the gum </li>
            <li>Tongue-tie release</li>
            <li>Frenectomy (Frenum release)</li>
          </ol>   
          </>,
        },
        {
          key: "root-canal",
          title: "Painless Root Canal Treament",
          body: "This is what we provide for this service B",
        },
        {
          key: "dental-anxiety",
          title: "Dental anxiety management",
          body: "This is what we provide for this service B",
        },
        {
          key: "chipped",
          title: "chipped tooth",
          body: "This is what we provide for this service B",
        },
      ],
    },
    {
      key: "cosmetic",
      title: "cosmetic",
      content: [
        {
          key: "cosmetic-veneers",
          title: "veneers",
          body: "This is what we provide for this service 2",
        },
        {
          key: "cosmetic-fillings",
          title: "Tooth coloured fillings ( dental bonding)",
          body: "This is what we provide for this service 2",
        },
        {
          key: "cosmetic-whitening",
          title: "Teeth whitening",
          body: "This is what we provide for this service 2",
        },
      ],
    },
    {
      key: "orthodontic",
      category: "orthodontic",
      content: [
        {
          key: "ortho-braces",
          title: "traditional braces",
          body: "This is what we provide for this service 2",
        },
        {
          key: "ortho-aligners",
          title: "clear aligners",
          body: "This is what we provide for this service 2",
        },
      ],
    },
    {
      key: "surgery",
      category: "Oral surgery",
      content: [
        {
          key: "surgery-implants",
          title: "Dental implants",
          body: "This is what we provide for this service 2",
        },
        {
          key: "surgery-molar-extract",
          title: "Third molar extractions",
          body: "This is what we provide for this service 2",
        },
        {
          key: "surgery-difficult-extract",
          title: "Difficult extractions",
          body: "This is what we provide for this service 2",
        },
      ],
    },
    {
      key: "restorative",
      category: "restorative",
      content: [
        {
          key: "restorative-crowns",
          title: "dental crowns",
          body: "This is what we provide for this service 2",
        },
        {
          key: "restorative-bridges",
          title: "dental bridges",
          body: "This is what we provide for this service 2",
        },
        {
          key: "restorative-dentures",
          title: "Dentures",
          body: "This is what we provide for this service 2",
        },
      ],
    },
    {
      key: "emergency",
      category: "emergency",
      content: [
        {
          key: "emergency-same-day",
          title: "Same day emergencies",
          body: "This is what we provide for this service 2",
        },
        {
          key: "emergency-tooth-jaw-pain",
          title: "tooth pain/jaw pain",
          body: "This is what we provide for this service 2",
        },
      ],
    },
    {
      key: "others",
      category: "others",
      content: [
        {
          key: "others-sedation",
          title: "Sedation",
          body: "This is what we provide for this service 2",
        },
      ],
    },
  ];

  // Sort the content array of each element alphabetically by title
  const sortedServices = services;
    sortedServices.forEach(category => {
      category.content.sort((serviceA, serviceB) => {
        const titleA = serviceA.title.toLowerCase();
        const titleB = serviceB.title.toLowerCase();
        return titleA.localeCompare(titleB);
      });
  });


  return (
    <>
      <Banner message="Services" />
      <section className="services-summary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <h2 className="text-center">Services</h2>
              <p>
                We offer a full range of treatment and services within the
                practice, ranging from preventative services, to cosmetic
                treatments and skin treatments. We use the latest in dental
                technology, and our chair side monitors and intra-oral cameras
                let you see what the dentist can see. Our digital x-rays allow
                us to reduce radiation, keeping patient safety and well being a
                priority. View our Before & After Gallery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col cols-12">
              <Tabs
                defaultActiveKey={sortedServices[0].key}
                id="service-category-tab"
                className="mb-3"
                
              >
                {sortedServices.map((serviceSection) => (
                  <Tab
                    key={serviceSection.key}
                    eventKey={serviceSection.key}
                    title={serviceSection.category}
                    className="text-captialize"
                  >
                    <Tab.Container
                      id={`services-sub-category-${serviceSection.key}`}
                      defaultActiveKey={serviceSection.content[0].key}
                    >
                      <Row>

                        <Col sm={3}>
                          <Nav variant="pills" className="flex-column">
                            {serviceSection.content.map((service) => (
                              <Nav.Item key={service.key}>
                                <Nav.Link eventKey={service.key} className="text-capitalize">
                                  {service.title}
                                </Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>
                        </Col>

                        <Col sm={9}>
                          <Tab.Content>
                            {serviceSection.content.map((service) => (
                              <Tab.Pane
                                eventKey={service.key}
                                key={service.key}
                              >
                                {(service.body)}
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </Col>

                      </Row>
                    </Tab.Container>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
