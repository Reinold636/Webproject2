const navItems = document.querySelectorAll(".nav-menu lic a");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent.trim().toLowerCase();

      
      switch (text) {
        case "home":
          window.location.href = "home.html";
          break;
        case "Products":
          window.location.href = "Products.html";
          break;
        case "aboutus":
          window.location.href = "aboutus.html";
          break;
        case "contactus":
          window.location.href = "contactus.html";
          break;
        case "faq":
          window.location.href = "faq.html";
          break;
        default:
          console.log("No route defined for:", text);
      }
           
        event.preventDefault();
    });
  });