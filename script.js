
aa gaye hain. Agar ye actually `script.js` mein hain, to JavaScript error ho jayega aur `setActiveNav()` chalega hi nahi.

### Sabse easy solution

**`script.js` ka pura code delete karo** aur ye exact code paste karo:

```javascript
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const optionButtons = document.querySelectorAll(".option-button");
const detailSections = document.querySelectorAll(".detail-section");
const navLinks = document.querySelectorAll("#navMenu a");

// ================= ACTIVE NAVIGATION =================

function setActiveNav(id) {
  navLinks.forEach(link => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(
    '#navMenu a[href="#' + id + '"]'
  );

  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Home initially active
setActiveNav("home");

// ================= MENU BUTTON =================

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// ================= SHOW SECTION =================

function showSection(id) {

  detailSections.forEach(section => {
    section.classList.remove("open");
  });

  const section = document.getElementById(id);

  if (!section) return;

  section.classList.add("open");

  // Active underline
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

navLinks.forEach(link => {

  link.addEventListener("click", event => {

    const target = link.getAttribute("href");

    if (!target || !target.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const id = target.substring(1);

    // HOME
    if (id === "home") {

      detailSections.forEach(section => {
        section.classList.remove("open");
      });

      document.getElementById("home").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      setActiveNav("home");

      navMenu.classList.remove("open");

      return;
    }

    // OTHER SECTIONS
    showSection(id);

    navMenu.classList.remove("open");

  });

});

// ================= BACK BUTTON =================

document.querySelectorAll("[data-close]").forEach(button => {

  button.addEventListener("click", () => {

    detailSections.forEach(section => {
      section.classList.remove("open");
    });

    // Portfolio menu par wapas
    document.getElementById("menu").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Kisi nav ko active nahi rakhenge
    navLinks.forEach(link => {
      link.classList.remove("active");
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

// ================= ESC KEY =================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closePhotoModal();
  }

});

// ================= DARK MODE =================

const themeBtn =
  document.getElementById("themeBtn");

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

    navMenu.classList.remove("open");

    detailSections.forEach(section => {
      section.classList.remove("open");
    });

    document.getElementById("menu").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Menu page par koi nav active nahi
    navLinks.forEach(link => {
      link.classList.remove("active");
    });

  });

}

// ================= YEAR =================

const yearElement =
  document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}
