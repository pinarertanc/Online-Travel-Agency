const navBarIconToggle = document.querySelector(".sidebarIcon");
const navBarList = document.querySelector(".navbar-list");

navBarIconToggle.addEventListener("click", ()=>{
  navBarList.classList.toggle('active');
});

