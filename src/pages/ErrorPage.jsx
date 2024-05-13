import { Link } from 'react-router-dom';
import notFound from '../assets/logo/notFound.svg'

const ErrorPage = () => {
    return (
       <Link to='/' className="min-h-screen flex items-center justify-center">
        <img className='w-1/4' src={notFound} alt={notFound} />
       </Link>
    );
};

export default ErrorPage;