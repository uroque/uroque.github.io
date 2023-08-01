import './HamburguerMenu.css';

function HamburguerMenu() {
  return (
    <div className="hamburguer-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li>
          <a class="menu__item" href="/">
            home
          </a>
        </li>
        <li>
          <a class="menu__item" href="/about">
            about
          </a>
        </li>
        <li>
          <a class="menu__item" href="/projects">
            projects
          </a>
        </li>
        <li>
          <a class="menu__item" href="/contact_me">
            blog
          </a>
        </li>
        <li>
          <a class="menu__item" href="/contact_me">
            contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HamburguerMenu;
