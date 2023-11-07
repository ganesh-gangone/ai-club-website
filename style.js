let hamburgerBtn = document.getElementById("hamburger");
let closeBtn = document.getElementById("close");
let navElements = document.getElementById("navLinks");

hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle("hide");
    navElements.classList.toggle("navlinks");
    closeBtn.classList.toggle("unhide");
});

closeBtn.addEventListener('click', () => {
    closeBtn.classList.toggle("unhide");
    hamburgerBtn.classList.toggle("hide");
    navElements.classList.toggle("navlinks");
});