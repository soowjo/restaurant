import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function initialize () {
    const content = document.querySelector('#content');
    
    const top = document.createElement('div');
    top['id'] = 'top';
    content.appendChild(top);
    
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "TOP Restaurant";
    top.appendChild(restaurantName);
    
    const naviBar = document.createElement('div')
    naviBar['id'] = 'naviBar';
    top.appendChild(naviBar);

    const homeTop = document.createElement('h3');
    homeTop.textContent = "Home";
    homeTop.addEventListener('click',loadHome);
    naviBar.appendChild(homeTop);

    const menuTop = document.createElement('h3');
    menuTop.textContent = "Menu";
    menuTop.addEventListener('click',loadMenu);
    naviBar.appendChild(menuTop);

    const contactTop = document.createElement('h3');
    contactTop.textContent = "Contact";
    contactTop.addEventListener('click',loadContact);
    naviBar.appendChild(contactTop);

    const middle = document.createElement('div');
    middle['id'] = 'middle';
    content.append(middle);

    const bottom = document.createElement('div')
    bottom['id'] = 'bottom';
    content.appendChild(bottom);

    const pageInfo = document.createElement('h2');
    pageInfo.textContent = "Listed price valid as of 00/00/0000";
    bottom.appendChild(pageInfo);

    loadHome();
}

initialize();

