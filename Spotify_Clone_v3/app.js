// initializing variables
const songsContainer = document.getElementsByClassName('songs-container')[0];
const progressBar = document.getElementsByClassName('progress-bar')[0];
const volumeBar = document.getElementsByClassName('volume-bar')[0];
const songCurrentTime = document.getElementsByClassName('current-time')[0];
const songDuration = document.getElementsByClassName('song-duration')[0];
const mainPlayBtn = document.getElementsByClassName('main-play-btn')[0];
const songImg = document.getElementsByClassName('song-img')[0];
const songName = document.getElementsByClassName('song-name')[0];
const songAlbum = document.getElementsByClassName('song-album')[0];
const forewardBtn = document.getElementsByClassName('foreward-btn')[0];
const backwardBtn = document.getElementsByClassName('backward-btn')[0];

// creating the list of all the songs with their specific names, headings and thumbnails
const songsList = [
    ['assets/img/0.jpg', 'assets/audio/0.mp3', 'Jaan Hai Meri', 'Radhe Shyam'],
    ['assets/img/1.jpg', 'assets/audio/1.mp3', 'Ashique Aa Gayi', 'Radhe Shyam'],
    ['assets/img/2.jpg', 'assets/audio/2.mp3', 'Ninnele', 'Radhe Shyam'],
    ['assets/img/3.jpg', 'assets/audio/3.mp3', 'Main Ishque Mein Hoon Naa', 'Radhe Shyam'],
    ['assets/img/4.jpg', 'assets/audio/4.mp3', 'Meri Jaan', 'Gangubai Kathiawadi'],
    ['assets/img/5.jpg', 'assets/audio/5.mp3', 'Dholida', 'Gangubai Kathiawadi'],
    ['assets/img/6.jpg', 'assets/audio/6.mp3', 'Shikayat', 'Gangubai Kathiawadi'],
    ['assets/img/7.jpg', 'assets/audio/7.mp3', 'Besabriyaan', 'MS Dhoni: The Untold Story'],
    ['assets/img/8.jpg', 'assets/audio/8.mp3', 'Bijlee Bijlee', 'Harris Sandhu'],
    ['assets/img/9.jpg', 'assets/audio/9.mp3', 'Arabi Kuthu', 'Beast'],
    ['assets/img/10.jpg', 'assets/audio/10.mp3', 'Kalaavathi', 'Sarkaru Vaari Paata'],
    ['assets/img/11.jpg', 'assets/audio/11.mp3', 'Butta Bomma', 'Ala Vaikunthapurramuloo'],
    ['assets/img/12.jpg', 'assets/audio/12.mp3', 'Kokh Ke Raat Mein', 'KGF: Chapter 1'],
    ['assets/img/13.jpg', 'assets/audio/13.mp3', 'Srivalli', 'Pushpa: The Rise'],
    ['assets/img/14.jpg', 'assets/audio/14.mp3', 'Pasoori', 'Coke Studio'],
    ['assets/img/15.jpg', 'assets/audio/15.mp3', 'Sterio Hearts', 'Gym Class Heroes'],
    ['assets/img/16.jpg', 'assets/audio/16.mp3', 'Let me Down Slowly', 'Alec Benjamin'],
    ['assets/img/17.jpg', 'assets/audio/17.mp3', 'Unstoppable', 'Sia'],
    ['assets/img/18.jpg', 'assets/audio/18.mp3', 'Believer', 'Imagine Dragons'],
    ['assets/img/19.jpg', 'assets/audio/19.mp3', 'Faded', 'Alan Walker'],
    ['assets/img/20.jpg', 'assets/audio/20.mp3', 'Let Me Love You', 'Justin Beiber'],
    ['assets/img/21.jpg', 'assets/audio/21.mp3', 'Shape Of You', 'Ed Sheran'],
    ['assets/img/22.jpg', 'assets/audio/22.mp3', 'Sorry', 'Justin Beiber'],
    ['assets/img/23.jpg', 'assets/audio/23.mp3', 'Memories', 'Maroon 5']
];

