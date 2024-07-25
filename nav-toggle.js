
const primNav = document.querySelector('.out-header');
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
    console.log("hi")
})

let tabHead = document.getElementsByClassName('tab-header')[0]

let tabIndi = document.querySelector('.indicator')

let tabBody = document.querySelector('.tab-body')
let tabPane =
    tabHead.getElementsByTagName("div")

for (let i = 0; i < tabPane.length; i++) {
    tabPane[i].addEventListener("click", () => {

        tabHead.getElementsByClassName("active")[0].classList.remove("active");
        tabPane[i].classList.add("active");


        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndi.style.left = `calc(calc(100%/3) * ${i})`;
    })
}
