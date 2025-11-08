// const overlay = document.getElementById('overlay');
// const closeBtn = document.querySelector('.close-btn');
// const productCard = document.querySelector('.product-card');
// productCard.addEventListener('click', () => {
//     overlay.classList.add('active');
//     document.body.style.overflow = 'hidden';
// });
// closeBtn.addEventListener('click', () => {
//     overlay.classList.remove('active');
//     document.body.style.overflow = 'auto';
// });
// document.getElementById('addToCart').addEventListener('click', () => {
//     alert('☑ HP EliteBook added to cart!')
// });



// DID'NT WORK//
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


// const products = [
//     {
//         id: 1,
//         name: "NIVEA Radiant & Beauty Even Glow Body Lotion for women - 400ml (Pack Of 2)",
//         brand: "NIVEA",
//         price: "₦9,365",
//         Images: [
//             "comHPCard-1.jpg",
//             "comHPCard-2.jpg",
//             "comHPCard-3.jpg"
//         ],
//         description1: "This NIVEA body lotion is specially formulated toenhance skin tone and radiance with pearl extract and vitamin C",
//         description2: "It moisturizes deeply, giving you visibly glowing, even-toned, and smoother skin everyday."
//     },
//     {
//         id: 2,
//         name: "ADIDAS WideWalk Sneakers",
//         brand: "ADIDAS",
//         price: "₦36,625",
//         Images: [
//             "comHPCard.jpg",
//             "comHPCard-4.jpg",
//             "comHPCard-5.jpg"
//         ],
//         description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
//         description2: "Lightweight, durable, and built with superior grip for both style and function."
//     }
// ];

