const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('change')
})

// Change Color On Scroll
$(window).scroll(function(){
    $('.nav-container').toggleClass('scroll', $(this).scrollTop() > 80);
});

const slidePage = document.querySelector(".slidepage");
const firNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let max = 4;
let current = 1;

firNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("actives");
    progressText[current - 1].classList.add("actives");
    progressCheck[current - 1].classList.add("actives");
    current += 1;
});

nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("actives");
    progressText[current - 1].classList.add("actives");
    progressCheck[current - 1].classList.add("actives");
    current += 1;
});

nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("actives");
    progressText[current - 1].classList.add("actives");
    progressCheck[current - 1].classList.add("actives");
    current += 1;
});

submitBtn.addEventListener("click", function(){
    bullet[current - 1].classList.add("actives");
    progressText[current - 1].classList.add("actives");
    progressCheck[current - 1].classList.add("actives");
    current += 1;
    setTimeout(function(){
        alert("You're now a member! Welcome to the Family!!!");
        location.reload();
    }, 800);
});

prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0";
        bullet[current - 2].classList.remove("actives");
    progressText[current - 2].classList.remove("actives");
    progressCheck[current - 2].classList.remove("actives");
    current -= 1;
});

prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
        bullet[current - 2].classList.remove("actives");
    progressText[current - 2].classList.remove("actives");
    progressCheck[current - 2].classList.remove("actives");
    current -= 1;
});

prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
        bullet[current - 2].classList.remove("actives");
    progressText[current - 2].classList.remove("actives");
    progressCheck[current - 2].classList.remove("actives");
    current -= 1;
})
