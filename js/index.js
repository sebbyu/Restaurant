// This function changes tab to corresponding name
function changeCurrentTab(event) {
  var currentPage = event.target.getAttribute('aria-controls');
  document.title = currentPage;
}