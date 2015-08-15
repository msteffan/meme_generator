

function update() {
    var link = "http://apimeme.com/meme?" + $.param({
        "meme" : $("#meme").val(),
        "top" : $("#top-text").val(),
        "bottom" : $("#bottom-text").val()
    });
    $("#meme-image").attr("src", link);
    // $("#meme-link").text(link).attr("href", link);
}
// $("form").change(function() {
//     update();
// }).submit(function() {
//     update();
//     return false;
// });
$("input[type='submit']").on("click", function(){
    update();
});


//
//     $.ajax({
//         url: "http://apimeme.com/meme?meme=Alright+Gentlemen+We+Need+A+New+Idea&top=Top+text&bottom=Bottom+text",
//         //"http://apimeme.com/meme?meme="+image+"&top="+TopText+"&bottom="+BottomText, // The URL to the API.
//         type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
//         data: {}, // Additional parameters here
//         dataType: 'json',
//         success: function(data){
//             $("#yourMeme").html(data)
//         },
//         error: function(err) {
//             console.log(err);
//         },
//         beforeSend: function(xhr) {
//         xhr.setRequestHeader("X-Mashape-Authorization", "chh9lOCWGsmsh8AQLQvuEH3d8DFAp1BtrIQjsnEsdviDvwe8un"); // Enter here your Mashape key
//         }
//     });
//
//
//
// })
