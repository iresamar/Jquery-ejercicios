
$("document").ready(function() {

    $("#anuncio").text("¡CLICK! para cambiar de color")
    .css("width", "500px")
    .css("height", "500px")
    .hide()
    .fadeIn(3000)

    
});



$("#anuncio").on("click", function(){

    let colores = ["blue", "yellow", "red", "green", "grey", "orange", "purple"];
    let color = colores[Math.floor(Math.random() * colores.length)]

    $("#anuncio").css("background", color)

});
