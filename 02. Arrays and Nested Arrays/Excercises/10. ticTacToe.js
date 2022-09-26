function ticTacToe(input){
    let dashboard = [
        [false, false, false],

        [false, false, false],
    
        [false, false, false]
    ];

    let isFirstPlayer = true;
    for (let coordinates of input){
        let [row, col] = coordinates.split(" ");
        
        if(dashboard[row][col]){
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }
        let marker = isFirstPlayer ? "X" : "O";
        dashboard[row][col] = marker;

        for(let i = 0; i < dashboard.length; i++){
                   if(dashboard[i][0] === marker &&
                      dashboard[i][1] === marker &&
                      dashboard[i][2] === marker){
                console.log(`Player ${marker} wins!`)
                printTable(dashboard);
                return
            } else if (dashboard[0][i] === marker &&
                       dashboard[1][i] === marker &&
                       dashboard[2][i] === marker){
                console.log(`Player ${marker} wins!`)
                printTable(dashboard);
                return
            } else if (dashboard[0][0] === marker &&
                       dashboard[1][1] === marker &&
                       dashboard[2][2] === marker){
                console.log(`Player ${marker} wins!`)
                printTable(dashboard);
                return
            } else if (dashboard[0][2] === marker &&
                       dashboard[1][1] === marker &&
                       dashboard[2][0] === marker){
                console.log(`Player ${marker} wins!`)
                printTable(dashboard);
                return
            }
        }
        let isFreeSpace = false;
        for (let row = 0; row < dashboard.length; row++){
            for(let col = 0; col < dashboard[row].length; col++){
                if(!dashboard[row][col]){
                    isFreeSpace = true;
                    break;
                }
            }
            if(isFreeSpace){
                break;
            }
        }
        if(!isFreeSpace){
            console.log("The game ended! Nobody wins :(");
            printTable(dashboard);
            return;
        }
        isFirstPlayer = !isFirstPlayer;

        function printTable(dashboard){
            dashboard.forEach(row => console.log(row.join("\t")));
        }
    }
}

ticTacToe([
"0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 1",

"1 2",

"2 2",

"2 1",

"0 0"
]);
console.log(`------------------`)
ticTacToe([
"0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 2",

"1 1",

"2 1",

"2 2",

"0 0"
])
console.log(`------------------`)
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"])