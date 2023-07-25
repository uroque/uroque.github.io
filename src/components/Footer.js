import { useCallback, useEffect } from 'react';
import './Footer.css';

function Footer() {
  // const options = [
  //   {
  //     name: 'LinkedIn',
  //     link: 'https://www.linkedin.com/in/ulisses-roque/',
  //   },
  //   {
  //     name: 'GitHub',
  //     link: 'https://github.com/uroque',
  //   },
  // ];

  const handleKeyPress = useCallback((e) => {
    if (e.key.toLowerCase() === 'c') {
      e.preventDefault();
      document.getElementById('contact-me').click();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <footer className='Footer'>
        {/* {options.map((option) => {
          return (
            <a className="hover-underline-animation" target="_blank" rel="noreferrer" href={`${option.link}`}>
              {' '}
              {option.name}{' '}
            </a>
          );
        })} */}
        <a
          id='contact-me'
          className='hover-underline-animation no-pointer'
          href='/contact_me'
        >
          CONTACT ME
        </a>    
      </footer>
    </div>
  );
}

export default Footer;
