let datapitch = {
    "strikers":{
        "playersinfo":[{"id":1,"playerimg":"Олександрія","surname":2,"info":2,"position":"strikers"},{"id":2,"playerimg":"Минай","surname":2,"info":2,"position":"strikers"},{"id":3,"playerimg":"Рух","surname":2,"info":2,"position":"strikers"}]
    },
    "midfielders":{
        "playersinfo":[{"id":4,"playerimg":"Шахтар","surname":2,"info":2,"position":"midfielders"},{"id":11,"playerimg":"Динамо","surname":2,"info":2,"position":"midfielders"},{"id":5,"playerimg":"Шахтар","surname":2,"info":2,"position":"midfielders"}]
    },
    "defenders":{
        "playersinfo":[{"id":6,"playerimg":"Динамо","surname":2,"info":2,"position":"defenders"},{"id":7,"playerimg":"Металіст","surname":2,"info":2,"position":"defenders"},{"id":8,"playerimg":"Динамо","surname":2,"info":2,"position":"defenders"},{"id":9,"playerimg":"Шахтар","surname":2,"info":2,"position":"defenders"}]
    },
    "goalkeepers":{
        "playersinfo":[{"id":10,"playerimg":"Верес","surname":2,"info":2,"position":"goalkeepers"}]
    }
}
let benchdata={
    "bench":{
        "playersinfo":[{"id":12,"playerimg":"Дніпро-1","surname":2,"info":2,"position":"goalkeepers"},{"id":13,"playerimg":"Полісся","surname":2,"info":2,"position":"defenders"},{"id":14,"playerimg":"Колос","surname":2,"info":2,"position":"midfielders"},{"id":15,"playerimg":"ЛНЗ","surname":2,"info":2,"position":"midfielders"}]
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

// Заповнюємо об'єкт fieldPositions кількістю гравців на полі
for (let position in datapitch) {
    fieldPositions[position] = datapitch[position].playersinfo.length;
}
function swapPlayers(playerId1, playerId2, datapitch, benchdata) {
    // Знаходимо позиції гравців
    let player1Position = null;
    let player2Position = null;
    let player1List = null;
    let player2List = null;
    let player1Index = -1;
    let player2Index = -1;
console.log(maxPositions.midfielders)
console.log(fielPositions.midfielders)

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
            if(player2List==="pitch"){
                
                let temp = datapitch[player1Position].playersinfo[player1Index];
                    datapitch[player1Position].playersinfo[player1Index] = datapitch[player2Position].playersinfo[player2Index];
                    datapitch[player2Position].playersinfo[player2Index] = temp;
                
            }
            if(player2List==="bench"){
                let temp = datapitch[player1Position].playersinfo[player1Index];
                datapitch[player1Position].playersinfo[player1Index] = benchdata.bench.playersinfo[player2Index];
                benchdata.bench.playersinfo[player2Index] = temp;
                
            }
        }
        if(player1List==="bench"){
            if(player2List==="pitch"){
            // Замінюємо гравців
                let temp = datapitch[player2Position].playersinfo[player2Index];
                datapitch[player2Position].playersinfo[player2Index] = benchdata.bench.playersinfo[player1Index];
                benchdata.bench.playersinfo[player1Index] = temp;
                
            }
            if(player2List==="bench"){
                 let temp = benchdata.bench.playersinfo[player1Index]
        benchdata.bench.playersinfo[player1Index] = benchdata.bench.playersinfo[player2Index];
        benchdata.bench.playersinfo[player2Index] = temp;
                
            }
        }
            
        
        

        //console.log(`Гравець ${temp.playerimg} переміщений на заміну, а гравець ${datapitch[player1Position].playersinfo[player1Index].playerimg} вийшов на поле.`);
       //  console.log('Оновлений JSON:');
       //console.log(JSON.stringify({datapitch, benchdata}, null, 2));
    } else {
        console.error(`Не вдалося знайти одного або обох гравців.`);
    }
}


// Виклик функції swapPlayers
swapPlayers(15, 9, datapitch, benchdata);

 
 