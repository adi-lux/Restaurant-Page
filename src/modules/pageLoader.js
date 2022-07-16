import menu from "./menu";
import home from "./home";
import header from "./header";
import about from "./about";

const pageLoader = () => {
  const content = document.getElementById("content");
  const headerPage = header();
  let curPage =  home();
  
  const selected = "clicked-button";
  let curPageID = "home-button";

  // we could use dom templating -> create document fragments
  // for all 3 pages
  // header is a template and then actual content can be module based
  // we store 3 different page variations
  // when menu is clicked we can just remove and add the dom elements
  // from one of them.
  const menuButtons = headerPage.querySelectorAll("button");
  menuButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      e.target.classList.add(selected);

      const newSelection = document.getElementById(curPageID);

      newSelection.classList.remove(selected);
      curPageID = e.target.id;
      
      if (curPageID === "home-button") {
        curPage = home();
        console.log(curPage);
        
      } else if (curPageID === "menu-button") {
        curPage = menu();
      } else {
        curPage = about();
      }

      const currentBody = document.querySelector(".body");
      content.removeChild(currentBody)
      content.append(curPage);
    })
  );
  
  content.append(curPage)
  content.prepend(headerPage);
};

export default pageLoader;
