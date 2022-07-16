const menuPage = () => {
  console.log(`menu`);

  const menuFragment = document.createDocumentFragment();
  const menuDiv = document.createElement("div");
  menuDiv.className = "body";
  menuDiv.innerText = 'wowww'
  menuFragment.appendChild(menuDiv);
  return menuFragment.cloneNode(true);
};

export default menuPage;
