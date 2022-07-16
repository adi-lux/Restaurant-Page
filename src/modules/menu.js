import shrimp from "./../assets/pexels-cats-coming-699544.jpg";
import tikka from "./../assets/pexels-foodie-factor-539451.jpg";
import fries from "./../assets/pexels-marco-fischer-115740.jpg";
import tomato from "./../assets/pexels-marvin-ozz-2474661.jpg";
import yellowcurry from "./../assets/pexels-pixabay-209540.jpg";
import potato from "./../assets/pexels-shantanu-pal-2679501.jpg";


const generateMenuItem = (imgSrc, dishDescription) => {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  const menuImage = document.createElement("img");
  const menuName = document.createElement("p");
  menuImage.src = imgSrc;
  menuName.textContent = dishDescription;
  menuItem.appendChild(menuImage);
  menuItem.appendChild(menuName);
  return menuItem;
};

const menuPage = () => {
  console.log(`menu`);

  const menuFragment = document.createDocumentFragment();
  const menuDiv = document.createElement("div");
  menuDiv.className = "body";

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Spicee Menu";
  const actualMenu = document.createElement("div");
  actualMenu.className = "actual-menu";

  const menuItemOne = generateMenuItem(shrimp, "Shrimp Dish");
  actualMenu.appendChild(menuItemOne);

  const menuItemTwo = generateMenuItem(tikka, "Tikka Dish");
  actualMenu.appendChild(menuItemTwo);

  const menuItemThree = generateMenuItem(fries, "French Fries");
  actualMenu.appendChild(menuItemThree);

  const menuItemFour = generateMenuItem(tomato, "Spicee Tomato");

  actualMenu.appendChild(menuItemFour);

  const menuItemFive = generateMenuItem(yellowcurry, "Spicee Curry");

  actualMenu.appendChild(menuItemFive);

  const menuItemSix = generateMenuItem(potato, "Spicee Potato");

  actualMenu.appendChild(menuItemSix);

  menuDiv.appendChild(menuTitle);
  menuDiv.appendChild(actualMenu);
  menuFragment.appendChild(menuDiv);
  return menuFragment.cloneNode(true);
};

export default menuPage;
