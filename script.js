//........Investors-hidden-container
const investorsNavItem = document.getElementById("investors-list");
const investorContainer = document.getElementById("Investors-hidden-container");

let isMouseInContainer2 = false;

function showContainer2(){
    investorContainer.style.display = "block";
}
function hideContainer2(){
    if(!isMouseInContainer2){
        investorContainer.style.display = "none"
    }
}
investorsNavItem.addEventListener("mouseenter", showContainer2);
investorsNavItem.addEventListener("mouseleave", hideContainer2);


investorContainer.addEventListener("mouseenter", () =>{
    isMouseInContainer2 = true;
    showContainer2()
});
investorContainer.addEventListener("mouseleave", () =>{
    isMouseInContainer2 = false;
    hideContainer2()
});


// Get the "Vehicles" nav item and the container
const vehiclesNavItem = document.getElementById('vehicles');
const vehicleContainer = document.getElementById('vehicle-container');

// Variable to track whether the mouse is over the container
let isMouseInContainer = false;

// Function to show the container
function showContainer() {
  vehicleContainer.style.display = 'block';
}
// Function to hide the container
function hideContainer() {
  // Only hide the container if the mouse is not inside it
  if (!isMouseInContainer) {
    vehicleContainer.style.display = 'none';
  }
}
// Add event listeners for mouseenter and mouseleave on the Vehicles nav item
vehiclesNavItem.addEventListener('mouseenter', showContainer);
vehiclesNavItem.addEventListener('mouseleave', hideContainer);

// Add event listeners for mouseenter and mouseleave on the container itself
vehicleContainer.addEventListener('mouseenter', () => {
  // Keep showing the container when the mouse is over it
  isMouseInContainer = true;
  showContainer();
});

vehicleContainer.addEventListener('mouseleave', () => {
  // Hide the container when the mouse leaves the container
  isMouseInContainer = false;
  hideContainer();
});

// ...........carousel

let index = 0;

function showSlides() {
    const slides = document.querySelector('.carousel');
    const cards = slides.children.length;
    index++;

    // We show three cards at a time, so we need to loop after two shifts
    if (index > (cards / 3) - 1) {
        index = 0;
    }

    const translateX = -(index * 960); // 960px = width of 3 cards
    slides.style.transform = `translateX(${translateX}px)`;
}

setInterval(showSlides, 4000);  // Slide every 2 seconds

// let index = 0;

// function showSlides() {
//   const slides = document.querySelector('.carousel');
//   const cards = slides.children.length;
//   const screenWidth = window.innerWidth;

//   // Determine how many cards to show at once based on screen width
//   let cardsPerView = screenWidth <= 600 ? 1 : 3; // 1 card for mobile, 3 cards for larger screens
  
//   index++;

//   // Loop through cards based on how many are shown at once
//   if (index > (cards / cardsPerView) - 1) {
//     index = 0;
//   }

//   const translateX = -(index * screenWidth * cardsPerView); // Translate according to the number of cards shown
//   slides.style.transform = `translateX(${translateX}px)`;
// }

// setInterval(showSlides, 4000); // Slide every 4 seconds
