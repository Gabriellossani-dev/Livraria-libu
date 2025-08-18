const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.carousel-dots');

let index = 0;
const total = images.length;
let autoPlay;



const dots = document.querySelectorAll('.carousel-dots button');

// Função principal: define quem é active, prev e next
function showImage(i) {
  images.forEach((img, idx) => {
    img.classList.remove("active", "prev", "next");

    if (idx === i) {
      img.classList.add("active");
    } else if (idx === (i - 1 + total) % total) {
      img.classList.add("prev");
    } else if (idx === (i + 1) % total) {
      img.classList.add("next");
    }
  });

}


// Botões
nextBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  showImage(index);
  resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  showImage(index);
  resetAutoPlay();
});

// Autoplay
function startAutoPlay() {
  autoPlay = setInterval(() => {
    index = (index + 1) % total;
    showImage(index);
  }, 4000);
}

function resetAutoPlay() {
  clearInterval(autoPlay);
  startAutoPlay();
}

// Inicializa
showImage(index);
startAutoPlay();
