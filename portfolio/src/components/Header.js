// import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const options = ['ABOUT', 'PROJECTS', 'CONTACT ME', 'BLOG'];
  return (
    <div className="Header">
      <nav className="navbar">
        U.R.
        {options.map((option) => {
          return <a href={`/${option.toLowerCase().split(' ').join('_')}`}> {option} </a>;
        })}
      </nav>
    </div>
  );
}

export default Header;
