window.addEventListener("load", solve);

function solve(){
    document.querySelector("button[type='submit]").addEventListener("click", createTask);

    let productType = document.getElementById("type-product");
    let description = document.getElementById("description");
    let name = document.getElementById("client-name");
    let phone = document.getElementById("client-phone");
    let receiveSection = document.getElementById("received-orders");
    let finishSection = document.getElementById("completed-orders");
    let clearBtn = finishSection.querySelector("button");
    clearBtn.addEventListener("click", clearTask);

    function createTask(){
        e.preventDefault();
        let typeValue = productType.value;
        let descriptionValue = description.value;
        let nameValue = name.value;
        let phoneValue = phone.value;

        if(!description || !nameValue || !phoneValue){
            return;
        }
        description.value = "";
        name.value = "";
        phone.value = "";

        createOrder(typeValue, descriptionValue,nameValue, phoneValue)

        
    }

    function createOrder(typeValue, descriptionValue, nameValue, phoneValue){
        let divContainer = document.createElement("div");
        divContainer.classList.add("container");

        let h2 = document.createElement("h2");
        h2.textContent = `Product type for repair: ${typeValue}`;

        let h3 = document.createElement("h3");
        h3.textContent = `Client information: ${nameValue}, ${phoneValue}`;

        let h4 = document.createElement("h4");
        h4.textContent = `Description of the problem: ${descriptionValue}`;

        let startBtn = document.createElement("button");
        startBtn.classList.add("start-btn");
        startBtn.textContent = "Start repair";
        startBtn.addEventListener("click", startRepair);


        let finishBtn = document.createElement("button");
        finishBtn.classList.add("finish-btn");
        finishBtn.addEventListener("click", finishTask);
        finishBtn.setAttribute("disabled", true);
        finishBtn.textContent = "Finish repair";

        divContainer.appendChild(h2);
        divContainer.appendChild(h3);
        divContainer.appendChild(h4);
        divContainer.appendChild(startBtn);
        divContainer.appendChild(finishBtn);
        receiveSection.appendChild(divContainer);
    }

    function startRepair(e){
        e.target.setAttribute("disabled", true);
        let finishBtn = e.target.parentElement.getElementByClassName("finish-btn")[0];
        finishBtn.disabled = false;
    }

    function finishTask(e){
        let divContainer = e.target.parentElement;
        finishSection.appendChild(divContainer);
        let btns = divContainer.querySelectorAll("button");
        btns[0].remove();
        btns[1].remove();
    }

    function clearTask(e){
        let containers = finishSection.querySelectorAll(".container");

        Array.from(containers).forEach(container => container.remove());
    }
}