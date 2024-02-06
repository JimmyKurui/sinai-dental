import Banner from "../components/ui/Banner"

const Home = () => {
    return (
    <>
        <Banner bannerMsg='Home'/>
        <div className="call-to-action text-center py-5">
            <p>Book with us online seamlessly for your appointment</p>
            <button className="button bg-info">Book</button>
        </div>
        <section className="services-summary">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2>Services</h2>
                        <p>We use cutting-edge technology in our work to get you the best results while in our care. Our services include: </p>
                        <ul>
                            <li>Cosmetic treatments</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 placeholder"></div>
                </div>
            </div>
        </section>
        <div className="reviews"></div>
        <div className="awards"></div>
        <div className="partners"></div>
    </>
    )
}

export default Home