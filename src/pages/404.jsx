import { Link } from 'react-router-dom';
import searchImage from '@img/illustrations/not-found.png';
import { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        document.title = 'Not Found | Sinai Dental';
      }, [])
      return (
        <div className="wrapper">
            <div className="px-5 py-2">
                <img src={searchImage} alt="Not found 404" className="not-found" />
                <h3 style={{transform: 'translateY(-100%)', color: '#4682b4'}}>Sorry, we can&apos;t find that page our side</h3>
                <Link to='/'>Navigate back home</Link>
            </div>
        </div>
    )
}

export default NotFound