// Sebastian You
// Restaurant Site
// August, 2021

// This function changes tab to corresponding name
function changeCurrentTab(event) {
  var currentPage = event.target.getAttribute('aria-controls');
  document.title = currentPage;
}