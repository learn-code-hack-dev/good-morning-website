const navbarFunc = () => {
const header = document.getElementById("header");
const navbarHtmlCode = `
<nav class="nav">
    <div class="logo">
        <a class="nav-heading" href="/">
            <h1>Good Morning</h1>
        </a>
    </div>
    <div>
        <ul class="nav__list" id="nav__link">
            <li class="nav__item">
                <a href="/" class="nav__link">Home</a>
            </li>
            <li class="nav__item">
                <a href="./programs" class="nav__link">Programs</a>
            </li>
            <li class="nav__item">
                <a href="./blogs" class="nav__link">Blogs</a>
            </li>
            <li class="nav__item">
                <a href="./contact" class="nav__link">Contact</a>
            </li>
            <li class="nav__item">
                <a href="./about" class="nav__link">About</a>
            </li>
            <div>
                <button class="btn"><a class="btn-link" href="./programs">Get Started</a></button>
            </div>
        </ul>
    </div>

    <div class="ham__burger" id="ham__burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>

</nav>`;
header.innerHTML = navbarHtmlCode;
};

navbarFunc();

const navlinkToggle = () => {
    const nav__link = document.getElementById('nav__link');
    const ham__burger = document.getElementById('ham__burger');

    ham__burger.addEventListener('click', () => {
        nav__link.classList.toggle('hide');
    });
};

navlinkToggle();