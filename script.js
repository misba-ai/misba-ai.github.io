const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const optionButtons = document.querySelectorAll(".option-button");
const detailSections = document.querySelectorAll(".detail-section");
const navLinks = document.querySelectorAll("#navMenu a");


// ================= ACTIVE NAVIGATION =================

function setActiveNav(id) {

  navLinks.forEach(function(link) {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(
    '#navMenu a[href="#' + id + '"]'
  );

  if (activeLink) {
    activeLink.classList.add("active");
  }
}


// ================= MENU BUTTON =================

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("open");
  });

}


// ================= SHOW SECTION =================

function showSection(id) {

  detailSections.forEach(function(section) {
    section.classList.remove("open");
  });

  const section = document.getElementById(id);

  if (!section) {
    return;
  }

  section.classList.add("open");

  setActiveNav(id);

  setTimeout(function() {

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 50);
}


// ================= PORTFOLIO OPTIONS =================

optionButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const target = button.getAttribute("data-target");

    showSection(target);

  });

});


// ================= TOP NAVIGATION =================

navLinks.forEach(function(link) {

  link.addEventListener("click", function(event) {

    event.preventDefault();

    const target = link.getAttribute("href");

    if (!target) {
      return;
    }

    const id = target.substring(1);


    // HOME

    if (id === "home") {

      detailSections.forEach(function(section) {
        section.classList.remove("open");
      });

      const home = document.getElementById("home");

      if (home) {

        home.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

      setActiveNav("home");

      if (navMenu) {
        navMenu.classList.remove("open");
      }

      return;
    }


    // OTHER SECTIONS

    showSection(id);

    if (navMenu) {
      navMenu.classList.remove("open");
    }

  });

});


// ================= BACK BUTTON =================

document.querySelectorAll("[data-close]").forEach(function(button) {

  button.addEventListener("click", function() {

    detailSections.forEach(function(section) {
      section.classList.remove("open");
    });

    const menu = document.getElementById("menu");

    if (menu) {

      menu.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

    navLinks.forEach(function(link) {
      link.classList.remove("active");
    });

  });

});


// ================= PROFILE PHOTO MODAL =================

const profilePhotoButton =
  document.getElementById("profilePhotoButton");

const photoModal =
  document.getElementById("photoModal");

const photoModalClose =
  document.getElementById("photoModalClose");


if (profilePhotoButton && photoModal) {

  profilePhotoButton.addEventListener("click", function() {

    photoModal.classList.add("open");

    photoModal.setAttribute(
      "aria-hidden",
      "false"
    );

  });

}


if (photoModalClose && photoModal) {

  photoModalClose.addEventListener("click", function() {

    photoModal.classList.remove("open");

    photoModal.setAttribute(
      "aria-hidden",
      "true"
    );

  });

}


if (photoModal) {

  photoModal.addEventListener("click", function(event) {

    if (event.target === photoModal) {

      photoModal.classList.remove("open");

      photoModal.setAttribute(
        "aria-hidden",
        "true"
      );

    }

  });

}


// ================= ESC KEY =================

document.addEventListener("keydown", function(event) {

  if (
    event.key === "Escape" &&
    photoModal
  ) {

    photoModal.classList.remove("open");

    photoModal.setAttribute(
      "aria-hidden",
      "true"
    );

  }

});


// ================= DARK MODE =================

const themeBtn =
  document.getElementById("themeBtn");


if (themeBtn) {

  themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (
      document.body.classList.contains("dark-mode")
    ) {

      themeBtn.textContent = "☀ Light";

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      themeBtn.textContent = "☾ Dark";

      localStorage.setItem(
        "theme",
        "light"
      );

    }

  });


  // Remember theme

  if (
    localStorage.getItem("theme") === "dark"
  ) {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀ Light";

  }

}


// ================= HEADER PROFILE =================

const headerProfileButton =
  document.getElementById("headerProfileButton");


if (headerProfileButton) {

  headerProfileButton.addEventListener("click", function() {

    if (navMenu) {
      navMenu.classList.remove("open");
    }

    detailSections.forEach(function(section) {
      section.classList.remove("open");
    });

    const menu =
      document.getElementById("menu");

    if (menu) {

      menu.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

    navLinks.forEach(function(link) {
      link.classList.remove("active");
    });

  });

}


// ================= CURRENT YEAR =================

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


// ================= DEFAULT HOME =================

setActiveNav("home");
