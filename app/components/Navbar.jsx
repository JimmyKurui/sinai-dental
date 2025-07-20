import Link from 'next/link';
import Image from 'next/image';
import Logo from '@img/sinai-dental-logo.jpg';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid container-md-fluid">
                    <div className="navbar-brand" >
                        <Link href="/">
                            <Image src={Logo} alt="Sinai Dental Practice Logo" className='logo' />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link href="/" className="nav-link">Home</Link>
                            <Link href="/team" className="nav-link">Team</Link>
                            <Link href="/services" className="nav-link">Services</Link>
                            <Link href="/faq" className="nav-link">FAQs</Link>
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar