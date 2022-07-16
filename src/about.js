const about = () => {
  console.log(`about`);

  const aboutFragment = document.createDocumentFragment();
  const aboutDiv = document.createElement("div");
  aboutDiv.className = "body";
  aboutDiv.innerText = "about";
  aboutFragment.appendChild(aboutDiv);
  return aboutFragment.cloneNode(true);
};

export default about;
