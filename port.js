const theme=document.querySelector('.slider');
const body=document.querySelector('body');
const time=document.querySelector('#time');
const home=document.getElementById('Home');
const intro1=document.querySelector('#int1');
const intro2=document.querySelector('#int2');
const intro3=document.querySelector('#int3');
const edublock=document.querySelector('.edublock');
const typeWriter=document.querySelector('.typeWriter');
const schname=document.querySelector('.schname');

let col = '#'
let letters='0123456789ABCDEF'

// script.js
document.addEventListener("DOMContentLoaded", function() {

    theme.addEventListener('click', (e) => {
        if (body.style.backgroundImage === 'url("https://512pixels.net/downloads/macos-wallpapers-6k/10-14-Night-6k.jpg")') {
            body.style.backgroundImage = "url('https://wallpapershome.com/images/pages/pic_h/26108.jpg')";
            // body.style.color='black';
            typeWriter.style.color='black';
            typeWriter.style.backgroundColor="rgba(255, 255, 255, 0.6)";
            edublock.style.backgroundColor="rgba(255, 255, 255, 0.6)";
            edublock.style.color='black';
        } else {
            body.style.backgroundImage = "url('https://512pixels.net/downloads/macos-wallpapers-6k/10-14-Night-6k.jpg')";
            // body.style.color='white';
            typeWriter.style.color='greenyellow';
            typeWriter.style.backgroundColor="transparent";
            edublock.style.backgroundColor="transparent";
            edublock.style.color='antiquewhite';
        }
    });
});


setInterval(()=>{
    time.innerHTML=`${new Date().toLocaleTimeString()}`;
    col='#'
    for (let i = 0; i < 6; i++){
      col+=letters[Math.floor(Math.random()*16)]
    }
    time.style.color = col
},1000);

home.addEventListener('click',(e)=>{
    location.reload();
    
});

document.addEventListener("DOMContentLoaded", function() {
    const text1= `Myself Arijit Roy , a fresher Engineering Student at the LNMIIT.`;
    const text2= `I am passionate about Web 3.0 and Blockchain Technology.`;
    const text3= `I am a member of Cipher - LNMIIT (Web 3.0 and cybersecurity club).`;

    const speed = 200; // Speed in milliseconds
    let i=j=k=0;

    function typeWriter() {
        if (i < text1.length) {
            intro1.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        if (j < text2.length) {
            intro2.innerHTML += text2.charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        }
        if (k < text3.length) {
            intro3.innerHTML += text3.charAt(k);
            k++;
            setTimeout(typeWriter, speed);
        }

    }

    typeWriter();
});

// document.addEventListener("DOMContentLoaded", function(){
//     setTimeout(edublock.style.display='none',100);
// })


