let info = {}
let translate = {
    "qom": "قم",
    "tehran": "تهران"
}
const searchParams = new URLSearchParams(window.location.search);
for (const param of searchParams) {
    info[param[0]] = param[1]
}

function persianToEnglishNumber(input) {
    const englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    let output = input;

    englishNumbers.forEach((englishNum, index) => {
        output = output.replace(englishNum, persianDigits[index]);
    });

    return output;
}



function generateTicket() {
    if ("content" in document.createElement("template")) {
        const detailTable = document.querySelector(".details-table")
        const labels = detailTable.querySelectorAll("label")
        let options = {month: '2-digit', day: '2-digit', year: 'numeric'};
        let currentDate = new Date();
        if (info["date-of-departure"] === "tomorrow") {
            currentDate.setDate(currentDate.getDate() + 1);
        }


				labels[0].textContent = persianToEnglishNumber(info["train-number"]);
        labels[1].textContent = currentDate.toLocaleDateString("fa-IR", options)
        labels[2].textContent = persianToEnglishNumber(info["departure-time"]);
        labels[3].textContent = translate[info["path"].split("-")[0]]
        labels[4].textContent = translate[info["path"].split("-")[1]]

        const passengerTable = document.querySelector(".passenger-table")
        const labels2 = passengerTable.querySelectorAll("tr").item(1).querySelectorAll("td")
        labels2[0].textContent = "۱"
        labels2[1].textContent = persianToEnglishNumber(info["ticket-number"]);
        labels2[2].textContent = persianToEnglishNumber(info["hall"]);
        labels2[3].textContent = persianToEnglishNumber(info["row"]);
        labels2[4].textContent = persianToEnglishNumber(info["seat"]);
        labels2[5].textContent = persianToEnglishNumber(info["national-code"]);
        labels2[6].textContent = info["first-name"]
        labels2[7].textContent = info["last-name"]
        labels2[8].textContent = persianToEnglishNumber(info["birth-year"] + "/" + info["birth-month"] + "/" + info["birth-day"]);
    }
}

generateTicket()
