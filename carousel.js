// Swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    minimumVelocity: 0.1,
    momentum: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Games showcase
// fetch("./games.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const gameContainer = document.querySelector(".gameshowcase");
//     data.forEach((game) => {
//       const gameCard = document.createElement("div");
//       gameCard.classList.add(
//         "bg-gray-800",
//         "rounded-lg",
//         "shadow-lg",
//         "flex",
//         "flex-col"
//       );
//       gameCard.innerHTML = `
// <img src="./images/gamebanners/${game.image}" alt="${game.title}" class="rounded-t-lg object-cover" />
// <div class="flex flex-col justify-between flex-grow py-4 px-2">
//   <h1 class="text-white text-md font-medium">${game.name}</h1>
//   <div class="flex flex-col justify-between flex-grow">
//     <p class="text-gray-400">${game.platform}</p>
//     <p class="text-gray-400 line-through">
//       <strong>Price:</strong> ${game.price}
//     </p>
//     <button class="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600 self-end"
//     onclick="window.location.href='https://wa.me/8801576539397'">
//       ৳ ${game.offer_price}
//     </button>
//   </div>
// </div>
// `;
//       gameContainer.appendChild(gameCard);
//     });

//     // Ensure last row fills the space
//     const fillLastRow = () => {
//       const columnCount =
//         getComputedStyle(gameContainer).gridTemplateColumns.split(" ").length;
//       const cards = gameContainer.querySelectorAll("div");
//       const lastRowCardCount = cards.length % columnCount;

//       if (lastRowCardCount !== 0) {
//         const emptyCells = columnCount - lastRowCardCount;
//         for (let i = 0; i < emptyCells; i++) {
//           const emptyCell = document.createElement("div");
//           emptyCell.classList.add("bg-transparent");
//           gameContainer.appendChild(emptyCell);
//         }
//       }
//     };

//     window.addEventListener("resize", fillLastRow);
//     fillLastRow();
//   });

// Games showcase
const data = [
  {
    name: "Grand Theft Auto V",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "Rockstar Games",
    genres: ["Action", "Adventure"],
    rating: 4.52,
    price: 1300,
    offer_price: 1100,
    image: "gta5.jpeg",
  },
  {
    name: "Tom Clancy's Rainbow Six® Siege",
    edition: "Deluxe",
    platform: "PS5 & PS4",
    publisher: "Ubisoft",
    genres: ["Action", "Shooter"],
    rating: 4.5,
    price: 1200,
    offer_price: 678,
    image: "rainbow6.jpeg",
  },
  {
    name: "Marvel’s Spider-Man 2",
    edition: "Standard",
    platform: "PS5",
    publisher: "Sony",
    genres: ["Action", "Adventure"],
    rating: 4.8,
    price: 1500,
    offer_price: 1387,
    image: "spiderman2.jpeg",
  },
  {
    name: "Assassin's Creed® Mirage",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "Ubisoft",
    genres: ["Action", "Adventure"],
    rating: 4.6,
    price: 1400,
    offer_price: 785,
    image: "mirage.jpeg",
  },
  {
    name: "Assassin’s Creed Shadows",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "Ubisoft",
    genres: ["Action", "Adventure"],
    rating: 4.7,
    price: 1400,
    offer_price: 936,
    image: "shadows.jpeg",
  },
  {
    name: "Call of Duty®: Black Ops Cold War",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "Activision",
    genres: ["Action", "Shooter"],
    rating: 4.5,
    price: 1300,
    offer_price: 855,
    image: "BlackOpsColdWar.jpeg",
  },
  {
    name: "Call of Duty®: Modern Warfare® 3",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "Activision",
    genres: ["Action", "Shooter"],
    rating: 4.5,
    price: 1200,
    offer_price: 645,
    image: "CallofDutyMW3.jpeg",
  },
  {
    name: "Call of Duty®: Warzone",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "Activision",
    genres: ["Action", "Shooter"],
    rating: 4.5,
    price: 1200,
    offer_price: 867,
    image: "CallofDutyWarzone.jpeg",
  },
  {
    name: "FIFA 24 Ultimate Edition",
    edition: "Ultimate",
    platform: "PS5 & PS4",
    publisher: "EA Sports",
    genres: ["Sports"],
    rating: 4.5,
    price: 1300,
    offer_price: 1250,
    image: "fifa24UltimateEdition.jpeg",
  },
  {
    name: "FIFA 24",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "EA Sports",
    genres: ["Sports"],
    rating: 4.5,
    price: 2200,
    offer_price: 1920,
    image: "fifa24.jpeg",
  },
  {
    name: "Madden NFL 22",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "EA Sports",
    genres: ["Sports"],
    rating: 4.5,
    price: 1900,
    offer_price: 685,
    image: "Madden.jpeg",
  },
  {
    name: "Mortal Kombat 11",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "Warner Bros. Interactive Entertainment",
    genres: ["Fighting"],
    rating: 4.5,
    price: 1200,
    offer_price: 779,
    image: "mortalkombat11.jpeg",
  },
  {
    name: "Battlefield 42",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "EA",
    genres: ["Action", "Shooter"],
    rating: 4.5,
    price: 1200,
    offer_price: 384,
    image: "Battlefield42.jpeg",
  },
  {
    name: "The Last of Us",
    edition: "Standard",
    platform: "PS5 & PS4",
    publisher: "Sony",
    genres: ["Action", "Adventure"],
    rating: 4.5,
    price: 1200,
    offer_price: 998,
    image: "TheLastofUs.jpeg",
  },
  {
    name: "Marvel's Spider-Man Remastered",
    edition: "Standard",
    platform: "PS5",
    publisher: "Sony",
    genres: ["Action", "Adventure"],
    rating: 4.5,
    price: 1200,
    offer_price: 798,
    image: "MarvelSpider-ManRemastered.jpeg",
  },
];

const gameContainer = document.querySelector(".gameshowcase");
data.forEach((game) => {
  const gameCard = document.createElement("div");
  gameCard.classList.add(
    "bg-gray-800",
    "rounded-lg",
    "shadow-lg",
    "flex",
    "flex-col"
  );
  gameCard.innerHTML = `
<img src="./images/gamebanners/${game.image}" alt="${game.title}" class="rounded-t-lg object-cover" />
<div class="flex flex-col justify-between flex-grow py-4 px-2">
<h1 class="text-white text-md font-medium">${game.name}</h1>
<div class="flex flex-col justify-between flex-grow">
  <p class="text-gray-400">${game.platform}</p>
  <p class="text-gray-400 line-through">
    <strong>Price:</strong> ${game.price}
  </p>
  <button class="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600 self-end"
  onclick="window.location.href='https://wa.me/8801576539397'">
    ৳ ${game.offer_price}
  </button>
</div>
</div>
`;
  gameContainer.appendChild(gameCard);
});

// Ensure last row fills the space
const fillLastRow = () => {
  const columnCount =
    getComputedStyle(gameContainer).gridTemplateColumns.split(" ").length;
  const cards = gameContainer.querySelectorAll("div");
  const lastRowCardCount = cards.length % columnCount;

  if (lastRowCardCount !== 0) {
    const emptyCells = columnCount - lastRowCardCount;
    for (let i = 0; i < emptyCells; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("bg-transparent");
      gameContainer.appendChild(emptyCell);
    }
  }
};

window.addEventListener("resize", fillLastRow);
fillLastRow();
