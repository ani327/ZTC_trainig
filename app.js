const details = [
  "On 5/2/2017: Added a heading to the index page.",
  "On 17/8/2017: Changed the index title to 'User Profile' and added 'xyz.png'.",
  "On 24/11/2017: Changed the page layout to improve user experience.",
];

function showDetails(index) {
  document.getElementById("detailsText").textContent = details[index];
}
