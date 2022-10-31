class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){
        for(let i = 0; i < footballPlayers.length; i++){
            let player = footballPlayers[i].split('/');
            let playerName = player[0];
            let playerAge = player[1];
            let playerValue = player[2];
            let playerObj = {
                name: playerName,
                age: playerAge,
                value: playerValue
            }

            let findPlayer = this.invitedPlayers.find(x => x.name === playerName);
            if(this.invitedPlayers.includes(findPlayer)){
                if(findPlayer.value < playerValue){
                    findPlayer.value = playerValue;
                } else {
                    continue;
                }; 
            } else {
                this.invitedPlayers.push(playerObj);
            };
            
        }
        
        let stringBuilder = "";
        stringBuilder += "You successfully invite ";
        for(let i = 0; i < this.invitedPlayers.length; i++){
            let currentPlayer = this.invitedPlayers[i];
            let currentPlayerName = currentPlayer.name;
            stringBuilder += i === this.invitedPlayers.length - 1 ? `${currentPlayerName}.` : `${currentPlayerName}, `;
        }
        return stringBuilder;
    };

    signContract(selectedPlayer){
        let splitString = selectedPlayer.split('/');
        let playerName = splitString[0];
        let playerOffer = splitString[1];
        let findPlayer = this.invitedPlayers.find(x => x.name === playerName);
        
        if(!findPlayer){
            throw new Error(`${playerName} is not invited to the selection list!`);
        } else if (findPlayer.value > playerOffer){
            let priceDifference = findPlayer.value - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${priceDifference} million more are needed to sign the contract!`);
        } else {
            findPlayer.value = "Bought";
        }

        return `Congratulations! You sign a contract with ${findPlayer.name} for ${playerOffer} million dollars.`;

        
    };

    ageLimit(playerName, playerAge){
        let findPlayer = this.invitedPlayers.find(x => x.name === playerName);
        if(!findPlayer){
            throw new Error(`${playerName} is not invited to the selection list!`);
        };
        if(findPlayer.age < playerAge){
            let ageDifference = playerAge - findPlayer.age;
            if(ageDifference < 5){
                return `${playerName} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else if (ageDifference > 5){
                return `${playerName} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else if(findPlayer.age > playerAge){
            return `${playerName} is above age limit!`;
        }
    };

    transferWindowResult(){
        let stringBuilder = "";
        stringBuilder += "Players list:\n";
        for(let i = 0; i < this.invitedPlayers.length;i++){
            stringBuilder += i === this.invitedPlayers.length - 1 ? `Player ${this.invitedPlayers[i].name}-${this.invitedPlayers[i].value}` : `Player ${this.invitedPlayers[i].name}-${this.invitedPlayers[i].value}\n`;
        }
        return stringBuilder;
    }
}

/* let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240")); */

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());