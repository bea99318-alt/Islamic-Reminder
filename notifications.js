 function requestPermission(){
    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }
}

requestPermission();

function scheduleNotifications(timings){

    const now = new Date();

    ["Fajr","Dhuhr","Asr","Maghrib","Isha"].forEach(prayer => {

        const [hour, minute] = timings[prayer].split(":");

        const prayerTime = new Date();
        prayerTime.setHours(hour, minute, 0);

        const timeout = prayerTime - now;

        if(timeout > 0){
            setTimeout(()=>{
                new Notification(`حان الان موعد الصلاة ${prayer} 🕌`);
            }, timeout);
        }
    });
}



