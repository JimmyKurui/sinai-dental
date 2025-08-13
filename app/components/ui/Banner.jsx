const Banner = ({ image, message, classes = "", children }) => {
  return (
    <div className="banner">
      {children}
      <div
        className={`image-wrapper ${image ? '' : 'colored-box'}  d-flex justify-content-center align-items-center`}
        style={
          image
            ? { backgroundImage: `url(${image?.src})` }
            : { }
        }
      >
        {message && (
          <h1 className={`banner-message ${classes}`}>
            <span className="message-slot">
              {message.split("").map((char, index) => (
                <span key={index} className={`char char-${index}`}>
                  {char}
                </span>
              ))}
            </span>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Banner;
