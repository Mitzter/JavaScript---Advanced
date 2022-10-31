function solve(name, population,treasury){
    return{
        name,
        population,
        treasury,
        taxrate: 10,
        collectTAXES(){
            this.treasury += Math.floor(this.population * this.taxrate);
        },
        applyGrowth(percent){
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent){
            this.treasury -= Math.floor(this.treasury * percent / 100);
        }
    };
}

