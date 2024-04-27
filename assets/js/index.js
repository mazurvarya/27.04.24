let play = document.getElementById("play");
let pause = document.getElementById("pause");
let volume = document.getElementById("fullvolume");
let next = document.getElementById("next");
let volumerange = document.getElementById("volume range");
let scale = document.getElementById("scale");

let video = document.querySelector("video");

console.log(play, pause, fvolume, mvolume, next, scale);

play.addEventListener("click", () => {
    if (video.paused == true) {
        video.play();
    }
    else {
        video.paused();
    }
    console.dir(video);
})

volumerange.addEventListener("input", () => {
    console.log(volumerange.value);
    video.volume = volumerange.value;
})

volume.addEventListener("click", () =>{
    if(volumerange  )
    volume
})
