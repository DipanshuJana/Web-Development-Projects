console.log("Welcome to spotify");

// Initialize all the global variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let mainPlayBtn = document.getElementById('mainPlayBtn');
let websiteProgressBar = document.getElementById('progressBar');
let websiteMusicBar = document.getElementById('musicBar');
let songDetails = document.getElementById('songDetails');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Array of all the songs and the details used in the website
let songs = [
    {songName: "Warryo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/cover1.png"},
    {songName: "NEFFEX - Fight Back", filePath: "songs/2.mp3", coverPath: "covers/cover2.png"},
    {songName: "Ed Sheeran - Shape Of You", filePath: "songs/3.mp3", coverPath: "covers/cover3.png"},
    {songName: "Tobu - Hope", filePath: "songs/4.mp3", coverPath: "covers/cover4.png"},
    {songName: "Lost Sky - Fearless pt.II", filePath: "songs/5.mp3", coverPath: "covers/cover5.png"},
    {songName: "Luis Fonsi - Despacito", filePath: "songs/6.mp3", coverPath: "covers/cover6.png"},
    {songName: "Justin Bieber - Sorry", filePath: "songs/7.mp3", coverPath: "covers/cover7.png"},
    {songName: "Justin Beiber - Let Me Love You", filePath: "songs/8.mp3", coverPath: "covers/cover8.png"},
    {songName: "Alan Walker - Faded", filePath: "songs/9.mp3", coverPath: "covers/cover9.png"},
    {songName: "Alan Walker - Alone", filePath: "songs/10.mp3", coverPath: "covers/cover10.png"},
    {songName: "Alan Walker - On My Way", filePath: "songs/11.mp3", coverPath: "covers/cover11.png"},
    {songName: "Alan Walker - The Spectre", filePath: "songs/12.mp3", coverPath: "covers/cover12.png"}
]

// Change song details Logic
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Play pause logic
mainPlayBtn.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mainPlayBtn.classList.remove('fa-play-circle');
        mainPlayBtn.classList.add('fa-pause-circle');
        websiteMusicBar.style.opacity = 1;
    }
    else{
        audioElement.pause();
        mainPlayBtn.classList.remove('fa-pause-circle');
        mainPlayBtn.classList.add('fa-play-circle');
        websiteMusicBar.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // Update seekbaar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    websiteProgressBar.value = progress + 1
})

websiteProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = websiteProgressBar.value * audioElement.duration/100;
})

const makeAllplay = ()=>{
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('play')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplay()
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        songDetails.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        websiteMusicBar.style.opacity = 1;
        mainPlayBtn.classList.remove('fa-play-circle');
        mainPlayBtn.classList.add('fa-pause-circle');
    })
});

document.getElementById('forward').addEventListener('click', ()=>{
    if (songIndex>=12){
        songIndex = 0;
    }
    else{
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songDetails.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    // websiteMusicBar.style.opacity = 1;
    mainPlayBtn.classList.remove('fa-play-circle');
    mainPlayBtn.classList.add('fa-pause-circle');
})

document.getElementById('backward').addEventListener('click', ()=>{
    if (songIndex<=0){
        songIndex = 12;
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songDetails.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    // websiteMusicBar.style.opacity = 1;
    mainPlayBtn.classList.remove('fa-play-circle');
    mainPlayBtn.classList.add('fa-pause-circle');   
})