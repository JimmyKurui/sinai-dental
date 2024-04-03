import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="src\assets\img\sinai-dental-logo.jp" alt="Sinai Dental Logo" width="10%" />
                        {/* Sinai Dental */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/team" className="nav-link">Team</Link>
                            <Link to="/services" className="nav-link">Services</Link>
                            <Link to="/faq" className="nav-link">FAQ</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar