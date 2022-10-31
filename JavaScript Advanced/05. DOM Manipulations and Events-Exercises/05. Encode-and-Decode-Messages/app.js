function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll("button");
    buttons[0].addEventListener("click", encode);
    buttons[1].addEventListener("click", decode);

    function encode(e){
        let newMsg = "";
        let currentText = e.target.parentElement.children[1].value;


        for(let i = 0; i < currentText.length; i++){
            let currentCh = currentText[i].charCodeAt();
            if(currentCh === 32){
                newMsg += ' ';
            }else{
                newMsg += String.fromCharCode(currentCh + 3);
            }
            
        }
        let textAreas = document.querySelectorAll("textarea");
        let resultTextArea = textAreas[1];
        resultTextArea.value = newMsg;
        let currentTextArea = textAreas[0];
        currentTextArea.value = "";
    }

    function decode(e){
        let currentArea = e.target.parentElement.children[1];
        let currentText = currentArea.value;
        let resultMsg = "";
        for(let i = 0; i < currentText.length; i++){
            let currentCh = currentText[i].charCodeAt();
            if(currentCh === 32){
                resultMsg += ' ';
            }else{
                resultMsg += String.fromCharCode(currentCh - 3);
            }
            
            
        }

        currentArea.value = resultMsg;
    }
}