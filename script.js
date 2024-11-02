`strict mode`;

const images = [
  {
    src: "Twitter/20230927_164554.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/20230928_190958.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/20230928_191020.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/20230929_112210.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/01.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/02.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/03.jpg",
    alt: "image of Our Lady holding Our Lord",
  },

  {
    src: "Twitter/06.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/07.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/08.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/09.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/10.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/11.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/13.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/14.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/15.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/17.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/18.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/19.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/20.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/21.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/22.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/23.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/26.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/28.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/29.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/30.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/31.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/32.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/33.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/35.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/36.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/37.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/40.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/43.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/44.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/45.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/47.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
  {
    src: "Twitter/48.jpg",
    alt: "image of Our Lady holding Our Lord",
  },
];

const gallery = document.querySelector(".gallery");
const popupImage = document.querySelector(".popupImage");
const popup = document.getElementById("popup");
const close = document.querySelector(".close");

images.forEach((image) => {
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  // img.addEventListener("click", () => showPopup(img.src)); // Add click event listener
  gallery.appendChild(img);
});

function showPopup(imgEl) {
  popupImage.src = imgEl;
  popup.style.display = "flex";
  close.style.display = "block";
}

// Close the popup
function closePopup() {
  close.style.display = "none";
  popup.style.display = "none";
}

// console.log(document.querySelectorAll(".popup img"));

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    showPopup(img.src);
  });
});

// Add event listener to the close button
close.addEventListener("click", closePopup);
