document.addEventListener("DOMContentLoaded", function () {
  // Functionality for opening and closing the sidebar
  function openNav() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }

  // Toggle visibility of dropdown menu when clicking on options icon
  document.querySelectorAll(".options").forEach((button) => {
    button.addEventListener("click", function (e) {
      const menu = e.target.nextElementSibling;
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  });

  // Additional functionality for all content
  document.querySelectorAll(".tweets").forEach((tweet) => {
    tweet.addEventListener("click", function () {
      alert("You clicked on a tweet!");
    });
  });
});
