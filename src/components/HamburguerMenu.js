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
            Home
          </a>
        </li>
        <li>
          <a class="menu__item" href="/about">
            About
          </a>
        </li>
        <li>
          <a class="menu__item" href="/projects">
            Projects
          </a>
        </li>
        <li>
          <a class="menu__item" href="/contact_me">
            Blog
          </a>
        </li>
        <li>
          <a class="menu__item" href="/contact_me">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HamburguerMenu;
