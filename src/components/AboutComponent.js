import './AboutComponent.css';

function AboutComponent() {
  return (
    <main className="about-container">
      <h1>ABOUT</h1>
      <h1>ME</h1>

      <section className="about-me">
        <p>I am a brazilian born and based web developer interested in problem solving</p>
        <p>
          I do work with vanilla <b>JavaScript</b> and <b>ReactJS</b> for front end development
        </p>
        <p>
          I do work with <b>NodeJS</b> and <b>ExpressJS</b> for back end development
        </p>
        <p>
          I do work with <b>MySQL</b> for database management
        </p>
        <p>
          I do work with Test Driven Development using <b>Jest</b>, <b>React Testing Library</b>,{' '}
          <b>Mocha</b>, <b>Chai</b> and <b>Sinon</b>
        </p>
        {/* <p>I am really, really interested in data science and machine learning.</p> */}
        <p>I am available for freelancing or get hired</p>
      </section>
    </main>
  );
}

export default AboutComponent;
