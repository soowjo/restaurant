function loadMenu() {
    const middle = document.querySelector('#middle');
    middle.replaceChildren();

    const menu = document.createElement('div');
    menu['id'] = 'menu';
    middle.appendChild(menu);

    menu.appendChild(addMenuItem('HTML','The quick brown fox jumps over the lazy dog', '$0'));
    menu.appendChild(addMenuItem('CSS', 'The quick brown fox jumps over the lazy dog', '$0'));
    menu.appendChild(addMenuItem('JS', 'The quick brown fox jumps over the lazy dog', '$0'));
}

function addMenuItem(name, description, price) {
    const menuItem = document.createElement('div');
    menuItem.classList = 'menuItem';
    const menuImg = document.createElement('img');
    menuImg.src = `${name}.png`;
    menuItem.appendChild(menuImg);
    const menuName = document.createElement('h3');
    menuName.textContent = name;
    menuItem.appendChild(menuName);
    const menuDesc = document.createElement('p');
    menuDesc.textContent = description;
    menuItem.appendChild(menuDesc);
    const menuPrice = document.createElement('h4');
    menuPrice.textContent = price;
    menuItem.appendChild(menuPrice);
    return menuItem;
}

export default loadMenu;