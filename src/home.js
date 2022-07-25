function loadHome() {
    const middle = document.querySelector('#middle');
    middle.replaceChildren();

    const home = document.createElement('div');
    home['id'] = 'home'
    middle.appendChild(home);

    const img = document.createElement('img');
    img.src = 'TOP.png';
    home.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome to TOP restaurant!';
    home.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
            culpa qui officia deserunt mollit anim id est laborum.';
    home.appendChild(p);
}

export default loadHome;