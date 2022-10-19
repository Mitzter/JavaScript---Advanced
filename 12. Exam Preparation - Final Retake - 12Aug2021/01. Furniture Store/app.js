window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById("model");
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let furnitureList = document.getElementById('furniture-list');
    

   // document.getElementById('add').addEventListener('click', add());

    function add(e){
        
        let modelValue = model.value;
        let yearValue = year.value;
        let descriptionValue = description.value;
        let priceValue = price.value;

        if(!modelValue || !yearValue || !descriptionValue || !priceValue){
            return;
        }
        if(modelValue === "" || modelValue === " " || descriptionValue === "" || descriptionValue === " "){
            return;
        }
        if(yearValue < 0 || priceValue < 0){
            return;
        }

        createElement();
        clearFields()
        debugger;
    }

    function clearFields(){
        model.value = "";
        year.value = "";
        description.value = "";
        price.value = "";
    }

    function createElement(){

    }

}
