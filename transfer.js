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



}


// Функція для надсилання запиту
async function sendRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST', // або 'GET'
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': csrftoken // Якщо ви використовуєте CSRF-захист в Django
        },
        body: JSON.stringify(data) // перетворюємо дані в JSON
    });

    if (!response.ok) {
        const message = `Помилка запиту: ${response.status}`;
        throw new Error(message);
    }

    return response.json(); // повертаємо відповідь як об'єкт JSON
}

// Використання функції
const url = '/your-endpoint'; // URL вашого кінцевого пункту Django
const data = { key: 'value' }; // дані, які ви хочете надіслати

sendRequest(url, data)
    .then(data => console.log(data)) // обробка відповіді
    .catch(error => console.error(error)); // обробка помилок




    // Отримуємо форму
const form = document.querySelector('.formsearch');

// Додаємо обробник подій
form.addEventListener('change', (event) => {
    event.preventDefault();

    // Отримуємо дані з форми
    const data = new FormData(form);

    // Надсилаємо запит
    sendRequest('/your-endpoint', Object.fromEntries(data))
        .then(response => console.log(response))
        .catch(error => console.error(error));
});
