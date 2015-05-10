console.log("hello")
soundManager.onload= function(){
  soundManager.createSound({
  id:'mySound1',
  url:'audiofiles/beyonce.mp3'
  });

$('.beyonce').on('click', function(){
    console.log("hello")
  var mySound = soundManager.createSound({
    url: 'audiofiles/beyonce.mp3' 
 });
////cal function
  mySound.play();

});

  soundManager.createSound({
  id:'mySound2',
  url:'audiofiles/ri.mp3'
  });

$('.rihanna').on('click', function(){
    console.log("hello")
  var mySound = soundManager.createSound({
    url: 'audiofiles/ri.mp3' 
 });
////cal function
  mySound.play();

});

soundManager.ontimeout(function() {
    
});

$('.beyonce').click(function() {
    $(this).toggleClass('active');
});

}


