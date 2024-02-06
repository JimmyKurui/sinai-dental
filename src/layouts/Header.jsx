const Header = () => {
    // Map
    // Social links
    // Contact
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="" alt="Sinai Dental Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#">Team</a>
                            <a className="nav-link" href="#">Services</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header