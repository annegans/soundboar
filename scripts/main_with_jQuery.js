console.log("hello")
soundManager.onload = function () {
var beyonce = soundManager.createSound({
        id: 'mySound1',
        url: 'audiofiles/beyonce.mp3'
    });

    $('.beyonce')
        .on('click', function () {
            
            beyonce.pause();

        });
      $('.beyonce')
        .on('dblclick', function () {
            
            beyonce.play();

        });

var thexx = soundManager.createSound({
        id: 'mySound2',
        url: 'audiofiles/xx.mp3'
    });

    $('.thexx')
        .on('click', function () {
            
            thexx.pause();

        });
      $('.thexx')
        .on('dblclick', function () {
            
            thexx.play();

        });  

var ben = soundManager.createSound({
        id: 'mySound3',
        url: 'audiofiles/ben.mp3'
    });

    $('.ben')
        .on('click', function () {
            
            ben.pause();

        });
      $('.ben')
        .on('dblclick', function () {
            
            ben.play();

        });

var mr = soundManager.createSound({
        id: 'mySound4',
        url: 'audiofiles/Ms.mp3'
    });

    $('.mr')
        .on('click', function () {
            
            mr.pause();

        });
      $('.mr')
        .on('dblclick', function () {
            
            mr.play();

        }); 

var florance = soundManager.createSound({
        id: 'mySound5',
        url: 'audiofiles/cosmic love.mp3'
    });

    $('.florance')
        .on('click', function () {
            
            florance.pause();

        });
      $('.florance')
        .on('dblclick', function () {
            
            florance.play();

        });  

var rihannaSong =  soundManager.createSound({
        id: 'ririSong',
        url: 'audiofiles/ri.mp3'
    });

    $('.rihanna')
        .on('dblclick', function () {
            console.log("hello")
          
            // check if the song is loaded first
            if (!rihannaSong.loaded) {
                // first time loading/playing
                rihannaSong.load({
                    stream: false,
                    onload: function () {
                        // sound has fully-loaded
                        this.play();
                    }
                });
            }
            // if the song's already loaded, just play it
            else {
                // sound has already loaded
                rihannaSong.play();
            }
        });

    $('.rihanna')
        .on('click', function () {
            console.log("doubleClicking Ri")
                    rihannaSong.pause();
            }
        );

    soundManager.ontimeout(function () {
      // should be destroying the song object when it times out
    });

    $('.beyonce')
        .click(function () {
            $(this)
                .toggleClass('active');
        });

}



