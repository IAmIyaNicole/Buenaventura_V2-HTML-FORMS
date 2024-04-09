document.addEventListener("click", function() {
    var dropdownButton = document.getElementById("dropdown-button");
    var dropdownMenu = document.getElementById("dropdown-menu");
    var submenus = document.querySelectorAll(".submenu");
  
    dropdownButton.addEventListener("click", function() {
      if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
      } else {
        dropdownMenu.style.display = "none";
      }
    });

  
    submenus.forEach(function(submenu) {
      var parentItem = submenu.parentNode;

      parentItem.addEventListener("mouseenter", function() {
        submenu.style.display = "block";
      });

      parentItem.addEventListener("mouseleave", function() {
        submenu.style.display = "none";
      });
    });
  
    document.addEventListener("click", function(event) {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
      }
    });
});