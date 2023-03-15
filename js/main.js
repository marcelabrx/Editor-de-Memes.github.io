//overall constant
const $ = (selector) => document.querySelector(selector) 

// dark and light mode
$("#light-theme").addEventListener("click", () =>{
    const changeTheme = $("body").getAttribute("data-theme")
    if ("body" != changeTheme){
        $("#dark-theme").classList.remove("hidden")
        $("#light-theme").classList.add("hidden")
        $("body").removeAttribute("data-theme", "dark_theme")
    } else{
        $("#dark-theme").classList.add("hidden")
        $("#light-theme").classList.remove("hidden")
        $("body").setAttribute("data-theme", "dark_theme")
    }
})