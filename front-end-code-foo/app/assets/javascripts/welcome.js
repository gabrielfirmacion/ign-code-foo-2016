$( document ).ready(function() {
  showArticles();
  showVideos();
  changeBackgroundImage();
});
  var showArticles = function(){
    $("#articlebutton").on("click",function(){
      $("#articlelist").show();
      $("#videolist").hide();
      $("#articlebutton").css({"background-color": "#d3222a", "color": "white"})
      $("#videobutton").css({"background-color": "white", "color": "#d3222a"})
      console.log("working")
    })
  };

  var showVideos = function(){
    $("#videobutton").on("click",function(){
      $("#videolist").show();
      $("#articlelist").hide();
      $("#videobutton").css({"background-color": "#d3222a", "color": "white"})
      $("#articlebutton").css({"background-color": "white", "color": "#d3222a"})
      console.log("working")
    })
  };

var changeBackgroundImage = function(){
  $(".child").on("mouseenter",function(){
    var thisDiv = $(this)[0].id
    var img = $(this)[0].children[0].innerHTML
    $("#"+thisDiv).css({"background-image": 'url(' + img + ')', "color": "white"});
    console.log(thisDiv)
  });
  $(".child").on("mouseleave",function(){
    var thisDiv = $(this)[0].id
    var img = $(this)[0].children[0].innerHTML
    $("#"+thisDiv).css({"background-image": 'none', "color": "black"})
  });
};
