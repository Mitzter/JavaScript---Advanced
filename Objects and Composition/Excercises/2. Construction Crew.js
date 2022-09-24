function constructionCrew(worker){
    
    if(worker.dizziness === true){
        for(let i = 0; i < worker.experience; i++){
            //worker.levelOfHydrated += 0.1;
            for(let i = 0; i < worker.weight; i++){
            
                worker.levelOfHydrated += 0.1;
            }
        }
        worker.levelOfHydrated = Math.round(worker.levelOfHydrated);
    }else{
        return worker
    }

    console.log(worker.levelOfHydrated);
}


constructionCrew(worker = {
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})

console.log(`---------------`);

constructionCrew(worker = {
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
})

console.log(`---------------`);

console.log(constructionCrew(worker = {
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}))