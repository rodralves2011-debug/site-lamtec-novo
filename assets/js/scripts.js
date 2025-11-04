
document.addEventListener('DOMContentLoaded', function () {
  function simpleFallback(selector) {
    const container = document.querySelector(selector);
    if (!container) return;
    const slides = container.querySelectorAll('.swiper-slide');
    if (slides.length <= 1) return;
    let idx = 0;
    slides.forEach((s,i)=>{ s.style.display = i===0 ? 'block':'none'; });
    setInterval(()=>{
      slides[idx].style.display='none';
      idx = (idx+1)%slides.length;
      slides[idx].style.display='block';
    }, 3000);
  }
  if (typeof Swiper === 'undefined') {
    simpleFallback('.mySwiper1');
    simpleFallback('.mySwiper2');
    simpleFallback('.mySwiper3');
  }
});
