const Banner = ({ image, message }) => {
  return (

        <div className="banner d-flex justify-content-center align-items-center"
        style={image ? {backgroundImage: `url(${image})`} : { background: "var(--gradient-color-1)" }}
        >
          <div className="banner-message">{message} Banner</div>
        </div>
  );
};

export default Banner;
