// console.log("Hello world!");
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".options");
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      var dropdownMenu = this.nextElementSibling;
      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
      } else {
        dropdownMenu.style.display = "block";
      }
      event.stopPropagation();
    });
  });
  window.addEventListener("click", function (event) {
    var dropdowns = document.querySelectorAll(".dropdown-menu");
    dropdowns.forEach(function (dropdownMenu) {
      dropdownMenu.style.display = "none";
    });
  });

  // Profile modal toggle
  var profileOptionsToggle = document.getElementById("profileOptionsToggle");
  var profileModal = document.getElementById("profileModal");

  profileOptionsToggle.addEventListener("click", function (event) {
    if (profileModal.style.display === "block") {
      profileModal.style.display = "none";
    } else {
      profileModal.style.display = "block";
    }
    event.stopPropagation();
  });

  // Close profile modal when clicking outside
  window.addEventListener("click", function (event) {
    if (
      event.target !== profileOptionsToggle &&
      !profileModal.contains(event.target)
    ) {
      profileModal.style.display = "none";
    }
  });
});
