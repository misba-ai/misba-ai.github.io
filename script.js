const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

const optionButtons = document.querySelectorAll(".option-button");
const detailSections = document.querySelectorAll(".detail-section");

function showSection(id) {
  detailSections.forEach(section => section.classList.remove("open"));
  const section = document.getElementById(id);
  if (!section) return;

  section.classList.add("open");
  setTimeout(() => section.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
}

optionButtons.forEach(button => {
  button.addEventListener("click", () => showSection(button.dataset.target));
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    detailSections.forEach(section => section.classList.remove("open"));
    document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const profilePhotoButton = document.getElementById("profilePhotoButton");
const photoModal = document.getElementById("photoModal");
const photoModalClose = document.getElementById("photoModalClose");

profilePhotoButton.addEventListener("click", () => {
  photoModal.classList.add("open");
  photoModal.setAttribute("aria-hidden", "false");
});

function closePhotoModal() {
  photoModal.classList.remove("open");
  photoModal.setAttribute("aria-hidden", "true");
}

photoModalClose.addEventListener("click", closePhotoModal);
photoModal.addEventListener("click", (event) => {
  if (event.target === photoModal) closePhotoModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePhotoModal();
});

document.getElementById("year").textContent = new Date().getFullYear();
