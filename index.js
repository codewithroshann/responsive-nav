let toggleBtn = document.querySelector(".toggle-btn");
let dropdown = document.querySelector(".dropdown");

toggleBtn.addEventListener('click', function () {
    dropdown.classList.toggle("open")
})