let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function autoSlides() {
    plusSlides(1);
    setTimeout(autoSlides, 4000);
}

autoSlides();

document.querySelectorAll(".bbtn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Booking feature coming soon!");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".team-member");

    members.forEach(member => {
        member.addEventListener("mouseover", () => {
            member.style.transform = "scale(1.05)";
            member.style.transition = "transform 0.3s ease-in-out";
        });

        member.addEventListener("mouseout", () => {
            member.style.transform = "scale(1)";
        });
    });
});

