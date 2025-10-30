const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');
const productCard = document.querySelector('.product-card');
productCard.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});
document.getElementById('addToCart').addEventListener('click', () => {
    alert('☑ HP EliteBook added to cart!')
});

// (function(){
//     const overlay = document.getElementById('overlay');
//     const loader = document.getElementById('loader');
//     const gallery = document.getElementById('gallery');
//     const overlayContent = document.getElementById('overlayContent');
//     const cartBar = document.getElementById('cartBar');
//     const addToCartBtn = document.getElementById('addToCartBtn');
//     const productCard = document.querySelector('.product-card');

//     let isOpen = false;
//     let isLoading = false;
//     function openOverlay() {
//         if (isOpen) return;
//         isOpen = true;
//         overlay.classList.add('active');
//         overlay.setAttribute('aria-hidden','false');
//         loader.classList.remove('hidden');
//         loader.style.pointerEvents = 'auto';
//         gallery.setAttribute('aria-hidden','true');
//         overlayContent.setAttribute('aria-hidden','true');
//         cartBar.style.display ='none';
//         document.body.style.overflow = 'hidden';

//         history.pushState({overlay:true}, '', '#product-hp-elitebook');

//         isLoading = true;
//         setTimeout(() => {
//             isLoading = false;
//             loader.classList.add('hidden');
            
//             gallery.setAttribute('aria-hidden','false');
//             overlayContent.setAttribute('aria-hidden','false');
//             cartBar.style.display = 'flex'
//         }, 2000);
//     }

//     function closeOverlay(pushBack=true) {
//         if (!isOpen) return;
//         isOpen = false;
//         overlay.classList.remove('active');
//         overlay.setAttribute('aria-hidden','true');
//         loader.classList.add('hidden');

//         gallery.setAttribute('aria-hidden','true');

//         overlayContent.setAttribute('aria-hidden','true');
//         cartBar.style.display = 'none';

//         cartBar.setAttribute('aria-hidden','true');
//         document.body.style.overflow = 'auto';

//         if (pushBack) {
//             try {
//                 if(history.state && history.state.overlay) history.back();
//             } catch(e){}
//         }
//     }
    
//     productCard.addEventListener('click', openOverlay);
//     window.addEventListener('popstate', (ev) => {
//         if (!isOpen && !(ev.state && ev.state.overlay)) {
//             closeOverlay(false);
//         }
//     });

//     addToCartBtn.addEventListener('click', () => {
//         alert('☑ HP EliteBook added to cart!');
//     });
//     let startY = 0;
//     let currentY = 0;
//     let dragging = false;
//     const threshold = 90;
//     const resistance = 0.6;

//     overlayContent.addEventListener('touchstart', (e) => {
//         if (!isOpen) return;
//         if (overlayContent.scrollTop === 0) {
//             startY = e.touches[0].clientY;
//             dragging = true;

//             overlayContent.classList.add('dragging');
//         } else {
//             dragging = false;
//         }
//     }, {passive:true});

//     overlayContent.addEventListener('touchmove', (e) => {
//         if (!dragging) return;
//         currentY = e.touches[0].clientY;
//         const delta = currentY - startY;
//         if (delta > 0) {
//             const translate = delta * resistance;
//             overlayContent.style.transform = `translateY(${translate}px)`;
//         }
//     }, {passive:true});
//     overlayContent.addEventListener('touchend', (e) => {
//         if (!dragging) return;
//         const delta = currentY -startY;
//         overlayContent.classList.remove('dragging');
//         overlayContent.style.transition = 'transform .18s ease';
//         if (delta > threshold){
//             overlayContent.style.transform = `translateY(100vh)`;
//             setTimeout(() => {
//                 overlayContent.style.transform = '';
//                 overlayContent.style.transition = '';
//                 closeOverlay();
//             }, 180);
//         } else {
//             overlayContent.style.transform = '';
//             setTimeout(() => overlayContent.style.transition = '', 200);
//         }
//         dragging = false;
//         startY = currentY = 0;
//     }, {passive:true});

//     window.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && isOpen) closeOverlay();
//     });
//     if (location.hash === '#product-hp-elitebook') {
//         setTimeout(openOverlay, 200);
//     }

//     overlay.classList.remove('active');
// })();