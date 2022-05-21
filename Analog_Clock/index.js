setInterval(() => {
    updateClock();
}, 1000);

function updateClock(){
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hroation = 30*htime + mtime/2 + stime/120;
    mroation = 6*mtime + stime/10;
    sroation = 6*stime;

    hour.style.transform = `rotate(${hroation}deg)`;
    minute.style.transform = `rotate(${mroation}deg)`;
    second.style.transform = `rotate(${sroation}deg)`;
}