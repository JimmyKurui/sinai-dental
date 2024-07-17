const Banner = ({ image, message }) => {
  const isLandingPage = window.location.pathname == '/';

  return (
      <div className="banner d-flex justify-content-center align-items-center"
      style={image ? {backgroundImage: `url(${image})`} : { background: "var(--gradient-color-1)" }}
      >
        {message && <div className={`banner-message ${isLandingPage? 'animated': ''}`}>
          <span className="message-slot">
            {message.split("").map((char, index) => (
              <span key={index} className={`char char-${index}`}>
                {char}
              </span>
            ))}
          </span>
        </div>}
    </div>
  );
};

export default Banner;
