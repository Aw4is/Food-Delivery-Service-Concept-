
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

//---- Pricing Plan

const pricingBtn = document.querySelector(".pricing-btn");
const monthlyBtn = document.querySelector(".monthly-btn")
const annualBtn = document.querySelector(".annual-btn")
const basicPrice = document.querySelector(".plan-price-basic");
const compPrice = document.querySelector(".plan-price-comp");
const planTxt = document.querySelector(".plan-txt");

annualBtn.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent the default behavior (if necessary)
  
  // Change the background gradient of pricingBtn
  pricingBtn.style.background = 'linear-gradient(to left, #b3d9d9 47%, #ffffff 50%)';
  monthlyBtn.classList.remove("active-btn");
  monthlyBtn.classList.add("inactive-btn")
  annualBtn.classList.remove("inactive-btn")
  annualBtn.classList.add("active-btn");

  compPrice.textContent = (`£7788`);
  basicPrice.textContent = (`£4788`);
  
});

monthlyBtn.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent the default behavior (if necessary)
  
  // Change the background gradient of pricingBtn
  pricingBtn.style.background = 'linear-gradient(to right, #b3d9d9 53%, #ffffff 50%)';
  monthlyBtn.classList.add("active-btn");
  monthlyBtn.classList.remove("inactive-btn")
  annualBtn.classList.add("inactive-btn")
  annualBtn.classList.remove("active-btn");

  compPrice.textContent = ('£649');
  basicPrice.textContent = ('£399');
});