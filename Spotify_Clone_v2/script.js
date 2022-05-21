const songContainer = document.getElementsByClassName('song-container')[0];
const songContainer2 = document.getElementsByClassName('song-container')[1];
const mySongs = [
    {cover: 'covers/cover1.png',name: 'Warriyo Mortals',dir: 'songs/1.mp3',duration: '3:50'},
    {cover: 'covers/cover2.png',name: 'NEFFEX - Fight Back',dir: 'songs/2.mp3',duration: '3:17'},
    {cover: 'covers/cover3.png',name: 'Ed Sheran - Shape Of You',dir: 'songs/3.mp3',duration: '4:24'},
    {cover: 'covers/cover4.png',name: 'Tobu Hope',dir: 'songs/4.mp3',duration: '4:46'},
    {cover: 'covers/cover5.png',name: 'Lost Sky Fearless pt.II',dir: 'songs/5.mp3',duration: '3:14'},
    {cover: 'covers/cover6.png',name: 'Luis Fonsi- Despacito',dir: 'songs/6.mp3',duration: '4:42'},
    {cover: 'covers/cover7.png',name: 'Justin Bieber - Sorry',dir: 'songs/7.mp3',duration: '3:26'},
    {cover: 'covers/cover8.png',name: 'Justin Bieber - Let Me Love You',dir: 'songs/8.mp3',duration: '3:26'},
    {cover: 'covers/cover9.png',name: 'Alan Walker - Faded',dir: 'songs/9.mp3',duration: '3:33'},
    {cover: 'covers/cover10.png',name: 'Alan Walker Alone',dir: 'songs/10.mp3',duration: '2:44'},
]

mySongs.forEach(function(element, index){
    songContainer.innerHTML += `
    <div class="song-box">
        <img src="${element['cover']}">
        <p>${element['name']}</p>
        <div class="right">
        <p><strong>${element['duration']}</strong></p>
        <img id="${index}" class="play-btn" src="icons/play.png">
        </div>
        </div>
        `
    })



const playBtns = document.querySelectorAll('.play-btn');
const mainPauseBtn = document.getElementById('pause')
const audioRange = document.getElementById('audio-range');
const songCurrentTtime = document.getElementById('song-current-time');
const songDuration = document.getElementById('song-duration');
const songName = document.getElementById('song-name');
const songLogo = document.getElementById('song-logo');
const songVolume = document.getElementById('volume-range');
const songBackward = document.getElementById('backward');
const songForward = document.getElementById('forward');

playBtns.forEach(function(playBtn, index){
    const newSong = new Audio(mySongs[index]['dir']);
    songVolume.addEventListener('change', ()=>{
        newSong.volume = songVolume.value/100;
    })
    playBtn.addEventListener('click', ()=>{
        if(newSong.paused || newSong.currentTime<=0){
            newSong.play();
            setInterval(() => {
            }, 1000);
            playBtn.setAttribute('src', 'icons/pause.png');
            mainPauseBtn.setAttribute('src', 'icons/pause.png')
            setInterval(() => {
                songCurrentTtime.innerText = (newSong.currentTime/60).toFixed(2).split('.')[0] + ':' + (newSong.currentTime/60).toFixed(2).split('.')[1];
                songDuration.innerText = (newSong.duration/60).toFixed(2).split('.')[0] + ':' + (newSong.duration/60).toFixed(2).split('.')[1];
                audioRange.value = (newSong.currentTime/newSong.duration)*100;
            }, 1000);
            songName.innerText = mySongs[index]['name'];
            songLogo.setAttribute('src', mySongs[index]['cover']);
            mainPauseBtn.addEventListener('click', ()=>{
                if(newSong.paused){
                    newSong.play();
                    playBtn.setAttribute('src', 'icons/pause.png');
                    mainPauseBtn.setAttribute('src', 'icons/pause.png')
                }
                else{
                    newSong.pause();
                    playBtn.setAttribute('src', 'icons/play.png');
                    mainPauseBtn.setAttribute('src', 'icons/play.png')
                }
            })
            
            audioRange.addEventListener('change', ()=>{
                newSong.currentTime = (audioRange.value/100)*newSong.duration;
            })

            songForward.addEventListener('click', ()=>{
                if(index == 9){
                    index = -1;
                }
                else{
                    index++;
                }
                newSong.pause();
                const nextSong = new Audio(mySongs[index]['dir']);
                nextSong.play();
                songLogo.setAttribute('src', mySongs[index]['cover']);
                songName.innerText = mySongs[index]['name'];
                playBtns[index-1].setAttribute('src', 'icons/play.png');
                playBtns[index].setAttribute('src', 'icons/pause.png');

                mainPauseBtn.addEventListener('click', ()=>{
                    if(nextSong.paused){
                        newSong.pause();
                        nextSong.play();
                        playBtns[index-1].setAttribute('src', 'icons/play.png');
                        playBtns[index].setAttribute('src', 'icons/pause.png');
                        mainPauseBtn.setAttribute('src', 'icons/pause.png')
                    }
                    else{
                        newSong.pause();
                        nextSong.pause();
                        playBtns[index-1].setAttribute('src', 'icons/play.png');
                        playBtns[index].setAttribute('src', 'icons/play.png');
                        mainPauseBtn.setAttribute('src', 'icons/play.png')
                    }
                })

                songVolume.addEventListener('change', ()=>{
                    nextSong.volume = songVolume.value/100;
                })
            })

            songBackward.addEventListener('click', ()=>{
                if(index == 0){
                    index = 9;
                }
                else{
                    index--;
                }
                newSong.pause();
                const previousSong = new Audio(mySongs[index]['dir']);
                previousSong.play();
                songLogo.setAttribute('src', mySongs[index]['cover']);
                songName.innerText = mySongs[index]['name'];
                playBtns[index+1].setAttribute('src', 'icons/play.png');
                playBtns[index].setAttribute('src', 'icons/pause.png');

                mainPauseBtn.addEventListener('click', ()=>{
                    if(previousSong.paused){
                        newSong.pause();
                        previousSong.play();
                        playBtns[index+1].setAttribute('src', 'icons/play.png');
                        playBtns[index].setAttribute('src', 'icons/pause.png');
                        mainPauseBtn.setAttribute('src', 'icons/pause.png')
                    }
                    else{
                        newSong.pause();
                        previousSong.pause();
                        playBtns[index+1].setAttribute('src', 'icons/play.png');
                        playBtns[index].setAttribute('src', 'icons/play.png');
                        mainPauseBtn.setAttribute('src', 'icons/play.png')
                    }
                })

                songVolume.addEventListener('change', ()=>{
                    previousSong.volume = songVolume.value/100;
                })
            })
        }
        else{
            newSong.pause();
            playBtn.setAttribute('src', 'icons/play.png');
            audioRange.value = 0;
            songCurrentTtime.innerText = '';
            songDuration.innerText = '';
            mainPauseBtn.setAttribute('src', 'icons/play.png')
        }
    })
})