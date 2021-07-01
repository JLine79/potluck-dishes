// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const addGuestField = document.querySelector("#invite");
// text input box
const guestInputLabel = document.querySelector(".add-guest label");

const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//assign guest button (hidden by default)
const assignedItems = document.querySelector(".assigned-items");
const assignButton = document.querySelector(".assign");

//Show message
const message = document.querySelector("footer");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  updateGuestCount();
  //console.log(guest);
  const clearInput = function () {
    guestInput.value = "";
  };
  const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
  };
  if (guest !== "") {
    addToList(guest);
  }
  clearInput();
});

// Execute a function when the user releases a key on the keyboard
  addGuestField.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addGuestButton.click();
  }
});

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length + 1;
  if (guests.length === 7) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potLuckItems = [
    "chips and dip",
    "fruit salad",
    "crudites",
    "pizza",
    "cheese and crackers",
    "barbecue ribs",
    "tortillas",
    "sweet things",
    "crisps",
    "trifle",
    "garlic bread",
    "spicy wings"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotLuckIndex = Math.floor(Math.random() * potLuckItems.length);
    let randomPotLuckItem = potLuckItems[randomPotLuckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}`;
    assignedItems.append(listItem);

    potLuckItems.splice(randomPotLuckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
  message.classList.remove("hide");
});
