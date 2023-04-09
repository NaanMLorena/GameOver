// NAVBAR

// Faz com que a navbar esapareça ou apareça dependendo da posição do scroll do mouse
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-68px";
  }
  prevScrollpos = currentScrollPos;
};


// SLIDE

window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
  
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive, 100, slides[i]); //Doesn't be worked in IE-9
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 100, slides[i]); //Doesn't be worked in IE-9
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 4000);
  }


// MUTE BUTTON

var video = document.getElementById("myVideo");
    
function toggleMute() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

const muteButton = document.getElementById("mute-btn");
muteButton.addEventListener("click", function() {
  muteButton.classList.toggle("muted-icon");
});


// PLAY BUTTON

var video = document.getElementById("myVideo");
    
function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", function() {
  playButton.classList.toggle("paused-icon");
});