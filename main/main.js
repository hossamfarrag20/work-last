let currentSlide = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    showSlide(currentSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);
setInterval(nextSlide, 2500);
// ======================counter======================
document.addEventListener("DOMContentLoaded", function () {
    const nums = document.querySelectorAll(".num");
    let started = false;

    function startCounting() {
        nums.forEach(num => {
            let target = +num.textContent;
            let count = 0;
            let speed = target / 50; // كل ما زودت الرقم، السرعة تزيد

            let updateCount = setInterval(() => {
                count += Math.ceil(speed);
                if (count >= target) {
                    count = target;
                    clearInterval(updateCount);
                }
                num.textContent = count;
            }, 50);
        });
    }

    function checkFooterVisible() {
        let footer = document.querySelector("footer");
        let rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight && !started) {
            started = true;
            startCounting();
        }
    }

    window.addEventListener("scroll", checkFooterVisible);
});

