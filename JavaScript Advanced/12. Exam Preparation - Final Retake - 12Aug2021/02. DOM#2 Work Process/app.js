window.addEventListener("load", solve);

function solve() {
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const eMail = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");
    const tblContent = document.getElementsByClassName("tbl-content");
    const tbody = document.getElementById("tbody");
    const toPay = document.getElementById("sum");

    const hireBtn = document.getElementById("add-worker").addEventListener("click", hireWorker);

    let budget = 0;

    function hireWorker(e){
        e.preventDefault();
        let fNameV = firstName.value;
        let lNameV = lastName.value;
        let emailV = eMail.value;
        let birthV = birth.value;
        let positionV = position.value;
        let salaryV = Number(salary.value);

        if(!fNameV || !lNameV || !emailV || !birthV || !positionV || !salaryV){
            return;
        }

        firstName.value = "";
        lastName.value = "";
        eMail.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";

        workerHired(fNameV, lNameV, emailV, birthV, positionV, salaryV);

    }

    function workerHired(fNameV, lNameV, emailV, birthV, positionV, salaryV){
        let tr = document.createElement("tr");

        let tdFN = document.createElement("td");
        tdFN.innerText = fNameV;
        let tdLN = document.createElement("td");
        tdLN.innerText = lNameV;
        let tdEV = document.createElement("td");
        tdEV.innerText =  emailV;
        let tdBV = document.createElement("td");
        tdBV.innerText =  birthV;
        let tdPV = document.createElement("td");
        tdPV.innerText =  positionV;
        let tdSV = document.createElement("td");
        tdSV.innerText =  Number(salaryV).toFixed(2);

        const btnEdit = document.createElement("button");
        btnEdit.classList.add("edit");
        btnEdit.innerText = "Edit";
        btnEdit.addEventListener("click", (ev) =>{
            edit(
                ev,
                fNameV, 
                lNameV, 
                emailV, 
                birthV, 
                positionV, 
                salaryV
            )
        });

        const btnFired = document.createElement("button");
        btnFired.classList.add("fired");
        btnFired.innerText = "Fired";
        btnFired.addEventListener("click", (ev) => {
            fired(
                ev,
                fNameV, 
                lNameV, 
                emailV, 
                birthV, 
                positionV, 
                salaryV
            )
        });

        tr.appendChild(tdFN);
        tr.appendChild(tdLN);
        tr.appendChild(tdEV);
        tr.appendChild(tdBV);
        tr.appendChild(tdPV);
        tr.appendChild(tdSV);
        tr.appendChild(btnFired);
        tr.appendChild(btnEdit);
        tbody.appendChild(tr);
        
        budget += salaryV;
        
        toPay.innerText = "0.00";
        toPay.innerText = Number(budget).toFixed(2);
        
    }

    function edit(ev,
        fNameV, 
        lNameV, 
        emailV, 
        birthV, 
        positionV, 
        salaryV){
            ev.target.parentNode.remove();

            firstName.value = fNameV;
            lastName.value = lNameV;
            eMail.value = emailV;
            birth.value = birthV;
            position.value = positionV;
            salary.value = Number(salaryV);

            budget -= salaryV;

            if(budget === 0){

                toPay.innerText = "0.00";
            } else {
                toPay.innerText = "0.00";
                toPay.innerText = Number(budget).toFixed(2);
            }
            
            
            
            
    }

    function fired(ev,
        fNameV, 
        lNameV, 
        emailV, 
        birthV, 
        positionV, 
        salaryV){
            ev.target.parentNode.remove();

            budget -= salaryV;
            if(budget === 0){
                toPay.innerText = "0.00";
            } else {
                toPay.innerText = "0.00";
                toPay.innerText = Number(budget).toFixed(2);
            }

    }
   
}
