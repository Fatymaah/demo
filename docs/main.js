var navContainer = document.querySelector(".navbar-nav");

// Get all nav items with class="nav-item" inside the container
var nav_links = navContainer.getElementsByClassName("nav-item");

// Loop through the nav items and add the active class to the current/clicked nav item
for (var i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}