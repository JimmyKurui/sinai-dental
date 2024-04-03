import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  // Map
  // Social links
  // Contact
  return (
    <footer>
      <div className="container-fluid">
        <div className="row py-3 px-sm-5">
          <div className="col-12 col-sm-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7489250284934!2d32.58536265369877!3d0.33793002020242524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbba666177429%3A0x5a1ad88f3a5c5f9a!2sSinai%20Dental%20Practice!5e0!3m2!1sen!2sus!4v1705143839441!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 col-sm-6 ps-5 pl-sm-0">
            <div className="business-info">
              <h3>Sinai Dental</h3>
              <address>
                Office #2, Plot 17, Cooper Road, Kololo (Kisementi)<br />
                <span>Kampala, Uganda</span>
              </address>
              <div className="d-flex">
                <a href="tel:+256(0)776045352" className='me-4'>
                  <FontAwesomeIcon icon={faPhone} /> +256 776 045352
                </a>
                <a href="mailto:sinaident@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> sinaident@gmail.com
                </a>
              </div>
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