const products = [
  {
    id: 1,
    name: "HP Laptop EliteBook Intel",
    brand: "HP",
    price: "₦750,000",
    images: [
      "comHPCard.jpg",
      "comHPCard-1.jpg",
      "comHPCard-2.jpg",
      "comHPCard-3.jpg"
    ],
    description1: "Designed for comfort ー Easy to carry from meeting to meeting, the ultrathin and light 14-inch diagonal the  EliteBook 840 G7 with an high-percent screen-to-body ratio. It also includes a new keyboard and clickpad that are quiet and comfortable to work on.",
    description2: "Work with peace of mind Security features from  work together to create an always-on, always-acting, resilient defense. From the BIOS to the browser, above and below the OS, these constantly evolving solutions help protect your PC from threats."
  },
  {
    id: 2,
    name: "Apple Macbook Air 15 M3 Chip 8GB, 512GB Starlight",
    brand: "Apple",
    price: "₦2,899,000",
    images: [
      "eCmrceAppleLaptop.jpg",
      "eCmrceAppleLaptop1st.jpg",
      "eCmrceAppleLaptop2nd.jpg",
      "eCmrceAppleLaptop3rd.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 3,
    name: "Apple 11-Inch iPad Air Wi-Fi + Cellular 512GB - Space Grey - M2 Chip - 2025",
    brand: "Apple",
    price: "₦1,860,999",
    images: [
      "eCmrceIpad3rd.jpg",
      "eCmrceIpad1st.jpg",
      "eCmrceIpad2nd.jpg",
      "eCmrceIpad.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 4,
    name: "Apple iPad Pro 11 M4 - Wi-Fi - 1TB ー Black - 2024",
    brand: "Apple",
    price: "₦2,899,999",
    images: [
      "eCmrceIpad11.jpg",
      "eCmrceIpad2nd.jpg",
      "eCmrceIpad1st.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 5,
    name: "Apple iPhone 15 Pro max, 256GB",
    brand: "Apple",
    price: "₦1,590,000",
    images: [
      "eCmrceIphone15pro.jpg",
      "eCmrceIphone15pro1st.jpg",
      "eCmrceIphone15pro2nd (1).jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 6,
    name: "Power Pod ORIMO FREEPODS Bluetooth Earphones 5 3 Wireless Hearpod Ear Pod / Headphones 5 0 Hear Earpiece Cover Stereo Slide Earpods Airpods Earbududs Pod",
    brand: "Power Pod",
    price: "₦25,000",
    images: [
      "eCmrceOraimo earpod.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 7,
    name: "Jbl |12 Super Bass High Quality Headphone",
    brand: "Jbl",
    price: "₦40,000",
    images: [
      "eCmrceJBLheadset.jpg",
      "eCmrceJblHeadset2nd.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 8,
    name: "Wireless Stereo Earphone Wireless Single Earbud Headphones Earpiece One Ear Earbods Bluetooth Earphones Earpods",
    brand: "Wireless Stereo Earphone",
    price: "₦5,550",
    images: [
      "eCmrceStereoEarpod.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 9,
    name: "Air Max 2 - Wireless Over-Ear Noise Cancellation Headphones With Bluetooth 5.3, TF Card Slot, Built-in Mic, USB-C Charging, Comfortable Cushioned Ear Cups, Gaming Headphone - Compatible With Smartphones & Computers, Modern Headset",
    brand: "Air Max",
    price: "₦15,191",
    images: [
      "eCmrceHeadsets.jpg",
      "eCmrceHeadsets1st.jpg",
      "eCmrceHeadsets2nd.jpg",
      "eCmrceHeadsets3rd.jpg",
      "eCmrceHeadsets4th.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 10,
    name: "Samsung Galaxy S22 Ultra 5G 256GB ROM 8GB RAM Single Sim - Black",
    brand: "Samsung",
    price: "₦900,000",
    images: [
      "eCmrceSamsungS23.jpg",
      "eCmrceSamsungS22-2nd.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 11,
    name: "Samsung Galaxy Z Fold 7 8.00' 12GB RAM/256GB ROM Android 16- Black+Free gift",
    brand: "Samsung",
    price: "₦2,700,000",
    images: [
      "eCmrceSamsung vfold.jpg",
      "eCmrceSamsung vfold2nd.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 12,
    name: "HP Laptop ProBook 640 G2 Core i5 6th Gen 8GB RAM 5.00GB HDD",
    brand: "HP",
    price: "₦250,000",
    images: [
      "eCmrceProbooklaptop.jpg",
      "eCmrceProbooklaptop1st.jpg",
      "eCmrceProbooklaptop2nd.jpg",
      "eCmrceProbooklaptop3rd.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 13,
    name: "Kingskartel Kings-Kartel Stylish Zip Up Hoodie & Joggers Pant (Brown And Black)",
    brand: "Kingskartel",
    price: "₦18,550",
    images: [
      "eCf&S cloothes.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 14,
    name: "Men's 2-in-1 Short Sleeved T-shirt And Pants Set - Black",
    brand: "",
    price: "₦9,000",
    images: [
      "ecF&S cloth2.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 15,
    name: "GALUIN 2 Piece Men's Round Neck Short Sleeve Shirt & Shorts -Black",
    brand: "GALUNI",
    price: "₦11,500",
    images: [
      "ecF&S cloth3.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 16,
    name: "Danami Pack Of 3 Plain Sleeveless Hooded T Shirt- Black White & Ash",
    brand: "Danami",
    price: "₦19,999",
    images: [
      "ecF&S coth4.jpg"
    ],
    // ecF&S cloth4.jpg
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 17,
    name: "Dou-color Dou Color Fabric Thick T-shirt Ptriotic Men's Nigerian Flag Printed T-shirt - Black",
    brand: "Dou-color",
    price: "₦4,200",
    images: [
      "ecF&S cloth5.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 18,
    name: "O'Carly Gluta Magic Ultra Whitens serum anti taches - Carrot Extract - 1 bottle",
    brand: "O'Carly",
    price: "₦7,000",
    images: [
      "ecF&S Gluta Magic.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 19,
    name: "kojic White kojic Gluta Papaya Whitening Soap (With Arbutin)x2",
    brand: "Kojic White",
    price: "₦6,555",
    images: [
      "ecF&S kojic sop.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 20,
    name: "Danami Pack Of 3 Plain Sleeveless Hooded T Shirt- Black White & Ash",
    brand: "Danami",
    price: "₦19,999",
    images: [
      "ecF&S cloth4.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 21,
    name: "Nivea Cherry Blossom & Jojoba Oil Infused Body Lotion transforms dry skin into radiant, soft skin with a lovely Cherry Blossom scent.",
    brand: "Nivea",
    price: "₦15,999",
    images: [
      "ecF&S niveaCream.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 22,
    name: "AlRehab Choco Musk Perfume 50ml.",
    brand: "AlRehab",
    price: "₦5,500",
    images: [
      "ecF&S perfume2.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 23,
    name: "MOUSUF- Hand and body lotion ー Approx 1.53 fl.oz",
    brand: "MOUSUF",
    price: "₦7,700",
    images: [
      "ecF&S perfume.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 24,
    name: "Copaci 24kunisex Perfume 30ml",
    brand: "Copci",
    price: "₦3,050",
    images: [
      "ecF&S 24K perfume.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
];

var swiper = new Swiper("#promoSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  centeredSlides: false,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
});





// id: 2,
//     name: "ADIDAS WideWalk Sneakers",
//     brand: "ADIDAS",
//     price: "₦36,625",
//     images: [
//       "comHPCard.jpg",
//       "comHPCard-4.jpg",
//       "comHPCard-5.jpg"
//     ],
//     description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
//     description2: "Lightweight, durable, and built with superior grip for both style and function."