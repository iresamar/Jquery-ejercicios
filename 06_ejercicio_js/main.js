$("p").on("click", function(){
    console.log(
        $("#banner").remove()
    );
});
$("img").on("click", function(){
    console.log(
        $(this).replaceWith("<div class = 'texto'>agregado al carro</div>")
    );
});