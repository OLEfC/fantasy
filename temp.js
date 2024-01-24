let data = {
    "calendar":[
        [
           {
            "date":"19.01.2024",
            "data":{
                "time":"12:00",
                "hometeam":["Динамо","dynamo.svg"],
                "awayteam":["Шахтар","shakhtar.svg"],
                "result":"2-0"
            }
           },
           {
            "date":"19.01.2024",
            "data":{
                "time":"12:00",
                "hometeam":["Динамо","dynamo.svg"],
                "awayteam":["Шахтар","shakhtar.svg"],
                "result":"2-0"
            }
           }
        ],
        [
            {
             "date":"22.01.2024",
             "data":{
                 "time":"12:00",
                 "hometeam":["Динамо","dynamo.svg"],
                 "awayteam":["Шахтар","shakhtar.svg"],
                 "result":"2-0"
             }
            },
            {
             "date":"25.01.2024",
             "data":{
                 "time":"19:00",
                 "hometeam":["Динамо","dynamo.svg"],
                 "awayteam":["Шахтар","shakhtar.svg"],
                 "result":"2-0"
             }
            }
        ],
        [
            {
             "date":null,
             "data":{
                 "time":"12:00",
                 "hometeam":["Динамо","dynamo.svg"],
                 "awayteam":["Шахтар","shakhtar.svg"],
                 "result":"2-0"
             }
            }
        ]
    ]
};






let currentTour = 0; // починаємо з першого туру

function updatePage() {
        var tour = data.calendar[currentTour];
        console.log("Тур " + (currentTour + 1));

        var tourcontainer = document.getElementById("tournum");
        tourcontainer.innerHTML = '';

        var tourcontainer= document.createElement("p");
        tournum.className = "tournum";
        tournum.innerHTML = "<p>" + (currentTour+1)  + "-й тур</p>";

    
        // Отримуємо контейнер, в який будемо додавати матчі
        var container = document.getElementById("cal");

        container.innerHTML = '';


        // Перебираємо тури ліги


        // Перебираємо матчі в кожному турі
        for (var j = 0; j < tour.length; j++) {
            var match = tour[j];
            

            // Створюємо елемент div для матчу
            var matchDiv = document.createElement("div");
            matchDiv.className = "matchday";

            // Створюємо елемент div для інформації про день
            var dayInfoDiv = document.createElement("div");
            dayInfoDiv.className = "day-info";
            if (match.date){
                var dateParts = match.date.split(".");
                var formattedDate = dateParts[0] + "." + dateParts[1] + "." + dateParts[2];
                dayInfoDiv.innerHTML = "<p>" + formattedDate + "</p>";
                matchDiv.appendChild(dayInfoDiv);

            }
            else{
                dayInfoDiv.innerHTML = "<p>Перенесено</p>";
                matchDiv.appendChild(dayInfoDiv);
            }
        

            // Створюємо елемент div для інформації про матч
            var matchInfoDiv = document.createElement("div");
            matchInfoDiv.className = "match-info";

            // Додавання інформації про домашню команду
            var homeTeamDiv = document.createElement("div");
            homeTeamDiv.className = "home-team";
            homeTeamDiv.innerHTML = "<img src='media/" + match.data.hometeam[1] + "' alt=''>" +
                                    "<p>" + match.data.hometeam[0] + "</p>";
            matchInfoDiv.appendChild(homeTeamDiv);

            // Додавання інформації про час матчу
            var timeDiv = document.createElement("div");
            timeDiv.className = "one-match-info";
            timeDiv.innerHTML = "<p>" + match.data.time + "</p>";
            matchInfoDiv.appendChild(timeDiv);

            // Додавання інформації про гостьову команду
            var awayTeamDiv = document.createElement("div");
            awayTeamDiv.className = "away-team";
            awayTeamDiv.innerHTML = "<p>" + match.data.awayteam[0] + "</p>" +
                                    "<img src='media/" + match.data.awayteam[1] + "' alt=''>";
            matchInfoDiv.appendChild(awayTeamDiv);

            // Додавання інформації про матч до основного контейнера
            matchDiv.appendChild(matchInfoDiv);

            // Додавання згенерованого матчу до DOM контейнера
            container.appendChild(matchDiv);
        }


    
    
    // ваш код для створення HTML тут

    //tourInfoP.textContent = `${currentTour + 1}-й тур`; // оновлюємо інформацію про тур
}

document.querySelector('.calendar-btn img:first-child').addEventListener('click', () => {
    if (currentTour > 0) { // перевіряємо, чи не є поточний тур першим
        currentTour--;
        updatePage();
    }
});

document.querySelector('.calendar-btn img:last-child').addEventListener('click', () => {
    if (currentTour < data['calendar'].length - 1) { // перевіряємо, чи не є поточний тур останнім
        currentTour++;
        updatePage();
    }
});
updatePage();



