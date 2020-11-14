const divClock = document.querySelector('.digitalClock');

function clock() {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    if (hour >= 12) {
        divClock.innerText = hour + ':' + min + ':' + sec + ' PM';
    }

    if (hour >= 0 && hour < 12) {
        divClock.innerText = hour + ':' + min + ':' + sec + ' AM';
    }

    // divClock.innerText = hour + ':' + min + ':' + sec;
}
clock();
setInterval(clock, 1000);

