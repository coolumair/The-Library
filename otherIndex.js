

$(".link-checker").click(function () {
    console.log("bing");
    var imageLink = $("#url").val()
    $.get(imageLink)
        .done(function() { 
            $('.img-tester').empty();
            $(".img-tester").append('<img src="' + imageLink + '" alt="Book" class="book-cover-test">');
 
     }).fail(function() { 
         // Image doesn't exist - do something else.
         $('.img-tester').empty();
         $(".img-tester").append('<h1>Link does not work</h1>');
     }) 
 });
 
 
 $(".back").click(function () {
     window.location.href = "index.html";
 });