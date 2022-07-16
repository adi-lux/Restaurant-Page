const aboutInfo = (name, number) => {
  const aboutWrapper = document.createElement("div")
  const aboutName = document.createElement("h1")
  const aboutNumber = document.createElement("p")
  aboutName.textContent = name;
  aboutNumber.textContent = number;
  aboutWrapper.appendChild(aboutName)
  aboutWrapper.appendChild(aboutNumber)
  return aboutWrapper
}


const about = () => {
  console.log(`about`);

  const aboutFragment = document.createDocumentFragment();
  const aboutDiv = document.createElement("div");
  aboutDiv.className = "body";
  
  const billiamJones = aboutInfo("Billiam Jonas", "+1 (123) - 445 - 9283")
  aboutDiv.appendChild(billiamJones)

  const jonasDoe = aboutInfo("Jonas Doe", "+1 (123) - 445 - 9281")
  aboutDiv.appendChild(jonasDoe)
  aboutFragment.appendChild(aboutDiv);
  return aboutFragment.cloneNode(true);
};

export default about;
