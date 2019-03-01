$.ajaxSetup({ cache: false });

$(document).ready(function() {
  var qTweet = "";
  
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json) {
    $(".quote").html(json[0].content.slice(3, -5));
    $("#author").html("- " + json[0].title);
    qTweet = json[0].content.slice(3, -5) + "  - " + json[0].title;
  });
  
  $("#getQuote").on("click", function(){
      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json) {
        $(".quote").html(json[0].content.slice(3, -5));
        $("#author").html("- " + json[0].title);
        qTweet = json[0].content.slice(3, -5) + "  - " + json[0].title;
      });
    });
  
  $("#tweet").on("click", function(){
    var sendTwt = 'http://twitter.com/home?status=' + encodeURIComponent(qTweet);
 window.open(sendTwt,'_blank');
  });
});