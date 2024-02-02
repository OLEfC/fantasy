let squad = {
    "strikers":{
        "playersinfo":[{"id":1,"playerimg":"Олександрія","surname":2,"price":7,"captain":1,"vicecaptain":0,"position":"strikers"},{"id":2,"playerimg":"Минай","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"strikers"},{"id":3,"playerimg":"Рух","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"strikers"}]
    },
    "midfielders":{
        "playersinfo":[{"id":15,"playerimg":"ЛНЗ","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"midfielders"},{"id":4,"playerimg":"Шахтар","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"midfielders"},{"id":14,"playerimg":"Колос","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"midfielders"},{"id":11,"playerimg":"Динамо","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"midfielders"},{"id":5,"playerimg":"Шахтар","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"midfielders"}]
    },
    "defenders":{
        "playersinfo":[{"id":13,"playerimg":"Полісся","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"defenders"},{"id":6,"playerimg":"Динамо","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"defenders"},{"id":7,"playerimg":"Металіст","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"defenders"},{"id":8,"playerimg":"Динамо","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"defenders"},{"id":9,"playerimg":"Шахтар","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"defenders"}]
    },
    "goalkeepers":{
        "playersinfo":[{"id":10,"playerimg":"Верес","surname":2,"price":7,"captain":0,"vicecaptain":1,"position":"goalkeepers"},{"id":12,"playerimg":"Дніпро-1","surname":2,"price":7,"captain":0,"vicecaptain":0,"position":"goalkeepers"}]
    }
}


function updatePitch() {
    document.querySelector('.players').innerHTML = '';

    for (let position in squad) {
        let players = squad[position].playersinfo;
        let container = document.createElement('div');
        container.className = position;

        players.forEach(player => {
            let playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.id = player.id;

          
            

            let img = document.createElement('img');
            img.className = 'playerimg';
            img.src = `Форми/${player.playerimg}.svg`;

            let surname = document.createElement('p');
            surname.className = 'surname';
            surname.textContent = player.surname;

            let info = document.createElement('p');
            info.className = 'playersmallinfo';
            info.textContent = player.position;

            playerDiv.append(img, surname, info);
            container.appendChild(playerDiv);
        });

        document.querySelector('.players').appendChild(container);
    }

    
}

updatePitch()


let selectedPlayer = null;
let selectedID = null;
document.querySelector('.left-container-transfer').addEventListener('click', function(event) {
    let clickedPlayer = event.target.closest('.player');
 

    if (clickedPlayer) {
        let capMenu = clickedPlayer.querySelector('.capmenu'); // Отримати capmenu для цього гравця
        if (selectedPlayer === null) {
            selectedPlayer = clickedPlayer;
            selectedID = clickedPlayer.id;
            clickedPlayer.classList.add('selected');
            

        } 
    }
});


let market={
    "strikers":{
    "playersinfo":[{"id":1,"playerimg":"Олександрія","surname":"Бущан","price":7,"team":"Динамо","position":"strikers"},{"id":2,"playerimg":"Минай","surname":2,"price":7,"team":"Динамо","position":"strikers"},{"id":3,"playerimg":"Рух","surname":2,"price":7,"team":"Динамо","position":"strikers"}]
},
"midfielders":{
    "playersinfo":[{"id":15,"playerimg":"ЛНЗ","surname":2,"price":7,"team":"Динамо","position":"midfielders"},{"id":4,"playerimg":"Шахтар","surname":2,"price":7,"team":"Динамо","position":"midfielders"},{"id":14,"playerimg":"Колос","surname":2,"price":7,"team":"Динамо","position":"midfielders"},{"id":11,"playerimg":"Динамо","surname":2,"price":7,"team":"Динамо","position":"midfielders"},{"id":5,"playerimg":"Шахтар","surname":2,"price":7,"team":"Динамо","position":"midfielders"}]
},
"defenders":{
    "playersinfo":[{"id":13,"playerimg":"Полісся","surname":2,"price":7,"team":"Олександрія","position":"defenders"},{"id":6,"playerimg":"Динамо","surname":2,"price":7,"team":"Динамо","position":"defenders"},{"id":7,"playerimg":"Металіст","surname":2,"price":7,"team":"Динамо","position":"defenders"},{"id":8,"playerimg":"Динамо","surname":2,"price":7,"team":"Динамо","position":"defenders"},{"id":9,"playerimg":"Шахтар","surname":2,"price":7,"team":"Динамо","position":"defenders"}]
},
"goalkeepers":{
    "playersinfo":[{"id":10,"playerimg":"Верес","surname":2,"price":7,"team":"Динамо","position":"goalkeepers"},{"id":12,"playerimg":"Дніпро-1","surname":2,"price":7,"team":"Динамо","position":"goalkeepers"}]
}



}

function displayPlayers(players) {
    const list = document.querySelector('.transfer-list');
    list.innerHTML = ''; // Clear the list
    

    const startIndex = currentPage * playersPerPage;
    const endIndex = startIndex + playersPerPage;
    const playersToDisplay = players.slice(startIndex, endIndex);

    let currentPosition = '';
    const headElement = document.createElement('div');
    headElement.classList.add('table-trans-head'); // Removed double quotes

    const nameElementHead = document.createElement('p');
    nameElementHead.classList.add('first-col');
    nameElementHead.textContent ='Гравець';
    headElement.appendChild(nameElementHead);


    const priceElementHead = document.createElement('p');
    priceElementHead.classList.add('second-col');
    priceElementHead.textContent = 'Ціна';
    headElement.appendChild(priceElementHead);

    const pointsElementHead = document.createElement('p');
    pointsElementHead.classList.add('third-col');
    pointsElementHead.textContent = "Сума очок";
    headElement.appendChild(pointsElementHead);
    list.appendChild(headElement);

    for (const player of playersToDisplay) {

        if (player.position !== currentPosition) {
            currentPosition = player.position;
            const positionElement = document.createElement('div');
            positionElement.classList.add('table-trans-chapter');
            const positionTextElement = document.createElement('p');
            positionTextElement.textContent = currentPosition;
            positionElement.appendChild(positionTextElement);
            list.appendChild(positionElement);
        }

        const playerElement = document.createElement('div');
        playerElement.classList.add('table-trans-player');

        const nameElement = document.createElement('div');
        nameElement.classList.add('first-col-withimg');
        const imgElement = document.createElement('img');
        imgElement.src = `Форми/${player.playerimg}.svg`;

        nameElement.appendChild(imgElement);
        const nameTextElement = document.createElement('p');
        nameTextElement.textContent = player.surname;
        nameElement.appendChild(nameTextElement);
        playerElement.appendChild(nameElement);

        const priceElement = document.createElement('p');
        priceElement.classList.add('second-col');
        priceElement.textContent = player.price + '₴';
        playerElement.appendChild(priceElement);

        const pointsElement = document.createElement('p');
        pointsElement.classList.add('third-col');
        pointsElement.textContent = player.points;
        playerElement.appendChild(pointsElement);


        list.appendChild(playerElement);
    }
/*
    // Navigation buttons and page indicator
    const footer = document.querySelector('.table-trans-footer .cont-footer');
    footer.innerHTML = ''; // Clear the footer

    if (currentPage > 0) {
        const prevButton = document.createElement('img');
        prevButton.src = 'media/prev.svg';
        prevButton.alt = 'Назад';
        prevButton.addEventListener('click', function () {
            currentPage--;
            displayPlayers(players);
        });
        footer.appendChild(prevButton);
    }

    const pageInfo = document.createElement('p');
    pageInfo.textContent = (currentPage + 1) + '/' + Math.ceil(players.length / playersPerPage);
    footer.appendChild(pageInfo);

    if ((currentPage + 1) * playersPerPage < players.length) {
        const nextButton = document.createElement('img');
        nextButton.src = 'media/next.svg';
        nextButton.alt = 'Вперед';
        nextButton.addEventListener('click', function () {
            currentPage++;
            displayPlayers(players);
        });
        footer.appendChild(nextButton);
    }*/
}




let currentPage = 0;
const playersPerPage = 10;
function getPositionName(positionId) {
    switch (positionId) {
        case "1":
            return "goalkeepers";
        case "2":
            return "defenders";
        case "3":
            return "midfielders";
        case "4":
            return "strikers";
        default:
            return "";
    }
}
function getTeamName(teamId) {
    switch (teamId) {
        case "1":
            return "Динамо";
        case "2":
            return "Шахтар Донецьк";
        case "3":
            return "Зоря Луганськ";
        case "4":
            return "Десна Чернігів";
        case "5":
            return "Олександрія";
        case "6":
            return "Ворскла Полтава";
        case "7":
            return "Колос Ковалівка";
        case "8":
            return "Маріуполь";
        case "9":
            return "Рух Львів";
        case "10":
            return "Металіст 1925 Харків";
        case "11":
            return "Дніпро-1";
        case "12":
            return "Інгулець";
        case "13":
            return "Минай";
        case "14":
            return "Чорноморець";
        case "15":
            return "Говерла";
        case "16":
            return "Оболонь";
        default:
            return "";
    }
}
function filterPlayers(team, maxPrice, position, surname) {
    const filteredPlayers = [];

   

    for (const category in market) {
        for (const player of market[category].playersinfo) {
            const playerSurname = String(player.surname); // Ensure player.surname is a string
            if ((team === "0" || player.team === getTeamName(team)) &&
                (maxPrice === "" || parseFloat(player.price) <= parseFloat(maxPrice)) &&
                (position === "0" || player.position === getPositionName(position)) &&
                (surname === "" || playerSurname.toLowerCase().includes(surname.toLowerCase()))
                ) {
                filteredPlayers.push(player);
            }
        }
    }

    console.clear(); // Clear console for better visibility
    console.log("Filtered Players:", filteredPlayers);
    displayPlayers(filteredPlayers);



}
filterPlayers("0", "", "0", "");



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.formsearch');

    form.addEventListener('change', function () {
        const teamSelector = document.querySelector('[name="teamselector"]').value;
        const maxPrice = document.querySelector('#price').value;
        const positionSelector = document.querySelector('[name="positionselector"]').value;
        const surname = document.querySelector('[placeholder="Пошук за прізвищем"]').value;

        filterPlayers(teamSelector, maxPrice, positionSelector, surname);
    });
    
    
});


