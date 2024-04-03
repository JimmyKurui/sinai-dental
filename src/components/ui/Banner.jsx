const Banner = ({bannerImage, message}) => {
    return (
        <div className="banner d-flex justify-content-center align-items-center" 
            style={bannerImage 
                ? {backgroundImage: bannerImage} 
                : {background: 'var(--gradient-color-1)'}} >
            <div className="banner-message">{ message } Banner</div>
        </div>
    )
}

export default Banner