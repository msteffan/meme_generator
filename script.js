// $("#unicorn").hide();
$("input[type='submit']").on("click", function(){
    // $("#unicorn").show();
    $("#unicorn").addClass("animate")
    update();
});

$("select").change(function() {
    backToHorse();
    $("#top-text").val("")
    $("#bottom-text").val("")
})


function update() {
    var link = "http://apimeme.com/meme?" + $.param({
        "meme" : $("#meme").val(),
        "top" : $("#top-text").val(),
        "bottom" : $("#bottom-text").val()
    });
    $("#meme-image").attr("src", link);
    $("#meme-image").attr("href", link);
}


function backToHorse() {
    $("#unicorn").removeClass("animate")

}
