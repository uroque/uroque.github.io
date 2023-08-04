import { useCallback, useEffect } from 'react';

import './Header.css';

function Header() {
  const options = ['HOME', 'ABOUT', 'PROJECTS', 'BLOG'];

  const handleKeyPress = useCallback((e) => {
    if (e.key.toLowerCase() === 'h') {
      e.preventDefault();
      document.getElementById('home').click();
    }
    
    if (e.key.toLowerCase() === 'a') {
      e.preventDefault();
      document.getElementById('about').click();
    }
    
    if (e.key.toLowerCase() === 'p') {
      e.preventDefault();
      document.getElementById('projects').click();
    }
    
    if (e.key.toLowerCase() === 'b') {
      e.preventDefault();
      document.getElementById('blog').click();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  

  return (
    <header className="Header">
      <nav className="navbar">
        <ul>
          {options.map((option) => {
            return (
              <li>
                <a
                  id={`${option.toLowerCase()}`}
                  className="hover-underline-animation"
                  href={`/${option.toLowerCase().split(' ').join('_')}`}
                >
                  {' '}
                  {option}{' '}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
