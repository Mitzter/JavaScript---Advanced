window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById("model");
    const year = document.getElementById("year");
    const description = document.getElementById("description");
    const price = document.getElementById("price");
    const list = document.getElementById("furniture-list");
    const totalPrice = document.getElementsByClassName("total-price")[0];

    let total = 0;


    const addButton = document.getElementById("add").addEventListener("click", (ev) => {
        add(ev)
    });

    function add(ev){
        ev.preventDefault();
        let modelValue = model.value;
        let yearValue = Number(year.value);
        let descriptionValue = description.value;
        let priceValue = Number(price.value);

        if(!modelValue || !yearValue || !descriptionValue || !priceValue){
            return;
        }
        if(yearValue < 0 || priceValue < 0){
            return;
        }

        
        clearInputFields();
        transferData(modelValue, yearValue, descriptionValue, priceValue);
        
    }

    function transferData(modelValue, yearValue, descriptionValue, priceValue){
        let tr = document.createElement('tr');
        tr.classList.add('info');

        let tdMV = document.createElement('td');
        tdMV.innerText = modelValue;
        let tdYV = document.createElement('td');
        tdYV.innerText = `Year: ${yearValue}`;
        let tdDV = document.createElement('td');
        tdDV.innerText = `Description: ${descriptionValue}`;
        tdDV.setAttribute('colspan', 3);
        let tdPV = document.createElement('td');
        tdPV.innerText = priceValue.toFixed(2);
        

        let trInfo = document.createElement('tr');
        trInfo.appendChild(tdYV);
        trInfo.appendChild(tdDV);
        trInfo.classList.add('hide');
        
        

        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add("moreBtn");
        moreInfoBtn.innerText = "More Info"
        moreInfoBtn.addEventListener("click", (ev) => {
            moreInfo(ev, trInfo);
        });

        let buyBtn = document.createElement('button');
        buyBtn.classList.add("buyBtn");
        buyBtn.innerText = "Buy it";
        buyBtn.addEventListener("click", (ev) => {
            buy(ev, priceValue, yearValue, descriptionValue);
        });

        let tdButtons = document.createElement('td');
        tdButtons.appendChild(moreInfoBtn);
        tdButtons.appendChild(buyBtn);
        tr.appendChild(tdMV);
        tr.appendChild(tdPV);
        tr.appendChild(tdButtons);

        list.appendChild(tr);
        list.appendChild(trInfo);

    }

    function clearInputFields(){
        model.value = "";
        year.value = "";
        description.value = "";
        price.value = "";
    }

    function moreInfo(ev, trInfo){
        let innerText = ev.target.parentElement.parentElement.childNodes[2].childNodes[0].innerText;
        if(innerText === "More Info"){
            trInfo.style.display = "contents";
            ev.target.innerText = "Less Info"; 
        } else if (innerText === "Less Info"){
            trInfo.style.display = "none";
            ev.target.innerText = "More Info";
        }
    }

    function buy(ev, priceValue, yearValue, descriptionValue){
        
        ev.target.parentNode.parentNode.remove();
        let hiddenArray = Array.from(document.getElementsByClassName("hide"));
        for(let i = 0; i < hiddenArray.length; i++){
            let tdArray = hiddenArray[i].children;
            for (let i = 0; i < tdArray.length; i++){
                if(tdArray[i].textContent === `Year: ${yearValue}` || tdArray[i].textContent === `Year: ${descriptionValue}`){
                    hiddenArray[i].remove();
                }
            }
        }
        total += priceValue;
    
        totalPrice.innerText = total;
    }
}

