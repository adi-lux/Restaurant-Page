import food from "./buffet-g7cb18e920_1280.jpg";
const home = () => {
  const homeFragment = document.createDocumentFragment();
  const homeDiv = document.createElement("div");
  homeDiv.className = "body";

  console.log(homeFragment);

  const topImage = document.createElement("div");
  topImage.className = "top-image";
  const topActualImage = document.createElement("img");
  topActualImage.src = food;
  topImage.appendChild(topActualImage);

  const topRow = document.createElement("div");
  topRow.className = "top-row";
  const reviewText = document.createElement("h3");
  reviewText.textContent = "Review";
  const reviewParagraph = document.createElement("p");
  reviewParagraph.textContent = ` Every time I want Indian food, I think of Spicee. One day, I was going
  to the mall and thought "man, it would be great if there was a Spicee
  here". So I left and went to Spicee instead. It's gotten to the point
  where I have my own card just for Spicee and I can't go two days
  without having Spicee. So yes, I would recommend it!`;
  topRow.appendChild(reviewText);
  topRow.appendChild(reviewParagraph);

  const middleRow = document.createElement("div");
  middleRow.className = "middle-row";
  const companyHours = document.createElement("h3");
  companyHours.textContent = "Hours";
  const firstHalf = document.createElement("div");
  firstHalf.className = "first-half";
  firstHalf.innerHTML = `<p><b>Saturday:</b>&nbsp;&nbsp;&nbsp;12pm-3pm</p>
  <p><b>Sunday:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am-12am</p>
  <p><b>Monday:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am-9pm</p>
  <p><b>Tuesday:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am-9pm</p>`;
  const secondHalf = document.createElement("div");
  secondHalf.className = "second-half";
  secondHalf.innerHTML = `<p><b>Wednesday:</b> &nbsp;&nbsp;&nbsp;12pm-3pm</p>
  <p><b>Thursday:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am-9pm</p>
  <p><b>Friday:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8am-12am</p>`;

  middleRow.appendChild(companyHours);
  middleRow.appendChild(firstHalf);
  middleRow.appendChild(secondHalf);

  const endRow = document.createElement("div");
  endRow.className = "end-row";
  const companyLocation = document.createElement("h3");
  companyLocation.textContent = "Location";
  const companyAddress = document.createElement("p");
  companyAddress.textContent = "234 Argonaut Drive, Santa Barbara, California";
  
  endRow.appendChild(companyLocation)
  endRow.appendChild(companyAddress)

  homeDiv.appendChild(topImage)
  homeDiv.appendChild(topRow)
  homeDiv.appendChild(middleRow)
  homeDiv.appendChild(endRow)
  
  
  homeFragment.appendChild(homeDiv);
  return homeFragment.cloneNode(true);
};

export default home;
