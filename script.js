const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const optionButtons = document.querySelectorAll(".option-button");
const detailSections = document.querySelectorAll(".detail-section");


// ================= MENU BUTTON =================

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});


// ================= SHOW SECTION =================

function showSection(id) {
  detailSections.forEach(section => {
    section.classList.remove("open");
  });

  const section = document.getElementById(id);

  if (!section) return;

  section.classList.add("open");
  setActiveNav(id);

  setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 50);
}


// ================= PORTFOLIO OPTIONS =================

optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    showSection(target);
  });
});


// ================= TOP NAVIGATION =================

document.querySelectorAll("#navMenu a").forEach(link => {

  link.addEventListener("click", event => {

    const target = link.getAttribute("href");

    // Home
    if (target === "#home") {
      event.preventDefault();

      detailSections.forEach(section => {
        section.classList.remove("open");
      });

      document.getElementById("home").scrollIntoView({
        behavior: "smooth"
      });
      setActiveNav("home");

      navMenu.classList.remove("open");
      return;
    }


    // Portfolio menu
    if (target === "#menu") {
      event.preventDefault();

      document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
      });

      navMenu.classList.remove("open");
      return;
    }


    // Other sections
    if (target.startsWith("#")) {
      event.preventDefault();

      const id = target.substring(1);

      showSection(id);

      navMenu.classList.remove("open");
    }

  });

});


// ================= BACK BUTTON =================

document.querySelectorAll("[data-close]").forEach(button => {

  button.addEventListener("click", () => {

    detailSections.forEach(section => {
      section.classList.remove("open");
    });

    document.getElementById("menu").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


// ================= PROFILE PHOTO =================

const profilePhotoButton =
  document.getElementById("profilePhotoButton");

const photoModal =
  document.getElementById("photoModal");

const photoModalClose =
  document.getElementById("photoModalClose");


profilePhotoButton.addEventListener("click", () => {

  photoModal.classList.add("open");

  photoModal.setAttribute("aria-hidden", "false");

});


function closePhotoModal() {

  photoModal.classList.remove("open");

  photoModal.setAttribute("aria-hidden", "true");

}


photoModalClose.addEventListener(
  "click",
  closePhotoModal
);


photoModal.addEventListener("click", event => {

  if (event.target === photoModal) {
    closePhotoModal();
  }

});


// ================= ESC KEY =================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closePhotoModal();
  }

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

      themeBtn.textContent = "☀ Light";

      localStorage.setItem("theme", "dark");

    } else {

      themeBtn.textContent = "☾ Dark";

      localStorage.setItem("theme", "light");

    }

  });


  // Remember selected theme

  if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀ Light";

  }

}
// ================= HEADER PROFILE =================

const headerProfileButton =
  document.getElementById("headerProfileButton");

if (headerProfileButton) {
  headerProfileButton.addEventListener("click", () => {

    // Close mobile navigation
    navMenu.classList.remove("open");

    // Close any opened detail section
    detailSections.forEach(section => {
      section.classList.remove("open");
    });

    // Open Portfolio / Explore section
    document.getElementById("menu").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });
}

// ================= YEAR =================

document.getElementById("year").textContent =
  new Date().getFullYear();
// ================= ACTIVE NAVIGATION =================

const navLinks = document.querySelectorAll("#navMenu a");

function setActiveNav(id) {
  navLinks.forEach(link => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(
    `#navMenu a[href="#${id}"]`
  );

  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Home initially active
setActiveNav("home");

// Navigation click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("href");

    if (target && target.startsWith("#")) {
      setActiveNav(target.substring(1));
    }
  });
});
