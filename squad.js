let datapitch = {
    "strikers":{
        "playersinfo":[{"id":1,"playerimg":"Олександрія","surname":2,"info":2,"captain":1,"vicecaptain":0,"position":"strikers"},{"id":2,"playerimg":"Минай","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"strikers"},{"id":3,"playerimg":"Рух","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"strikers"}]
    },
    "midfielders":{
        "playersinfo":[{"id":4,"playerimg":"Шахтар","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"midfielders"},{"id":11,"playerimg":"Динамо","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"midfielders"},{"id":5,"playerimg":"Шахтар","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"midfielders"}]
    },
    "defenders":{
        "playersinfo":[{"id":6,"playerimg":"Динамо","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"defenders"},{"id":7,"playerimg":"Металіст","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"defenders"},{"id":8,"playerimg":"Динамо","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"defenders"},{"id":9,"playerimg":"Шахтар","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"defenders"}]
    },
    "goalkeepers":{
        "playersinfo":[{"id":10,"playerimg":"Верес","surname":2,"info":2,"captain":0,"vicecaptain":1,"position":"goalkeepers"}]
    }
}
let benchdata={
    "bench":{
        "playersinfo":[{"id":12,"playerimg":"Дніпро-1","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"goalkeepers"},{"id":13,"playerimg":"Полісся","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"defenders"},{"id":14,"playerimg":"Колос","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"midfielders"},{"id":15,"playerimg":"ЛНЗ","surname":2,"info":2,"captain":0,"vicecaptain":0,"position":"midfielders"}]
    }
}
let fieldPositions = {
    "strikers": 0,
    "midfielders": 0,
    "defenders": 0,
    "goalkeepers": 0
}

let maxPositions = {
    "strikers": 3,
    "midfielders": 5,
    "defenders": 5,
    "goalkeepers": 1
}
let minPositions = {
    "strikers": 1,
    "midfielders": 2,
    "defenders": 3,
    "goalkeepers": 1
}
// Заповнюємо об'єкт fieldPositions кількістю гравців на полі
for (let position in datapitch) {
    fieldPositions[position] = datapitch[position].playersinfo.length;
}




// Викликати функцію




function swapPlayers(playerId1, playerId2, datapitch, benchdata) {
    // Знаходимо позиції гравців
    let player1Position = null;
    let player2Position = null;
    let player1List = null;
    let player2List = null;
    let player1Index = -1;
    let player2Index = -1;
    //console.log(maxPositions.midfielders)
    //console.log(fieldPositions.midfielders)
    // Перевіряємо, чи є гравець на полі
    for (let position in datapitch) {
        player1Index = datapitch[position].playersinfo.findIndex(player => player.id === playerId1);
        if (player1Index !== -1) {
            player1Position = position;
            player1List = "pitch";
            break;

        }
       
    }    for (let position in datapitch) {
         player2Index = datapitch[position].playersinfo.findIndex(player => player.id === playerId2);
        if (player2Index !== -1) {
            player2Position = position;
            player2List = "pitch";
            break;

        }
       
    }
    
    
    if (player1Position===null){
        // Перевіряємо, чи є гравець на заміні
    player1Index = benchdata.bench.playersinfo.findIndex(player => player.id === playerId1);
    if (player1Index !== -1) {
        player1Position = benchdata.bench.playersinfo[player1Index].position;
        player1List = "bench";

    };
        
    } 
    if (player2Position===null){
        // Перевіряємо, чи є гравець на заміні
        player2Index = benchdata.bench.playersinfo.findIndex(player => player.id === playerId2);
        if (player2Index !== -1) {
            player2Position = benchdata.bench.playersinfo[player2Index].position;
            player2List = "bench";

        }
    
        
    }
    /*
    console.log(player1Index )
    console.log(player2Index )
    console.log(player1Position )
    console.log(player2Position )
    console.log(player1List)
    console.log(player2List)*/
 if (player1Position && player2Position) {
        // Замінюємо гравців
        if(player1List==="pitch"){
            if(player2List==="pitch"){//OK
                if(player1Position === player2Position){
                     let temp = datapitch[player1Position].playersinfo[player1Index];
                    datapitch[player1Position].playersinfo[player1Index] = datapitch[player2Position].playersinfo[player2Index];
                    datapitch[player2Position].playersinfo[player2Index] = temp;
                }
               
                
            }
            if(player2List==="bench"){

                for (let position in datapitch) {
                    fieldPositions[position] = datapitch[position].playersinfo.length;
                
                }
                //зі старту в запас
                if(player1Position!=player2Position){
                    console.log(fieldPositions[player1Position]-1)
                    console.log(minPositions[player1Position])
                    
                    if((fieldPositions[player1Position]-1)>=minPositions[player1Position]){
                       /* console.log((parseInt(fieldPositions.player1Position, 10)),minPositions.player1Position)
                        console.log((parseInt(fieldPositions.player2Position+1, 10)),maxPositions.player2Position)*/
                        console.log(fieldPositions[player2Position]+1)
                        console.log(maxPositions[player2Position])
                        if((fieldPositions[player2Position]+1)<=(maxPositions[player2Position])){
                            //console.log("OK");
                            let temp = datapitch[player1Position].playersinfo[player1Index];

                            
                            // player2Position і player2Index - це ваші змінні
                            let positionToRemove = player1Position;
                            let indexToRemove = player1Index;

                            // Видалити гравця за вказаною позицією
                            datapitch[positionToRemove].playersinfo.splice(indexToRemove, 1);

                            if(temp.captain===1){
                                temp.captain=0
                                benchdata.bench.playersinfo[player2Index].captain=1
                                
                            }
                            console.log("VC"+temp.vicecaptain)
                            if(temp.vicecaptain===1){
                                temp.vicecaptain=0
                                benchdata.bench.playersinfo[player2Index].vicecaptain=1
                                
                            }



                            datapitch[player2Position].playersinfo.push(benchdata.bench.playersinfo[player2Index]);
                            console.log(benchdata.bench.playersinfo[player2Index].captain);


                            //datapitch[player1Position].playersinfo[player2Index] = benchdata.bench.playersinfo[player1Index];
                            benchdata.bench.playersinfo[player2Index] = temp;
                
                        }
                    }
                
                }
                else{
                    
                    
                    let temp = datapitch[player1Position].playersinfo[player1Index];
                            // player2Position і player2Index - це ваші змінні
                            let positionToRemove = player1Position;
                            let indexToRemove = player1Index;

                            // Видалити гравця за вказаною позицією
                            datapitch[positionToRemove].playersinfo.splice(indexToRemove, 1);
                            if(temp.captain===1){
                                temp.captain=0
                                benchdata.bench.playersinfo[player2Index].captain=1
                                
                            }
                            if(temp.vicecaptain===1){
                                temp.vicecaptain=0
                                benchdata.bench.playersinfo[player2Index].vicecaptain=1
                                
                            }
                            datapitch[player2Position].playersinfo.push(benchdata.bench.playersinfo[player2Index]);

                            //datapitch[player1Position].playersinfo[player2Index] = benchdata.bench.playersinfo[player1Index];
                            benchdata.bench.playersinfo[player2Index] = temp;

                }





                
                
            }
        }
        if(player1List==="bench"){
            if(player2List==="pitch"){
                
                
                
                
                
                
                
                
                
                
                
                
                for (let position in datapitch) {
                    fieldPositions[position] = datapitch[position].playersinfo.length;
                
                }
                //із запасу в старт
                if(player1Position!=player2Position){
                    console.log(fieldPositions[player1Position]-1)
                    console.log(minPositions[player1Position])
                    
                    if((fieldPositions[player2Position]-1)>=minPositions[player2Position]){
                       /* console.log((parseInt(fieldPositions.player1Position, 10)),minPositions.player1Position)
                        console.log((parseInt(fieldPositions.player2Position+1, 10)),maxPositions.player2Position)*/
                        console.log(fieldPositions[player1Position]+1)
                        console.log(maxPositions[player1Position])
                        if((fieldPositions[player1Position]+1)<=(maxPositions[player1Position])){
                            console.log("OK");
                                let temp = datapitch[player2Position].playersinfo[player2Index];
                    // player2Position і player2Index - це ваші змінні
                                let positionToRemove = player2Position;
                                let indexToRemove = player2Index;

                                // Видалити гравця за вказаною позицією
                                datapitch[positionToRemove].playersinfo.splice(indexToRemove, 1);

                                if(temp.captain===1){
                                    temp.captain=0
                                    benchdata.bench.playersinfo[player2Index].captain=1
                                    
                                }
                                if(temp.vicecaptain===1){
                                    temp.vicecaptain=0
                                    benchdata.bench.playersinfo[player2Index].vicecaptain=1
                                    
                                }
                                datapitch[player1Position].playersinfo.push(benchdata.bench.playersinfo[player1Index]);

                                //datapitch[player1Position].playersinfo[player2Index] = benchdata.bench.playersinfo[player1Index];
                                benchdata.bench.playersinfo[player1Index] = temp;
                            
                        }
                    }
                
                }
                else{
                    let temp = datapitch[player2Position].playersinfo[player2Index];
                    // player2Position і player2Index - це ваші змінні
                    let positionToRemove = player2Position;
                    let indexToRemove = player2Index;

                    // Видалити гравця за вказаною позицією
                    datapitch[positionToRemove].playersinfo.splice(indexToRemove, 1);
                    
                    if(temp.captain===1){
                        temp.captain=0
                        benchdata.bench.playersinfo[player2Index].captain=1
                        
                    }
                    if(temp.vicecaptain===1){
                        temp.vicecaptain=0
                        benchdata.bench.playersinfo[player2Index].vicecaptain=1
                        
                    }
                    datapitch[player1Position].playersinfo.push(benchdata.bench.playersinfo[player1Index]);

                    //datapitch[player1Position].playersinfo[player2Index] = benchdata.bench.playersinfo[player1Index];
                    benchdata.bench.playersinfo[player1Index] = temp;

                }
            // Замінюємо гравців 
            }
            if(player2List==="bench"){//OK
                 let temp = benchdata.bench.playersinfo[player1Index]
                benchdata.bench.playersinfo[player1Index] = benchdata.bench.playersinfo[player2Index];
                benchdata.bench.playersinfo[player2Index] = temp;
                
            }
        }
        //console.log(`Гравець ${temp.playerimg} переміщений на заміну, а гравець ${datapitch[player1Position].playersinfo[player1Index].playerimg} вийшов на поле.`);
       //  console.log('Оновлений JSON:');
      // console.log(JSON.stringify({datapitch, benchdata}, null, 2));
    } else {
        console.error(`Не вдалося знайти одного або обох гравців.`+player1Position + player2Position);
    }
}
// Виклик функції swapPlayers


 
 /**
  *  let playerbuttons = document.createElement('div');
            playerbuttons.className = 'capvice';


            let cap = document.createElement('img');
            cap.className = 'capbtn';
            cap.src = `media/captain.svg`;


            let vice = document.createElement('img');
            vice.className = 'vicecapbtn';
            vice.src = `media/vice-captain.svg`;


            playerbuttons.appendChild(cap, vice);
  */

function updatePitch() {
    document.querySelector('.players').innerHTML = '';
    document.querySelector('.bench').innerHTML = '';

    for (let position in datapitch) {
        let players = datapitch[position].playersinfo;
        let container = document.createElement('div');
        container.className = position;

        players.forEach(player => {
            let playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.id = player.id;

            let propertydiv = document.createElement('div');
            propertydiv.className = 'property';

            let propertyimg = document.createElement('img');
            propertyimg.className = 'capbtn';


           

            let capMenu = document.createElement('div');
            capMenu.className = 'capmenu';

            let capVice = document.createElement('div');
            capVice.className = 'capvice';

            let capBtn = document.createElement('img');
            capBtn.className = 'capbtn';
            if(player.captain===1){
                capBtn.src = 'media/captain-filled.svg';
                propertyimg.src = 'media/captain-label.svg';


            }
            else{
                capBtn.src = 'media/captain.svg';


            }

            let viceCapBtn = document.createElement('img');
            viceCapBtn.className = 'vicecapbtn';
            if(player.vicecaptain===1){
                viceCapBtn.src = 'media/vice-captain-filled.svg';
                propertyimg.src = 'media/vice-captain-label.svg';



            }
            else{
                viceCapBtn.src = 'media/vice-captain.svg';

            }
            

            capVice.append(capBtn, viceCapBtn);
            capMenu.appendChild(capVice);
            playerDiv.appendChild(capMenu);
            propertydiv.appendChild(propertyimg);
            playerDiv.appendChild(propertydiv);
            

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

    for (let position in benchdata) {
        let players = benchdata[position].playersinfo;
        let container = document.createElement('div');
        container.className = position;

        players.forEach(player => {
            let playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.id = player.id;

            let capMenu = document.createElement('div');
            capMenu.className = 'capmenu';

            let capVice = document.createElement('div');
            capVice.className = 'capvice';

            let capBtn = document.createElement('img');
            capBtn.className = 'capbtn';
            capBtn.src = 'media/captain.svg';

            let viceCapBtn = document.createElement('img');
            viceCapBtn.className = 'vicecapbtn';
            viceCapBtn.src = 'media/vice-captain.svg';

            capVice.append(capBtn, viceCapBtn);
            capMenu.appendChild(capVice);
            playerDiv.appendChild(capMenu);

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

        document.querySelector('.bench').appendChild(container);
    }
}
            
/*
swapPlayers(13, 2, datapitch, benchdata);
swapPlayers(5, 11, datapitch, benchdata);
console.log()*/




function resetProperty(property) {
    // Перевірка, чи є властивість 'captain' або 'vicecaptain'
    if (property !== 'captain' && property !== 'vicecaptain') {
        console.log('Недійсна властивість');
        return;
    }

    // Пройтися по всіх гравцях в datapitch
    for (let position in datapitch) {
        for (let player of datapitch[position].playersinfo) {
            player[property] = 0;
        }
    }

    // Пройтися по всіх гравцях в benchdata
    for (let player of benchdata.bench.playersinfo) {
        player[property] = 0;
    }
}
updatePitch();
function setProperty(playerID, property){
    if(property === 'captain'){

        let playerIndex = -1;
    
        for (let position in datapitch) {
            playerIndex = datapitch[position].playersinfo.findIndex(player => player.id === playerID);
            if (playerIndex !== -1) {
                let playerCli=datapitch[position]["playersinfo"][playerIndex];

                if(datapitch[position]["playersinfo"][playerIndex]["vicecaptain"]===1){

                    resetProperty("captain"); // Занулити 'captain' для всіх гравців
                    resetProperty("vicecaptain"); // Занулити 'captain' для всіх гравців
                    datapitch[position]["playersinfo"][playerIndex][property]=1;


                    /*
                    for (let positionSearch in datapitch) {
                        for (let playerSearch of datapitch[positionSearch].playersinfo) {
                            if(playerSearch["captain"] === 1){
                               
                                resetProperty("captain"); // Занулити 'captain' для всіх гравців
                                resetProperty("vicecaptain"); // Занулити 'captain' для всіх гравців
                                //playerSearch["captain"]=1

                                playerCli["vicecaptain"]=1;


                            }
                            
                        }
                    }*/

                }
                else{
                    resetProperty('captain'); // Занулити 'captain' для всіх гравців

                    datapitch[position]["playersinfo"][playerIndex][property]=1;

                }
                
    
            }
           
        }  



    }
    if(property === 'vicecaptain'){
        resetProperty('vicecaptain'); // Занулити 'captain' для всіх гравців

        let playerIndex = -1;
    
        for (let position in datapitch) {
            playerIndex = datapitch[position].playersinfo.findIndex(player => player.id === playerID);
            if (playerIndex !== -1) {
                if(datapitch[position]["playersinfo"][playerIndex]["captain"]===1){

                    /*
                    for (let position in datapitch) {
                        for (let player of datapitch[position].playersinfo) {
                            if(player[property] === 1){
                                resetProperty('vicecaptain'); // Занулити 'captain' для всіх гравців

                                player["captain"]=1
                                datapitch[position]["playersinfo"][playerIndex][property]=1;


                            }
                            
                        }
                    }*/
                    resetProperty("captain"); // Занулити 'captain' для всіх гравців
                    resetProperty("vicecaptain"); // Занулити 'captain' для всіх гравців
                    datapitch[position]["playersinfo"][playerIndex][property]=1;

                }
                else{
                    resetProperty('vicecaptain'); // Занулити 'captain' для всіх гравців

                    datapitch[position]["playersinfo"][playerIndex][property]=1;

                }



                
                
    
            }
           
        }  


    }


    
    
    updatePitch()

}
let selectedPlayer = null;
let selectedID = null;
document.querySelector('.left-container').addEventListener('click', function(event) {
    let clickedPlayer = event.target.closest('.player');
    let clickedVaCap = event.target.closest('.vicecapbtn');
    let clickedCap = event.target.closest('.capbtn');

    if (clickedCap) {
        setProperty(parseInt(selectedID, 10), "captain");
        selectedPlayer = null;
    }
    else if (clickedVaCap) {
        setProperty(parseInt(selectedID, 10), "vicecaptain");
        selectedPlayer = null;
    }
    else if (clickedPlayer) {
        let capMenu = clickedPlayer.querySelector('.capmenu'); // Отримати capmenu для цього гравця
        if (selectedPlayer === null) {
            selectedPlayer = clickedPlayer;
            selectedID = clickedPlayer.id;
            clickedPlayer.classList.add('selected');
            if(IsOnBench(parseInt(selectedID, 10))){
                console.log(IsOnBench(parseInt(selectedID, 10)))



            }
            else{
                capMenu.style.display = 'block'; // Показати capmenu

                

            }

        } else {
            // Якщо гравець вже вибраний
            if (clickedPlayer !== selectedPlayer) {
                // Заміна гравців
                let tempID = clickedPlayer.id;
                console.log(selectedID, tempID)
                swapPlayers(parseInt(selectedID, 10), parseInt(tempID, 10), datapitch, benchdata);
                updatePitch();

                // Зняття виділення з вибраного гравця
                selectedPlayer.classList.remove('selected');
                selectedPlayer = null;
                capMenu.style.display = 'none'; // Приховати capmenu
            } else {
                // Зняття виділення, якщо клікнули на того ж гравця
                selectedPlayer.classList.remove('selected');
                selectedPlayer = null;
                capMenu.style.display = 'none'; // Приховати capmenu
            }
        }
    }
});


function IsOnBench(playerID){
    
    // Перевіряємо, чи є гравець на заміні
    playerIndex = benchdata.bench.playersinfo.findIndex(player => player.id === playerID);

    if (playerIndex !== -1) {
       return true;
    }
    else{
        return false;
    }
    
  

}
