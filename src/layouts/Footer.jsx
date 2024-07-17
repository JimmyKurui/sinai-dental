import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  // Map
  // Social links
  // Contact
  return (
    <footer>
      <div className="container-fluid container-md-fluid">
        <div className="row py-3 px-sm-5 g-3 g-md-0">
          <div className="col-12 col-sm-2"></div>
          <div className="col-12 col-sm-4 contact-hours">
            <h5 className="mb-3">Contact Hours</h5>
            <div><span><strong>Monday</strong></span><span>- 8:30 A.M - 5.00 P.M</span></div>
            <div><span><strong>Tuesday</strong></span><span>- 8:30 A.M - 5.00 P.M</span></div>
            <div><span><strong>Wednesday</strong></span><span>- 8:30 A.M - 5.00 P.M</span></div>
            <div><span><strong>Friday</strong></span><span>- 8:30 A.M - 5.00 P.M</span></div>
            <div><span><strong>Saturday</strong></span><span>- 8:30 A.M - 5.00 P.M</span></div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="business-info">
              <h3>Sinai Dental</h3>
              <address>
                Office #2, Plot 17, Cooper Road, Kololo (Kisementi)<br />
                <span>Kampala, Uganda</span>
              </address>
              <div className="d-flex">
                  <FontAwesomeIcon icon={faPhone} /> 
                  <a href="tel:+256(0)776045352">+256 776 045 352</a>/
                  <a href="tel:+256(0)758601110">+256 758 601 110</a>
              </div>
                  <a href="mailto:sinaident@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> sinaident@gmail.com
                  </a>
            </div>
            <div className="col-12">
              <div className="socials mt-4 ">
                <a href="https://www.facebook.com/sinaidental" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="lg" className="me-4" />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="lg" className="me-4" />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="lg" className="me-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 author text-center mt-3">
            <kbd><i>Created By: Jimmy Chepkurui {new Date().getFullYear()}</i></kbd>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
