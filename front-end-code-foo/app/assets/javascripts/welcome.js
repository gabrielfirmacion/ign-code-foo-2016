$( document ).ready(function() {
  defaultLoad();
  showArticles();
  showVideos();
  changeBackgroundImage();
  formatDate();
  formatTime();
  formatDivNumber();
  $('#video9').append("</br><span class='seemore'>SEE MORE VIDEOS</span>")
  $('#article9').append("</br><span class='seemore'>SEE MORE ARTICLES</span>")
  showLastTen();
});

var defaultLoad = function(){
  $("#videolist").show();
  $("#articlelist").hide();
  $("#videobutton").css({"background-color": "#d3222a", "color": "white"})
  $("#articlebutton").css({"background-color": "white", "color": "#d3222a"})
  hideLastTen();
};
  var showArticles = function(){
    $("#articlebutton").on("click",function(){
      $("#articlelist").show();
      $("#videolist").hide();
      $("#articlebutton").css({"background-color": "#d3222a", "color": "white"})
      $("#videobutton").css({"background-color": "white", "color": "#d3222a"})
      hideLastTen();
    })
  };

  var showVideos = function(){
    $("#videobutton").on("click",function(){
      $("#videolist").show();
      $("#articlelist").hide();
      $("#videobutton").css({"background-color": "#d3222a", "color": "white"})
      $("#articlebutton").css({"background-color": "white", "color": "#d3222a"})
      hideLastTen();
    })
  };

var changeBackgroundImage = function(){
  $(".child").on("mouseenter",function(){
    var thisDiv = $(this)[0].id
    var img = $(this)[0].children[0].innerHTML
    $("#"+thisDiv).css({"background-image": 'url(' + img + ')',"color": "white"});
  });
  $(".child").on("mouseleave",function(){
    var thisDiv = $(this)[0].id
    var img = $(this)[0].children[0].innerHTML
    $("#"+thisDiv).css({"background-image": 'none', "color": "black"})
  });
};

var formatDate = function(){
  var dates = {"1": "Jan", "2": "Feb", "3": "Mar", "4": "Apr", "5": "May", "6": "Jun"}
  for (i = 0; i < $(".date").length; i++){
    var oldFormat = $(".date")[i];
    var month = oldFormat.innerHTML[6]
    var test_str = oldFormat.innerHTML;
    var start_pos = test_str.indexOf('2') + 8;
    var end_pos = test_str.indexOf('T',start_pos);
    var text_to_get = test_str.substring(start_pos,end_pos)
    var newDate = dates[month] +" "+text_to_get
    oldFormat.innerHTML = newDate;
  }
}

var formatTime = function(){
  for (i=0; i< $(".time").length; i++){
    var oldFormat = $(".time")[i]
    if (oldFormat.innerHTML < 60){
      oldFormat.innerHTML = "0"+":"+ oldFormat.innerHTML
    }
    else if (oldFormat.innerHTML%60 < 10) {
      oldFormat.innerHTML = Math.floor(oldFormat.innerHTML/60) +":"+"0"+""+oldFormat.innerHTML%60
    }
    else {
      oldFormat.innerHTML = Math.floor(oldFormat.innerHTML/60) +":"+oldFormat.innerHTML%60
    }
  }
}

var formatDivNumber = function(){
  for (i=0; i< $(".divNumber").length; i++){
    var oldFormat = $(".divNumber")[i]
    if (oldFormat.innerHTML < 10){
      oldFormat.innerHTML = "0"+""+ oldFormat.innerHTML
    }
  }
}

var hideLastTen = function(){
  $('.video').slice(-10).hide();
  $('.article').slice(-10).hide();
   $('.seemore').show();
}

var showLastTen = function(){
  $('.seemore').on("click",function(){
    $('.video').slice(-10).show();
    $('.article').slice(-10).show();
    $('.seemore').hide();
  })
}

