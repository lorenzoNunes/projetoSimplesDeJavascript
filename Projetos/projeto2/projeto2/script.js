let digitalElement = document.querySelector('.digital');
// ponteiros
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    // variavel de tempo
    let now = new Date();
    let hour= now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    //segundos 
    let sDeg = ((360/60)*second) -90;
    sElement.style.transform = `rotate(${sDeg}deg)`;

    //minutos
    let mDeg = ((360/60)*minute) -90;
    mElement.style.transform = `rotate(${mDeg}deg)`;

    //horas
    let hDeg = ((360/12)*hour) -90;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}


// ajustar o zero no relogio.
function fixZero(time) {
    return time<10 ? `0${time}` : time;
}
 
setInterval(updateClock, 1000);
updateClock();