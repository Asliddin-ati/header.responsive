let headerResponsiveClose1 = document.querySelector("#header-responsive-close-1")
let headerHamburgerMenu1 = document.querySelector("#header-hamburger-menu-1")
let headerResponsiveMenu1 = document.querySelector("#header-responsive-menu-1")



headerHamburgerMenu1.addEventListener('click', function () {
    headerResponsiveMenu1.classList.remove("-left-full")
    headerResponsiveMenu1.classList.add("left-0")
})
headerResponsiveClose1.addEventListener('click', function () {
    headerResponsiveMenu1.classList.add("-left-full")
    headerResponsiveMenu1.classList.remove("left-0")
})