// function for inserting all the cards
function insertCards(songsList){
    let html = '';
    for (i in songsList){
        html += `
        <!-- card start -->
        <div class="card">
            <img src="${songsList[i][0]}" height="125px" alt="">
            <audio preload="auto" src="${songsList[i][1]}"></audio>
            <span><img class="card-play-btn" src="assets/icon/play.png" alt=""></span>
            <div class="song-details">
                <h2>${songsList[i][2]}</h2>
                <h4>${songsList[i][3]}</h4>
            </div>
        </div>
        <!-- card end -->
        `;
    }
    
    songsContainer.innerHTML = html;
};

insertCards(songsList);

// logic for playing the song when the play button is clicked
const cardPlayBtn = document.querySelectorAll('.card-play-btn');
cardPlayBtn.forEach(function(playBtn, index){
    const audio = document.querySelectorAll(`audio`)[index];
    playBtn.addEventListener('click', ()=>{
        if (audio.currentTime <= 0 || audio.paused){
            const audioList = document.querySelectorAll(`audio`);
            for (let i = 0; i < audioList.length; i++) {
                audioList[i].pause();
                if(audioList[i] != audio){
                    audioList[i].currentTime = 0;
                }
            }
            cardPlayBtn.forEach((element)=>{
                element.setAttribute('src', 'assets/icon/play.png');
            })
            audio.play();
            playBtn.setAttribute('src', 'assets/icon/pause.png');
            mainPlayBtn.setAttribute('src', 'assets/icon/pause.png');
            updateDetails(audio, progressBar, index, cardPlayBtn);
            loadNextPrev(index);
        }   
        else{
            audio.pause();
            playBtn.setAttribute('src', 'assets/icon/play.png');
            mainPlayBtn.setAttribute('src', 'assets/icon/play.png');
        }
    })
})

// function for updating all the new music details if another music is played
function updateNewMusicDetails(index, audioList){
    songImg.setAttribute('src', `assets/img/${index}.jpg`);
    cardPlayBtn[index].setAttribute('src', `assets/icon/pause.png`);
    mainPlayBtn.setAttribute('src', 'assets/icon/pause.png');
    progressBar.addEventListener('change', ()=>{
        audioList[index].currentTime = (progressBar.value/100) * audioList[index].duration;
    });
    audioList[index].addEventListener('timeupdate', ()=>{
        progressBar.value = parseInt((audioList[index].currentTime / audioList[index].duration)*100);
        songDuration.innerText = (audioList[index].duration/60).toFixed(2).split('.')[0] + ":" + (audioList[index].duration/60).toFixed(2).split('.')[1];
        songCurrentTime.innerText = (audioList[index].currentTime/60).toFixed(2).split('.')[0] + ":" + (audioList[index].currentTime/60).toFixed(2).split('.')[1];
    })
    songName.innerText = songsList[index][2];
    songAlbum.innerText = songsList[index][3];
    audioList[index].play();
}

// function for updating the music details for the current song which is being played
function updateDetails(audio, progressBar, index, cardPlayBtn){
    // updating the progress bar and the song duration and its current time when the song being played
    audio.addEventListener('timeupdate', ()=>{
        progressBar.value = parseInt((audio.currentTime / audio.duration)*100);
        songDuration.innerText = (audio.duration/60).toFixed(2).split('.')[0] + ":" + (audio.duration/60).toFixed(2).split('.')[1];
        songCurrentTime.innerText = (audio.currentTime/60).toFixed(2).split('.')[0] + ":" + (audio.currentTime/60).toFixed(2).split('.')[1];
        if(progressBar.value === 100 || audio.currentTime === audio.duration){
            mainPlayBtn.setAttribute('src', 'assets/icon/play.png');
            cardPlayBtn[index].setAttribute('src', 'assets/icon/play.png');
            audio.currentTime = 0;
            progressBar.value = 0;
        }
    });

    // updating the logo and the name of the song which is being played
    songImg.setAttribute('src', `assets/img/${index}.jpg`);
    songName.innerText = songsList[index][2];
    songAlbum.innerText = songsList[index][3];

    // changing the current time of the song when the progress bar is triggered
    progressBar.addEventListener('change', ()=>{
        audio.currentTime = (progressBar.value/100) * audio.duration;
    });
};

