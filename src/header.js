import Logo from "./publicdomainq-chili.svg";

const header = () => {
  console.log(`header`);

  const headFragment = document.createDocumentFragment();
  const headerDiv = document.createElement("div");
  headerDiv.className = "header";
 
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";

  const logoImg = document.createElement("img");
  logoImg.src = Logo;

  const companyName = document.createElement("h1");
  companyName.innerText = "Spicee";

  titleDiv.appendChild(logoImg);
  titleDiv.appendChild(companyName);
  const navigationDiv = document.createElement("div");
  navigationDiv.className = "navigation";
  const homeButton = document.createElement("button");
  homeButton.className = "clicked-button";
  homeButton.id = "home-button";
  homeButton.textContent = 'Home'

  const menuButton = document.createElement("button");
  menuButton.id = "menu-button";
  menuButton.textContent = 'Menu'

  const contactButton = document.createElement("button");
  contactButton.textContent = 'About'
  contactButton.id = "contact-button";

  navigationDiv.appendChild(homeButton);
  navigationDiv.appendChild(menuButton);
  navigationDiv.appendChild(contactButton);

  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(navigationDiv);
  headFragment.appendChild(headerDiv);

  return headFragment.cloneNode(true);
};

export default header;
