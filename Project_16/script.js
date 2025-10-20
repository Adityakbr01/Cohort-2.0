const slidesEl = document.getElementById('slides');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsEl = document.getElementById('dots');

let index = 0;
let intervalMs = 3500;
let intervalId = null;

function createDots(){
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.dataset.index = i;
    if(i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => { goToSlide(i); resetInterval(); });
    dotsEl.appendChild(btn);
  });
}

function updateDots(){
  const dots = Array.from(dotsEl.children);
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function goToSlide(i){
  index = (i + slides.length) % slides.length;
  slidesEl.style.transform = `translateX(${-index * 100}%)`;
  updateDots();
}

function nextSlide(){ goToSlide(index + 1); }
function prevSlide(){ goToSlide(index - 1); }

function startInterval(){
  if(intervalId) clearInterval(intervalId);
  intervalId = setInterval(nextSlide, intervalMs);
}
function resetInterval(){ startInterval(); }

prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });



createDots();
goToSlide(0);
startInterval();