let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');


function updateClock() {  // atualiza o relogio digital e analogico
    let now = new Date(); //classe q tem propriedades de dia, hora, mes segundos
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;  // relogio digital
//relogio analogico

let sDeg = ((360/60)*second) - 90;  //faz calculos para trasformar de deg para s
let mDeg = ((360/60)*minute) - 90; 
let hDeg = ((360/12)*hour) -90;
sElement.style.transform = `rotate(${sDeg}deg)`;
mElement.style.transform = `rotate(${mDeg}deg)`;
hElement.style.transform = `rotate(${hDeg}deg)`;


}


function  fixZero(time){   //corrige deixando osnumeros menores q 10 com 2 digitos ex: 05;
    if (time<10){
        return '0'+time;
    }else{
        return time;
    }

    // comando opcional em 1 linha-> return time < 10 ? `0${time}` : time;

}

setInterval(updateClock,1000);    // ativa a função a cada 1s
updateClock();