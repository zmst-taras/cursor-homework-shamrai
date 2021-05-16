window.addEventListener('keydown', function (e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("button")
    setTimeout(()=>{
        key.classList.remove("button");

    }, 100)
    audio.currentTime = 0; 
    audio.play();
})