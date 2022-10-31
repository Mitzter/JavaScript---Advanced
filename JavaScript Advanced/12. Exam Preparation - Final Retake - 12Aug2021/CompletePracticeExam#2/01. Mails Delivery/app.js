function solve() {
    const recipientName = document.getElementById("recipientName");
    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const ul = document.getElementById("list");
    const addBtn = document.getElementById("add").addEventListener("click", add);
    const resetBtn = document.getElementById("reset").addEventListener("click", reset);
    const ulSent = document.getElementsByClassName('sent-list')[0];
    const ulDelete = document.getElementsByClassName('delete-list')[0];

    

    function add(ev){
        ev.preventDefault();
        let recipientNameV = recipientName.value;
        let titleV = title.value;
        let messageV = message.value;

        let li = document.createElement("li");
        let h4Title = document.createElement("h4");
        h4Title.innerText = `Title: ${titleV}`;
        let h4Recipient = document.createElement("h4");
        h4Recipient.innerText = `Recipient Name: ${recipientNameV}`;
        let span = document.createElement("span");
        span.innerText = messageV;
        
        


        let buttonSend = document.createElement("button");
        buttonSend.type = "submit";
        buttonSend.id = "send";
        buttonSend.innerText = "Send";
        buttonSend.addEventListener("click", (ev) => {
            send(
                ev,
                
                titleV,
                recipientNameV
            )
        });

        let buttonDelete = document.createElement("button");
        buttonDelete.type = "submit";
        buttonDelete.id = "delete";
        buttonDelete.innerText = "Delete";
        buttonDelete.addEventListener("click", (ev) => {
            deleteThis(
                ev,
                titleV,
                recipientNameV
            )
        });

        let div = document.createElement("div");
        div.id = "list-action";
        div.appendChild(buttonSend);
        div.appendChild(buttonDelete);
        
        li.appendChild(h4Title);
        li.appendChild(h4Recipient);
        li.appendChild(span);
        li.appendChild(div);
        ul.appendChild(li);


        
        clearInput();
    }

    function send(
        ev,
        
        titleV,
        recipientNameV){
            ev.target.parentNode.parentNode.remove();
            debugger
            let newli = document.createElement('li');
            let spanTo = document.createElement('span');
            spanTo.innerText = `To: ${recipientNameV}`;
            let spanTitle = document.createElement('span');
            spanTitle.innerText = `Title: ${titleV}`;
            let newdiv = document.createElement('div');
            newdiv.class = "btn";
            let deleteBtn = document.createElement('button');
            deleteBtn.type = "submit";
            deleteBtn.class = 'delete';
            deleteBtn.innerText = "Delete";
            deleteBtn.addEventListener("click", (ev) => {
                deleteThis(
                    ev,
                    titleV,
                    recipientNameV
                )
            });

            newdiv.appendChild(deleteBtn);
            newli.appendChild(spanTo);
            newli.appendChild(spanTitle);
            newli.appendChild(newdiv);

            ulSent.appendChild(newli);

    }

    function deleteThis(ev, titleV, recipientNameV){
        ev.target.parentNode.parentNode.remove();

        let liDel = document.createElement('li');
        let spanToD = document.createElement('span');
        spanToD.innerText = `To: ${recipientNameV}`;
        let spanTitleD = document.createElement('span');
        spanTitleD.innerText = `Title: ${titleV}`;

        liDel.appendChild(spanToD);
        liDel.appendChild(spanTitleD);

        ulDelete.appendChild(liDel);


    }

    function reset(ev){
        ev.preventDefault()
        clearInput();
    }

    function clearInput(){
        recipientName.value = "";
        title.value = "";
        message.value = "";
    }
}
solve()