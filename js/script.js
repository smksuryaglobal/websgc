//toggle class active untuk hm
const navbarNav = document.querySelector(".navbar-nav");
// ketika hubmenu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toggle class active untuk class form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//ketika klik diluar sidebar menghlang nav
const humburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#searh-button");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

//modalbox
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

//klik close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//klik luar modal
const modal = document.querySelector("#item-display-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

//modalbox
const itemModa = document.querySelector("#item-moda");
const itemButto = document.querySelector(".item-butto");

itemButto.onclick = (e) => {
  itemModa.style.display = "flex";
  e.preventDefault();
};

//klik close
document.querySelector(".moda .close-icon").onclick = (e) => {
  itemModa.style.display = "none";
  e.preventDefault();
};

//klik luar modal
const moda = document.querySelector("#item-moda");
window.onclick = (e) => {
  if (e.target === moda) {
    moda.style.display = "none";
  }
};

//modalbox
const itemMod = document.querySelector("#item-mod");
const itemButt = document.querySelector(".item-butt");

itemButt.onclick = (e) => {
  itemMod.style.display = "flex";
  e.preventDefault();
};

//klik close
document.querySelector(".mod .close-icon").onclick = (e) => {
  itemMod.style.display = "none";
  e.preventDefault();
};

//klik luar modal
const mod = document.querySelector("#item-mod");
window.onclick = (e) => {
  if (e.target === mod) {
    mod.style.display = "none";
  }
};
