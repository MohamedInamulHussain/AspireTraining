
const slider = document.querySelector('.slider');
let isTransitioning = false;

function slide() {
  // if (!isTransitioning) {
  //   isTransitioning = true;
  //   const firstSlide = slider.firstElementChild;
  //   slider.style.transition = 'transform 0.5s ease-in-out';
  //   slider.style.transform = 'translateX(-100%)';
  //   // setTimeout(() => {
  //   //   slider.appendChild(firstSlide);
  //   //   slider.style.transition = 'none';
  //   //   slider.style.transform = 'translateX(0)';
  //   //   isTransitioning = false;
  //   // }, 500); 
  // }
  for(i=i;i<4;i++)
  {
    slider(i-1).style.display='none';
    slider(i).style.display='block';
  }
}

setInterval(slide, 3000); 
