export default function CarrosselProjetos() {
    // Seletores do DOM
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const carousel = document.querySelector('.carousel');
    const list = document.querySelector('.list');
  

    // Exibe o slide seguinte ou anterior
    const showSlider = (direction) => {
      if (!list || !carousel) return;
      
      const items = list.querySelectorAll('.item');
  
      if (direction === 'next') {
        list.appendChild(items[0]);
        carousel.classList.add('next');
      } else if (direction === 'prev') {
        list.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }
  
      clearTimeout(animationTimeout);
      animationTimeout = setTimeout(() => {
        carousel.classList.remove('next', 'prev');
      }, animationDuration);
  
      clearTimeout(autoSlideTimeout);
      autoSlideTimeout = setTimeout(() => {
        nextBtn?.click();
      }, autoSlideDuration);
  
      resetTimeAnimation();
    };
  
    // Eventos de clique
    if (nextBtn && prevBtn) {
      nextBtn.onclick = () => showSlider('next');
      prevBtn.onclick = () => showSlider('prev');
    }
  
    // Função de limpeza
    return () => {
      clearTimeout(autoSlideTimeout);
      clearTimeout(animationTimeout);
    };
  }
  