// changing the volume when the volume bar is triggered
volumeBar.addEventListener('change', ()=>{
    const audio = document.getElementsByTagName(`audio`);
    for (let i = 0; i < audio.length; i++) {
        audio[i].volume = volumeBar.value/100;
    }
});

// function to play the next or the previous song if the foreward or the backward button is pressed respectively
function loadNextPrev(index){
    backwardBtn.addEventListener('click', ()=>{
        const audioList = document.getElementsByTagName(`audio`);
        for (let i = 0; i < audioList.length; i++) {
            audioList[i].currentTime = 0;
            audioList[i].pause();
        }

        if(index === 0){
            cardPlayBtn.forEach(function(element){
                element.setAttribute('src', `assets/icon/play.png`);
            });
            audio[index].currentTime = 0;
            index = 23;
            updateNewMusicDetails(index, audioList);
        }
        else{
            cardPlayBtn.forEach(function(element){
                element.setAttribute('src', `assets/icon/play.png`);
            });
            audio[index].currentTime = 0;
            index -= 1;
            updateNewMusicDetails(index, audioList);
        }
    })

    forewardBtn.addEventListener('click', ()=>{
        const audioList = document.getElementsByTagName('audio');
        for (let i = 0; i < audioList.length; i++) {
            audioList[i].currentTime = 0;
            audioList[i].pause();
        }

        if(index === 23){
            cardPlayBtn.forEach(function(element){
                element.setAttribute('src', `assets/icon/play.png`);
            });
            audio[index].currentTime = 0;
            index = 0;
            updateNewMusicDetails(index, audioList);
        }
        else{
            cardPlayBtn.forEach(function(element){
                element.setAttribute('src', `assets/icon/play.png`);
            });
            audio[index].currentTime = 0;
            index += 1;
            updateNewMusicDetails(index, audioList);
        }
    })
};

// playing or pausing the song when the mail play button is clicked
const audio = document.querySelectorAll(`audio`);
const audioList = document.getElementsByTagName('audio');
mainPlayBtn.addEventListener('click', ()=>{
    audio.forEach(function(element, index){
        if (element.paused && element.currentTime != 0){
            element.play();
            cardPlayBtn[index].setAttribute('src', 'assets/icon/pause.png');
            mainPlayBtn.setAttribute('src', 'assets/icon/pause.png');
        }
        else if (!element.paused){
            element.pause();
            for (let i = 0; i < audioList.length; i++) {
                if (audioList[i] != element){
                    audioList[i].currentTime = 0;
                    progressBar.value = 0;
                    audioList[i].pause();
                }
                cardPlayBtn[i].setAttribute('src', 'assets/icon/play.png');
            }
            mainPlayBtn.setAttribute('src', 'assets/icon/play.png');
        }
    });
});

// function for the hamburger menu
(function hamburgerMenu(){
    const hamburgerMenu = document.getElementsByClassName('hamburger')[0];
    const leftSection = document.getElementsByClassName('left-section')[0];

    hamburgerMenu.addEventListener('click', ()=>{
        if(leftSection.style.display === 'none'){
            leftSection.style.display = 'flex';
            leftSection.style.cssText += `
                position: absolute;
                left: 0;
                top: 6vh;
                width: 300px;
                z-index: 10;
            `;
        }
        else{
            leftSection.style.display = 'none';
        }
    })
}());