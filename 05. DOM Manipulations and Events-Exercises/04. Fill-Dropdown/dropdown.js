function addItem() {
    const text = document.getElementById("newItemText");
    const value = document.getElementById("newItemValue");
    const button = document.querySelector("input[type=button]");
    const menu = document.getElementById("menu");

    
    
    
       
        let textValue = text.value;
        let valueValue = value.value;
        if(!textValue || !valueValue){
            return;
        }
        let option = document.createElement("option");
        option.textContent = textValue;
        option.value = valueValue;

        menu.appendChild(option);

        text.value = "";
        value.value = "";

        
    
}