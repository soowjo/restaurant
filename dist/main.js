(()=>{"use strict";const e=function(){const e=document.querySelector("#middle");e.replaceChildren();const t=document.createElement("div");t.id="home",e.appendChild(t);const n=document.createElement("img");n.src="TOP.png",t.appendChild(n);const d=document.createElement("h2");d.textContent="Welcome to TOP restaurant!",t.appendChild(d);const o=document.createElement("p");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit,             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in             culpa qui officia deserunt mollit anim id est laborum.",t.appendChild(o)};function t(e,t,n){const d=document.createElement("div");d.classList="menuItem";const o=document.createElement("img");o.src=`${e}.png`,d.appendChild(o);const c=document.createElement("h3");c.textContent=e,d.appendChild(c);const i=document.createElement("p");i.textContent=t,d.appendChild(i);const a=document.createElement("h4");return a.textContent=n,d.appendChild(a),d}const n=function(){const e=document.querySelector("#middle");e.replaceChildren();const n=document.createElement("div");n.id="menu",e.appendChild(n),n.appendChild(t("HTML","The quick brown fox jumps over the lazy dog","$0")),n.appendChild(t("CSS","The quick brown fox jumps over the lazy dog","$0")),n.appendChild(t("JS","The quick brown fox jumps over the lazy dog","$0"))};function d(e,t){const n=document.createElement("h3");return n.classList="method",n.textContent=`${e}: ${t}`,n}const o=function(){const e=document.querySelector("#middle");e.replaceChildren();const t=document.createElement("div");t.id="contact",e.appendChild(t),t.appendChild(d("Phone","555-555-5555")),t.appendChild(d("Email","top@restaurant.com")),t.appendChild(d("Address","somewhere"))};!function(){const t=document.querySelector("#content"),d=document.createElement("div");d.id="top",t.appendChild(d);const c=document.createElement("h1");c.textContent="TOP Restaurant",d.appendChild(c);const i=document.createElement("div");i.id="naviBar",d.appendChild(i);const a=document.createElement("h3");a.textContent="Home",a.addEventListener("click",e),i.appendChild(a);const l=document.createElement("h3");l.textContent="Menu",l.addEventListener("click",n),i.appendChild(l);const m=document.createElement("h3");m.textContent="Contact",m.addEventListener("click",o),i.appendChild(m);const r=document.createElement("div");r.id="middle",t.append(r);const u=document.createElement("div");u.id="bottom",t.appendChild(u);const p=document.createElement("h2");p.textContent="Listed price valid as of 00/00/0000",u.appendChild(p),e()}()})();