// Remove the <main> element
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign an id of "victory" to the new element
newHeader.id = "victory";

// Set the text content of the new <h1> element
newHeader.textContent = "Dan is the champion";

// Append the new header to the document body
document.body.appendChild(newHeader);
