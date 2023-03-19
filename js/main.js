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
$("#dark-theme").addEventListener("click", () =>{
    const addTheme = $("body").getAttribute("data-theme")
    if ("body" != addTheme){
        $("#dark-theme").classList.add("hidden")
        $("#light-theme").classList.remove("hidden")
        $("body").setAttribute("data-theme", "dark_theme")
    } else{
        $("#dark-theme").classList.remove("hidden")
        $("#light-theme").classList.add("hidden")
        $("body").removeAttribute("data-theme", "dark_theme")
    }
})

//panel image
$("#image_btn").addEventListener("click", () =>{
    $(".edition__image").classList.remove("hidden")
    $(".btn__xmark").classList.remove("hidden")
    $(".edition__text").classList.add("hidden")
})

//panel text
$("#txt_btn").addEventListener("click", () =>{
    $(".edition__text").classList.remove("hidden")
    $(".btn__xmark").classList.remove("hidden")
    $(".edition__image").classList.add("hidden")
})

//btn close pannel
$(".btn__xmark ").addEventListener("click", () => {
    $(".edition__image").classList.add("hidden") || $(".edition__text").classList.add("hidden")
    $(".aside").style.display = "none"
    // $(".aside").classList.add("hidden")
    $(".btn__xmark").classList.add("hidden")
})

// *********section-image*************
// url image 
$("#url__meme").addEventListener("input", () =>{
    $(".section__box").style.backgroundImage = `url(${$("#url__meme").value})`
})

//color back-image
$("#back__color").addEventListener("input", () =>{
    $(".section__box").style.backgroundColor =  $("#back__color").value
})

//blend image
$("#blend__img").addEventListener("input", () =>{
    $(".section__box").style.backgroundBlendMode = $("#blend__img").value
})

//filters
//brightness
$("#brightness").addEventListener("input", () =>{
    $(".section__box").style.filter = `brightness(${$("#brightness").value})`
})

//opacity
$("#opacity").addEventListener("input", () =>{
    $(".section__box").style.filter = `opacity(${$("#opacity").value})`
})

//contrast
$("#contrast").addEventListener("input", () =>{
    $(".section__box").style.filter = `contrast(${$("#contrast").value}%)`
})

//blur
$("#blur").addEventListener("input", () =>{
    $(".section__box").style.filter = `blur(${$("#blur").value}px)`
})

//greyScale
$("#gray__scale").addEventListener("input", () =>{
    $(".section__box").style.filter = `grayscale(${$("#gray__scale").value}%)`
})

//sepia
$("#sepia").addEventListener("input", () =>{
    $(".section__box").style.filter = `sepia(${$("#sepia").value}%)`
})

//hue
$("#hue").addEventListener("input", () =>{
    $(".section__box").style.filter = `hue-rotate(${$("#hue").value}deg)`
})

//saturation
$("#saturation").addEventListener("input", () =>{
    $(".section__box").style.filter = `saturate(${$("#saturation").value}%)`
})

//negative
$("#negative").addEventListener("input", () =>{
    $(".section__box").style.filter = `invert(${$("#negative").value})`
})
