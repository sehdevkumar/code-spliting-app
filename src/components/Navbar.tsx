import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="bg-gray-100 flex justify-center py-4">
            <Link to='/home' className="mx-4 hover:text-blue-600">Home</Link>
            <Link to='/about' className="mx-4 hover:text-blue-600">About</Link>
            <Link to='/contact' className="mx-4 hover:text-blue-600">Contact</Link>
            <Link to='/faqs' className="mx-4 hover:text-blue-600">FAQs</Link>
        </nav>
    )
}