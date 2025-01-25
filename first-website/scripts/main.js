const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ohio.jpeg") {
    myImage.setAttribute("src", "images/eye_of_ra.jpeg");
  } else {
    myImage.setAttribute("src", "images/eye_of_ra.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}



myButton.addEventListener("click", () => {
    setUserName();
  });
  
  