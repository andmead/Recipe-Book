const ingredients = document.querySelectorAll(".ingredients");
const recipeContainer = document.getElementById("recipe-container");
const toggleButtons = document.querySelectorAll(".toggleButton");
const steps = document.querySelectorAll(".steps");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const ingredients = button.nextElementSibling;
    if (ingredients && ingredients.classList.contains("ingredients")) {
      if (ingredients.style.display === "none" || !ingredients.style.display) {
        ingredients.style.display = "block";
        button.innerHTML = `Hide`;
      } else {
        ingredients.style.display = "none";
        button.innerHTML = `Show`;
      }
    }
  });
});

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const steps = button.nextElementSibling;
    if (steps && steps.classList.contains("steps")) {
      if (steps.style.display === "none" || !steps.style.display) {
        steps.style.display = "block";
        button.innerHTML = `Hide`;
      } else {
        steps.style.display = "none";
        button.innerHTML = `Show`;
      }
    }
  });
});
