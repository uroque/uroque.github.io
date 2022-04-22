// import { Link } from 'react-router-dom';

function Header() {
  const options = ['ABOUT', 'PROJECTS', 'CONTACT ME'];
  return (
    <div className="Header">
      <nav className="navbar">
        {options.map((option) => {
          return <a href={`/${option.toLowerCase().split(' ').join('_')}`}> {option} </a>;
        })}
      </nav>
    </div>
  );
}

export default Header;
