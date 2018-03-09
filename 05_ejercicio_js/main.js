$("Document").ready (function(){
    $("#carrete").hide()
});
$(document).on("click", function(){
    console.log(
        $("h1").hide()
    );
    console.log(
        $("#carrete").show()
    );
});
$("img").on("mouseover", function(){
    $(this).css("width", "300")
})
$("img").on("mouseout", function(){
    $(this).css("width", "250")
})