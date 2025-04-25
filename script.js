
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let bar = document.getElementById('bar');
let masterSongName = document.getElementById('masterSongName');
masterSongName.style.fontFamily="font-family: Arial, Helvetica, sans-serif";
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let volumeSlider = document.getElementById('volumeSlider'); 
let Volume= document.getElementById('volume1')
let display=document.getElementById('volume-display');

let songs = [
    { songName: "Warriyo_Mortals",filePath: "songs/1.mp3.mp3", coverPath: "covers/1.jpg.jpg" },
    { songName: "Desi Kalakar", filePath: 'songs/2.mp3.mp3', coverPath: "covers/2.jpg.jpg" },
    { songName: "Kya Baat Hai", filePath: 'songs/3.mp3.mp3', coverPath: "covers/3.jpg.jpg" },
    { songName: "Sanam Teri Kasam", filePath: 'songs/4.mp3.mp3', coverPath: "covers/4.jpg.jpg" },
    { songName: "Sanam Re", filePath: 'songs/5.mp3.mp3', coverPath: "covers/5s.jpg.jpg" },
    { songName: "Aaoge Tum Kabhi", filePath: 'songs/6.mp3.mp3', coverPath: "covers/6.jpg.jpg" },
    { songName: "Tum hi ho", filePath: 'songs/7.mp3.mp3', coverPath: "covers/7.jpg.jpg" },
    { songName: "Teri Bahon me", filePath: 'songs/8.mp3.mp3', coverPath: "covers/8.jpg.jpg" },
    { songName: "Pahle bhi me", filePath: 'songs/9.mp3.mp3', coverPath: "covers/9.jpg.jpg" },
    { songName: "Phir_Bhi Tumko Chahunga", filePath: 'songs/10.mp3.mp3', coverPath: "covers/10.jpg.jpg" },
    { songName: "Main Aa Likhun Tu Aa Jaaye", filePath: 'songs/11.mp3.mp3', coverPath: "covers/3.jpg.jpg" },
];


// Update song items
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Play/Pause functionality
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
      
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
       
    }
});
// volume slider
Volume.addEventListener('input', () => {
    let get = Volume.value / 100; // Convert 0-100 to 0-1
    audioElement.volume=get;
    display.innerText=Volume.value;
});

// Update the progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek functionality
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllplays=  ()=>{
  
    Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllplays();
       
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play()
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       

    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;   
    }
    else{
        gif.style.opacity = 1;
        songIndex+=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    
    }
    else{
        songIndex-=1;
        gif.style.opacity = 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})  