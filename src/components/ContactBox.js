// import { Link } from 'react-router-dom';

function Header() {
  const contacts = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ulisses-roque/',
      image: '...',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/uroque',
      image: '...',
    },
  ];
  return (
    <div className="Header">
      <nav className="navbar">
        {contacts.map((contact) => {
          return (
            <a href={contact.link} target="_blank" rel="noreferrer">
              {' '}
              <img src={contact.image} alt={contact.name}></img>{' '}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
