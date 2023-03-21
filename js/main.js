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

//------filters-------
const filter = () => {
    $(".section__box").style.filter = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#gray__scale").value}%) sepia(${$("#sepia").value}%) hue-rotate(${$("#hue").value}deg) saturate(${$("#saturation").value}%) invert(${$("#negative").value})`
}

//brightness
$("#brightness").addEventListener("input", filter)

//opacity
$("#opacity").addEventListener("input", filter)

//contrast
$("#contrast").addEventListener("input", filter)

//blur
$("#blur").addEventListener("input", filter)

//greyScale
$("#gray__scale").addEventListener("input", filter)

//sepia
$("#sepia").addEventListener("input", filter)

//hue
$("#hue").addEventListener("input", filter)

//saturation
$("#saturation").addEventListener("input", filter)

//negative
$("#negative").addEventListener("input", filter)

//btn reset filters
$(".btn__reset").addEventListener("click", () =>{
    $("#brightness").value = "1"
    $("#opacity").value = "1"
    $("#contrast").value = "100"
    $("#blur").value = "0"
    $("#gray__scale").value = "0"
    $("#sepia").value = "0"
    $("#hue").value = "0"
    $("#saturation").value = "100"
    $("#negative").value = "0"
    $(".section__box").style.filter = "none"
})

// *********section-text*************
// insert superior text
$("#top__text").addEventListener("input", () =>{
    $("#superior__text").innerText = $("#top__text").value
})

// insert inferior text
$("#bottom__text").addEventListener("input", () =>{
    $("#inferior__text").innerText = $("#bottom__text").value
})

//-----buttons checked-------
//superior check
$("#superior__check").addEventListener("input", () => {
    if ($("#superior__check").checked){
        $("#superior__text").classList.add("hidden")
    } else{
        $("#superior__text").classList.remove("hidden")
    }
})

//inferior check
$("#inferior__check").addEventListener("input", () => {
    if ($("#inferior__check").checked){
        $("#inferior__text").classList.add("hidden")
    } else{
        $("#inferior__text").classList.remove("hidden")
    }
})

// -----change Font-family-----
$("#fonts__meme").addEventListener("input", () =>{
    $("#superior__text").style.fontFamily = $("#fonts__meme").value
    $("#inferior__text").style.fontFamily = $("#fonts__meme").value
})

//-----change Font-size-----
$("#font__number").addEventListener("input", () =>{
    $("#superior__text").style.fontSize = `${$("#font__number").value}px`
    $("#inferior__text").style.fontSize = `${$("#font__number").value}px`
})