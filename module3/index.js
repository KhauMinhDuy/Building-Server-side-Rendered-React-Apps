const rootElement = document.getElementById("app");

const myElement = document.createElement("h1");
myElement.className = "orange";
myElement.innerHTML = "Hello From Pluralsight";

rootElement.appendChild(myElement);
