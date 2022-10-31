function attachEventsListeners() {
    const input = document.getElementById("inputDistance");
    const inputUnits = document.getElementById("inputUnits");
    const output = document.getElementById("outputDistance");
    const outputUnits = document.getElementById("outputUnits");


    const convertBtn = document.getElementById("convert").addEventListener("click", convert);

    const convertEnumerator= {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function convert(){
        let inputValue = input.value;
        let inputUnitsValue = inputUnits.value;
        let outputUnitsValue = outputUnits.value;
        
        let inputValueInMeters = inputValue * convertEnumerator[inputUnitsValue];
        output.value = inputValueInMeters / convertEnumerator[outputUnitsValue];
        
        
    }

}