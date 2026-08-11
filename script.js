// ===============================
// PORTFOLIO NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Mobile menu
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}


// ===============================
// SECTION HANDLING
// ===============================

const detailSections = document.querySelectorAll(".detail-section");
const optionButtons = document.querySelectorAll(".option-button");

function hideAllSections() {
  detailSections.forEach(section => {
    section.classList.remove("open");
  });
}

function showSection(id, updateUrl = true) {
  const section = document.getElementById(id);

  if (!section) {
    console.log("Section not found:", id);
    return;
  }

  hideAllSections();

  section.classList.add("open");

  if (updateUrl) {
    history.replaceState(null, "", "#" + id);
  }

  setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 50);

  // Close mobile menu
  if (navMenu) {
    navMenu.classList.remove("open");
  }
}


// ===============================
// DARK OPTION BUTTONS
// ===============================

optionButtons.forEach(button => {

  button.addEventListener("click", () => {

    const target = button.dataset.target;

    if (target) {
      showSection(target);
    }

  });

});


// ===============================
// TOP MENU LINKS
// ===============================

document.querySelectorAll("#navMenu a").forEach(link => {

  link.addEventListener("click", event => {

    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) {
      return;
    }

    const targetId = href.substring(1);

    // Home
    if (targetId === "home") {

      hideAllSections();

      history.replaceState(null, "", "#home");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      if (navMenu) {
        navMenu.classList.remove("open");
      }

      return;
    }

    // Other sections
    const targetSection = document.getElementById(targetId);

    if (targetSection) {

      event.preventDefault();

      showSection(targetId);

    }

  });

});


// ===============================
// BACK / CLOSE BUTTONS
// ===============================

document.querySelectorAll("[data-close]").forEach(button => {

  button.addEventListener("click", () => {

    hideAllSections();

    history.replaceState(null, "", "#home");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


// ===============================
// OPEN SECTION FROM URL
// Example: website.com/#skills
// ===============================

window.addEventListener("DOMContentLoaded", () => {

  const currentHash = window.location.hash.replace("#", "");

  if (currentHash && currentHash !== "home") {

    const section = document.getElementById(currentHash);

    if (section) {
      showSection(currentHash, false);
    }

  }

});


// ===============================
// PROFILE PHOTO MODAL
// ===============================

const profilePhotoButton =
  document.getElementById("profilePhotoButton");

const photoModal =
  document.getElementById("photoModal");

const photoModalClose =
  document.getElementById("photoModalClose");


if (profilePhotoButton && photoModal) {

  profilePhotoButton.addEventListener("click", () => {

    photoModal.classList.add("open");

    photoModal.setAttribute("aria-hidden", "false");

  });

}


function closePhotoModal() {

  if (!photoModal) return;

  photoModal.classList.remove("open");

  photoModal.setAttribute("aria-hidden", "true");

}


if (photoModalClose) {

  photoModalClose.addEventListener(
    "click",
    closePhotoModal
  );

}


if (photoModal) {

  photoModal.addEventListener("click", event => {

    if (event.target === photoModal) {
      closePhotoModal();
    }

  });

}


// ESC key closes photo
document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closePhotoModal();
  }

});


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
