
// ---- Adds Current year to copyright
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//---- Meal Cards
const mealCards = document.querySelectorAll(".meal-card"); //Creates a node list of all elements with the said class

//Will require to go through each node so foreach used rather than a single element
mealCards.forEach((card) => {
  const mealImgCard = card.querySelector(".meal-img-card");

  card.addEventListener("mouseover", function() {
    mealImgCard.classList.add("hidden");
  });

  card.addEventListener("mouseout", function() {
    mealImgCard.classList.remove("hidden");
  });
});

