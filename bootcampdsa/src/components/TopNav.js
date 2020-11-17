import '../App.css';
import { Link } from 'react-router-dom';

function TopNav() {
  const navStyle = {
    color:'white'
  };
  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to='/about'>
              <li>About</li>
            </Link>
            <Link style={navStyle} to='/learn'>
              <li>Learn</li>
            </Link>
        </ul>
    </nav>
  );
}

export default TopNav;