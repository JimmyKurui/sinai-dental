const Banner = ({bannerSrc, bannerMsg}) => {
    return (
        <section>
            <div className="banner d-flex justify-content-center align-items-center" >
                <div className="banner-heading">{ bannerMsg }</div>
            </div>
        </section>
    )
}

export default Banner