import Glide from '@glidejs/glide';

export function initGlide() {
  let bullets = 0;
  const glide = document.querySelector('.glide');

  if (glide) {
    function glideStart() {
      document.querySelectorAll('.glide__slide').forEach(() => {
        renderBullets();
      });

      if (glide.dataset.glide == 'index' || glide.dataset.glide == 'about') {
        new Glide('.glide', {
          autoplay: 5000,
          type: 'carousel',
          hoverPause: true,
          startAt: 0,
          perView: 3,
          breakpoints: {
            768: {
              perView: 2,
            },
            425: {
              perView: 1,
            },
          },
        }).mount();
      } else if (glide.dataset.glide == 'services') {
        new Glide('.glide', {
          autoplay: 8000,
          type: 'carousel',
          hoverPause: true,
          startAt: 0,
          perView: 3,
          breakpoints: {
            1280: {
              perView: 2,
            },
            896: {
              perView: 1,
            },
          },
        }).mount();
      }
    }

    function renderBullets() {
      const bullet = document.createElement('button');
      bullet.className = 'glide__bullet';
      bullet.setAttribute('data-glide-dir', '=' + bullets);

      document.querySelector('.glide__bullets').appendChild(bullet);
      bullets++;
    }
    glideStart();
  }
}
