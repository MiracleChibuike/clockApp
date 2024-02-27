var menuIcon = document.getElementById("menuIcon");

var navBarContents = document.querySelector(".nav-contents");

menuIcon.addEventListener("click", ()=>{
    if (navBarContents.style.display === "none") {
        navBarContents.style.display = "block"
    }else{
        navBarContents.style.display = "none"
        navBarContents.classList.add("rotate")
    }
    console.log(navBarContents)
})