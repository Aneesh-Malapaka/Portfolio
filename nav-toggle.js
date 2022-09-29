const primNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

//data- is used in js to manipulate the css using it
navToggle.addEventListener('click', () => {
    const visi = primNav.getAttribute('data-visible');
    if (visi === "false") {
        primNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)

    }
    else if (visi === "true") {
        primNav.setAttribute('data-visible', false)

        navToggle.setAttribute('aria-expanded', false)
    }

})

// let prevScroll = window.scrollY
// let navbar = document.querySelector(".primary-header")
// document.addEventListener("scroll", function () {

//     console.log(prevScroll)
//     let val = window.scrollY || document.documentElement.scrollTop;
//     console.log(val)
//     if (val < prevScroll) {
//         navbar.classList.add("fixed-top");
//     }
//     prevScroll = val <= 0 ? 0 : val;
// });