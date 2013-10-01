$(function() {

  // var ipAddress = "192.168.111.111";
  // var ipAddress = "http://localhost:8071/motion-control/update";
  // var ipAddress = "http://10.0.0.74:8071/motion-control/update"
  // var fast = 1
  // var medium = 0.6
  // var slow = 0.3
  // var speed = fast


  var closeNotification = function(e) {
    $(".notifications").html("")
  }

  var displayNotification = function(text) {
    $(".notifications").text(text);
    $(".notifications").one("click", closeNotification);
  }
  
  var errorText = "Oh-oh-oh-oh-oh-oh-oh-oh-oh oh-oh";

  var moveDevice = function(data, errorText) {
    $.ajax(ipAddress, {
      data: data,
      dataType: "jsonp",
      // success: function() { displayNotification(successText) },
      error:   function() { displayNotification(errorText) }
    });
  }

  var move = function(direction, distance) {
    data = {};
    data[direction] = distance;
    moveDevice(
      data,
      errorText      
    );
  }

  $('.forward').on("click", function() {
    move('forward', 1);
  });

  $('.backwards').on("click", function() {
    move('forward', -1);
  });

  $('.left').on("click", function() {
    move('turn', -1);
  });

  $('.right').on("click", function() {
    move('turn', 1);
  });

  $('.strafe_left').on("click", function() {
    move('strafe', -1);
  });

  $('.strafe_right').on("click", function() {
    move('strafe', 1);
  });


  var backward = function(){ 
    move('forward', -1);
  };

  var forward = function(){
    move('forward', 1);
  }; 

  var slide_left = function() {
    move('strafe', -1);
  };

  var slide_right = function() {
    move('strafe', 1);
  };

  $('.forward-backward').on("click", function() {
    move('forward', 1); 
    setTimeout(backward, 4000);
  });

  $('.forward-backward-forward').on("click", function() {
    move('forward', 1); 
    setTimeout(backward, 4000);
    setTimeout(forward, 8000);
  });

  ///MUSIC START
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'U Can t Touch This - Mc Hammer.mp3');
    // audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
    audioElement.play();
    }, true);
  //MUSIC END

  $('.stop').on("click", function() {
    console.log("in stop")
    move('forward', 0);
    audioElement.pause();
  });

  $('.square').on("click", function(){    
    audioElement.play();
    console.log("log0");
    move('forward', 1);
    console.log("log1");
    setTimeout(backward, 1000);
    console.log("log2");
    setTimeout(forward, 2000);
    console.log("log3");
    setTimeout(backward, 3000);
    console.log("log4");
    setTimeout(forward, 4000);
    setTimeout(backward, 5000);
    setTimeout(forward, 6000);
    setTimeout(backward, 7000);
    setTimeout(forward, 8000);
    setTimeout(slide_left, 9000);
    setTimeout(slide_right, 12000);
    setTimeout(slide_left, 15000);
    setTimeout(slide_right, 18000);
  });

  /*
  bindMovement(
    //".forward",
    {forward: 1, forward: -1},
    "Hammer Time => FORWARD",
    errorText
  );
  
  bindMovement(
    ".backwards", 
    {forward: -1}, 
  "Hammer Time => BACKWARDS", 
  errorText
  )

  bindMovement(
    ".left",
    {turn: -1},
    "Hammer Time => SPINNING LEFT",
    errorText
  )
  
  bindMovement(
    ".right",
    {turn: 1},
    "Hammer Time => SPINNING RIGHT",
    errorText
    )
    
  bindMovement(
    ".strafe_left",
    {strafe: -1},
    "Hammer Time => SLIDE LEFT",
    errorText
  )
  
  bindMovement(
    ".strafe_rirght",
    {strafe: 1},
    "Hammer Time => SLIDE RIGHT",
    errorText
  )
  
  bindMovement(
    ".stop",
    {forward: 0},
    "Hammer Time => STOP",
    errorText
  )
  */

});
