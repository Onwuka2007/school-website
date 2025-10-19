//Form styles
//preview answers function
function previewForm() {
  const form = document.querySelector("form");
  const previewContent = document.getElementById("previewContent");
  let list =
    "<h3 style='font-weight: bold; color: #b71c1c; margin-bottom: 20px;'>Review Your Answers</h3><ul>";
  for (let element of form.elements) {
    if (
      element.name &&
      element.type !== "submit" &&
      element.type !== "button"
    ) {
      list += `<li><strong>${element.name.toUpperCase()}: </strong> ${
        element.value || " N/A".padStart(7, ".")
      }</li>`;
    }
  }
  list +=
    "</ul> <p class='cv-note'>Use the close (x) button to go back and edit or submit if all is correct.</p>";
  previewContent.innerHTML = list;
  document.getElementById("previewModal").style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("previewModal").style.display = "none";
}

// Submit the form after confirming
function submitForm() {
  document.querySelector("form").submit();
}

// Get references to the elements
const confirmationSelect = document.getElementById("confirmation");
const additionalInputDiv = document.getElementById("additionalInputDiv");

// Add an event listener for the change event
confirmationSelect.addEventListener("change", (e) => {
  if (e.target.value === "yes") {
    additionalInputDiv.style.display = "block";
  } else {
      additionalInputDiv.style.display = "none";
    //     additionalInputDiv.removeAttribute('name')
    //   additionalInputDiv.required = false;
  }
});
