function Footer() {
  const options = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ulisses-roque/',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/uroque',
    },
  ];
  return (
    <div className="Footer">
      <footer className="Footer">
        {options.map((option) => {
          return <a href={`${option.link}`}> {option.name} </a>;
        })}
      </footer>
    </div>
  );
}

export default Footer;
