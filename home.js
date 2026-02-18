const city = "Cairo";
const country = "Egypt";

fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=5`)
.then(res => res.json())
.then(data => {

    const timings = data.data.timings;
    const date = data.data.date.hijri.date;

    document.getElementById("date").innerHTML =
    `التاريخ الهجري: ${date}`;

    document.getElementById("todayPrayers").innerHTML = `
        الفجر: ${timings.Fajr} <br>
        الظهر: ${timings.Dhuhr} <br>
        العصر: ${timings.Asr} <br>
        المغرب: ${timings.Maghrib} <br>
        العشاء: ${timings.Isha}
    `;

    // تشغيل الإشعارات
    scheduleNotifications(timings);
})
.catch( () => {
    const today=new Date();

    document.getElementById("date").innerHTML =
    `التاريخ: ${today.toLocaleDateString("ar-EG")}`;
});
