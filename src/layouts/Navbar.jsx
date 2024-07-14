import {Link} from 'react-router-dom'
import Logo from '@img/sinai-dental-logo.jpg'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid container-md-fluid">
                    <div className="navbar-brand" >
                        <Link to="/">
                            <img src={Logo} alt="Sinai Dental Logo" className='logo' />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/team" className="nav-link">Team</Link>
                            <Link to="/services" className="nav-link">Services</Link>
                            <Link to="/faqs" className="nav-link">FAQs</Link>
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar