const city = "Cairo";
const country = "Egypt";

fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=5`)
.then(res => res.json())
.then(data => {

    const timings = data.data.timings;

    let html = "";

    for (let prayer in timings) {

        if(["Fajr","Dhuhr","Asr","Maghrib","Isha"].includes(prayer)){

            html += `
            <div class="card">
                <h3>${prayer}</h3>
                <p>${timings[prayer]}</p>
            </div>
            `;
        }
    }

    document.getElementById("times").innerHTML = html;

    scheduleNotifications(timings);
});