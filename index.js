// Step 1: Remove the main element
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new h1 element
const newHeader = document.createElement("h1");

// Step 3: Set the text content of the new h1 element
newHeader.id = "victory"; // Required ID for tests
newHeader.textContent = "Dan is the champion"; // Replace "Dan" with your name if needed

// Step 4: Append the new h1 element to the document body
document.body.append(newHeader);
