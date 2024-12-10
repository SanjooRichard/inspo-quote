import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <div className="inspo-quote" style={{ fontSize: '30px' }}>
            Page Not Found! <Link to={'/'}>Go Back</Link>
        </div>
    );
};
