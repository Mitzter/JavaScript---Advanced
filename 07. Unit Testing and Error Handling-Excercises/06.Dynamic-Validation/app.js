function validate() {
    let input = document.getElementById("email");
    input.addEventListener("change", onChange)

    function onChange(e){
        let email = e.target.value;
        let emailPattern = /[a-z0_9]+@[a-z0_9]+.[a-z]+/g

        if(emailPattern.test(email)){
            e.target.classList.remove("error");
        }else{
            e.target.classList.add("error");
        }
    }
}