const slides = document.querySelectorAll('.plan-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');

    dots.forEach(dot => dot.classList.remove('active'));
    if(dots[currentIndex]) dots[currentIndex].classList.add('active');
}

if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel(currentIndex + 1));
if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel(currentIndex - 1));

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const targetIndex = parseInt(e.target.dataset.goto);
        updateCarousel(targetIndex);
    });
});

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgFull');
const closeModal = document.querySelector('.close-modal');
const planImages = document.querySelectorAll('.plan-image');

planImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

if (closeModal) {
    closeModal.onclick = () => modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};