console.warn("runnin")

let InSeconds=document.querySelector(".seconds_hand")
let InMinutes=document.querySelector(".minutes_hand")
let InHours=document.querySelector(".hours_hand")

function setDate(){
    const present=new Date();
    const seconds=present.getSeconds()
    // here we take each seconds make each second equal to 6deg so that 6deg*60secs=360deg--same for mins and hours
    let secondsDeg=((seconds/60)*360)+90;
    InSeconds.style.transform=`rotate(${secondsDeg}deg)`;
    
    const minutes=present.getMinutes()
    let minutesDeg=((minutes/60)*360)+90;
    InMinutes.style.transform=`rotate(${minutesDeg}deg)`;

    const hours=present.getHours()
    let hoursDeg=((hours/60)*360)+90;
    InHours.style.transform=`rotate(${hours}deg)`;
}

// this calls the function severy second
setInterval(setDate,1000)