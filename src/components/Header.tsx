import {useLocation, Link} from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header className="bg-gray-700 text-white py-4 px-6">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium">SWAPI</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/app/characters"
                                className={`hover:text-gray-400 ${
                                    location.pathname === '/app/characters' ? 'text-gray-400' : ''
                                }`} >Characters</Link>
                        </li>
                        <li>
                            <Link
                                to="/app/planets"
                                className={`hover:text-gray-400 ${
                                    location.pathname === '/app/planets' ? 'text-gray-400' : ''
                                }`}>Planets</Link>
                        </li>
                        <li>
                            <Link
                                to="/app/starships"
                                className={`hover:text-gray-400 ${
                                    location.pathname === '/app/starships' ? 'text-gray-400' : ''
                                }`}>Starships</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;