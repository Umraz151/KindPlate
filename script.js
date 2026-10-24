const meals = [
  { title: "Fresh vegetable biryani", area: "Indiranagar", time: "Today · 7:30 PM", portions: "5 portions", type: "vegetarian", phone: "98765 43210", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80" },
  { title: "Sourdough & banana bread", area: "Koramangala", time: "Today · 6:00 PM", portions: "8 pieces", type: "baked", phone: "98123 45678", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80" },
  { title: "Homestyle dal & rice", area: "Jayanagar", time: "Today · 8:00 PM", portions: "4 portions", type: "vegan", phone: "99001 22334", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80" },
];

const mealGrid = document.querySelector("#meal-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const foodImages = {
  biryani: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
  rice: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
  dal: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
  curry: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  pizza: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  pasta: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  dessert: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
  vegetarian: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  vegan: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  baked: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
};

function getFoodImage(title, type) {
  const foodName = title.toLowerCase();
  const matchingFood = Object.keys(foodImages).find((food) => foodName.includes(food));
  return foodImages[matchingFood || type];
}

function renderMeals() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = meals.filter((meal) => {
    const searchable = `${meal.title} ${meal.area} ${meal.type}`.toLowerCase();
    return searchable.includes(query) && (category === "all" || meal.type === category);
  });
  mealGrid.innerHTML = filtered.map((meal) => `
    <article class="meal-card">
      <div class="meal-photo ${meal.photo} ${meal.image ? "has-image" : ""}">${meal.image ? `<img src="${meal.image}" alt="${meal.title}" loading="lazy" />` : ""}<span class="tag">${meal.type === "baked" ? "BAKED GOODS" : meal.type.toUpperCase()}</span></div>
      <div class="meal-body"><h3>${meal.title}</h3><div class="meal-meta"><span>⌖ ${meal.area}</span><span>${meal.portions}</span></div><div class="meal-meta" style="margin-top:8px"><span>${meal.booked ? "Reserved" : "Available"}</span><span>${meal.time}</span></div><div class="meal-action">${meal.booked ? `<a class="contact-link" href="tel:${meal.phone.replace(/\s/g, "")}">☎ Call donor: ${meal.phone}</a><button class="cancel-button" data-meal="${meals.indexOf(meal)}">Cancel booking</button>` : `<button class="book-button" data-meal="${meals.indexOf(meal)}">Book this food</button>`}</div></div>
    </article>
  `).join("");
  emptyState.hidden = filtered.length > 0;
}

function scrollToSection(event) {
  const target = document.getElementById(event.currentTarget.dataset.scrollTo);
  target?.scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll("[data-scroll-to]").forEach((button) => button.addEventListener("click", scrollToSection));
searchInput.addEventListener("input", renderMeals);
categoryFilter.addEventListener("change", renderMeals);
document.querySelector("#view-all").addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  renderMeals();
  document.querySelector("#find-food").scrollIntoView({ behavior: "smooth" });
});

mealGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".book-button");
  const cancelButton = event.target.closest(".cancel-button");
  if (!button && !cancelButton) return;
  const meal = meals[Number((button || cancelButton).dataset.meal)];
  meal.booked = Boolean(button);
  renderMeals();
  document.querySelector("#toast").textContent = button
    ? `Food booked. Call ${meal.phone} to arrange pickup.`
    : "Booking cancelled. This food is available again.";
  document.querySelector("#toast").classList.add("show");
  window.setTimeout(() => document.querySelector("#toast").classList.remove("show"), 4500);
});

document.querySelector("#share-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const type = data.get("type");
  meals.unshift({
    title: data.get("food"),
    area: data.get("area"),
    time: `Today · ${data.get("until")}`,
    portions: "New listing",
    type,
    phone: data.get("phone"),
    photo: "",
    image: getFoodImage(data.get("food"), type),
  });
  renderMeals();
  form.reset();
  document.querySelector("#form-message").textContent = "Your meal is now visible to neighbors nearby.";
  const toast = document.querySelector("#toast");
  toast.textContent = "Meal shared successfully ♡";
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3500);
});

renderMeals();
