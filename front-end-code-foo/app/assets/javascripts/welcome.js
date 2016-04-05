$( document ).ready(function() {
  showArticles();
  showVideos();
});
  var showArticles = function(){
    $("#articlebutton").on("click",function(){
      $("#articlelist").show();
      $("#videolist").hide();
      console.log("working")
    })
  };

  var showVideos = function(){
    $("#videobutton").on("click",function(){
      $("#videolist").show();
      $("#articlelist").hide();
      console.log("working")
    })
  };