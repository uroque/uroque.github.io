function Header() {
  const options = ['ABOUT', 'PROJECTS', 'CONTACT ME'];
  return (
    <div className="Header">
      <nav className="navbar">
        {options.map((option) => {
          return (
            <a
              className="hover-underline-animation"
              href={`/${option.toLowerCase().split(' ').join('_')}`}
            >
              {' '}
              {option}{' '}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
