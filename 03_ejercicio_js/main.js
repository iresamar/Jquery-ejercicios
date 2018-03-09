$("#elem1").on("mouseover", function(){
    $("#elem1").addClass("destacar")
    $("img").attr("src", "img/arbol.jpg")   
});

$("#elem2").on("mouseover", function(){
    $("#elem2").addClass("destacar")
    $("img").attr("src", "img/rio.jpg")   
});

$("#elem3").on("mouseover", function(){
    $("#elem3").addClass("destacar")
    $("img").attr("src", "img/lago.jpg")   
});

$("#elem4").on("mouseover", function(){
    $("#elem4").addClass("destacar")
    $("img").attr("src", "img/sol.jpg")   
});

$("li").on("mouseout", function(){
    $("li").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
});