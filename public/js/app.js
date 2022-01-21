var restaurant_url = "/movies";
var restaurant_array = []; // This creates an empty movie array
var restaurantCount = 0;

var currentIndex = 0;
var comment_url = "/comments";
var comment_array = [] //creates an empty array 


document.addEventListener("click", mouseclick => {
    const isDropDownButton = mouseclick.target.matches("[data-dropdown-button]");

    if (!isDropDownButton && mouseclick.target.closest("[data-dropdown]") != null) {
        return
    }

    let currentDropDown;
    if (isDropDownButton) {
        currentDropDown = mouseclick.target.closest("[data-dropdown]")
        currentDropDown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropDown) {
            return
        }
        dropdown.classList.remove("active")
    })
})