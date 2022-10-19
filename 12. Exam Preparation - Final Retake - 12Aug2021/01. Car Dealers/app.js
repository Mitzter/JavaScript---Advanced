window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById("make");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const fuel = document.getElementById("fuel");
  const originalCost = document.getElementById("original-cost");
  const sellingPrice = document.getElementById("selling-price");
  const tbody = document.getElementById("table-body");
  const ul = document.getElementById("cars-list");
  const totalProfit = document.getElementById("profit");

  const submit = document.getElementById("publish").addEventListener("click", publish);

  let total = 0;

  function publish(e){
    e.preventDefault();

    let makeValue = make.value;
    let modelValue = model.value;
    let yearValue = year.value;
    let fuelValue = fuel.value;
    let originalCostValue = originalCost.value;
    let sellingPriceValue = sellingPrice.value;

    if(!makeValue || !modelValue || !yearValue || !fuelValue || !originalCostValue || !sellingPriceValue ){
      return;
    }
    if(originalCostValue > sellingPriceValue){
      return;
    }
    
    publishValues(makeValue, modelValue, yearValue, fuelValue, originalCostValue, sellingPriceValue);
    clearFields();
  }

  function publishValues(makeValue, modelValue, yearValue, fuelValue, originalCostValue, sellingPriceValue){
    const tr = document.createElement("tr");

    const tdMake = document.createElement("td");
    tdMake.textContent = makeValue;
    const tdModel = document.createElement("td");
    tdModel.textContent = modelValue;
    const tdYear = document.createElement("td");
    tdYear.textContent = yearValue;
    const tdFuel = document.createElement("td");
    tdFuel.textContent = fuelValue;
    const tdOC = document.createElement("td");
    tdOC.textContent = originalCostValue;
    const tdSP = document.createElement("td");
    tdSP.textContent = sellingPriceValue;

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("action-btn");
    btnEdit.innerText = "Edit";
    btnEdit.addEventListener("click", (ev) => {
      editCar(
      ev,
      makeValue,
      modelValue, 
      yearValue, 
      fuelValue, 
      originalCostValue, 
      sellingPriceValue
    )});
      

    const btnSell = document.createElement("button");
    btnSell.classList.add("action-btn");
    btnSell.innerText = "Sell";
    btnSell.addEventListener("click", (ev) => {
      sellCar(
      ev,
      makeValue,
      modelValue, 
      yearValue, 
      fuelValue, 
      originalCostValue, 
      sellingPriceValue
    )});

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOC);
    tr.appendChild(tdSP);
    tr.appendChild(btnEdit);
    tr.appendChild(btnSell);
    tbody.appendChild(tr);
  }
  function editCar(ev,
    makeValue,
    modelValue, 
    yearValue, 
    fuelValue, 
    originalCostValue, 
    sellingPriceValue){

    ev.target.parentNode.parentNode.remove();

     make.value = makeValue;
     model.value = modelValue;
     year.value = yearValue;
     fuel.value = fuelValue;
     originalCost.value = originalCostValue;
     sellingPrice.value = sellingPriceValue;
      
  }

  function sellCar(ev,
    makeValue,
    modelValue, 
    yearValue, 
    fuelValue, 
    originalCostValue, 
    sellingPriceValue){

    ev.target.parentNode.parentNode.remove();

    let li = document.createElement("li");
    li.classList.add("each-list");
    let makeModelSpan = document.createElement("span");
    makeModelSpan.innerText = makeValue + " " + modelValue;
    let yearSpan = document.createElement("span");
    yearSpan.innerText = yearValue;

    let profit = sellingPriceValue - originalCostValue;

    let costSpan = document.createElement("span");
    costSpan.innerText = profit;
    total += profit;

    li.appendChild(makeModelSpan);
    li.appendChild(yearSpan);
    li.appendChild(costSpan);
    ul.appendChild(li);


    totalProfit.innerText = total.toFixed(2);


  }

  function clearFields(){
    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    originalCost.value = "";
    sellingPrice.value = "";
  }

  

  


}
