const Banner = ({ image, message, classes = "", children }) => {
  return (
    <>
      {children}
      <div
        className="banner position-relative d-flex justify-content-center align-items-center"
        style={
          image
            ? { backgroundImage: `url(${image?.src})` }
            : { background: "var(--gradient-color-1)" }
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
    </>
  );
};

export default Banner;
