export class user{
    constructor(name, starting_balance, rigcost, programvalue)
    {
        this.username=name;
        this.balance=starting_balance;
        this.rig_cost=rigcost;
        this.program=programvalue;
    }

    crtajKorisnika(panel) //panel je users
    {
        if(!panel)
            throw new Error("panel error");

        let userDraw=document.createElement("div");
        panel.appendChild(userDraw);
        userDraw.classList.add("userDraw");

        let userPicture=document.createElement("div");
        userDraw.appendChild(userPicture);
        userPicture.classList.add("userPicture");

        let pic=document.createElement("img");
        pic.classList.add("pic");
        pic.src="https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg";
        userPicture.appendChild(pic);

        let userInfo=document.createElement("div");
        userInfo.classList.add("userInfo");
        userDraw.appendChild(userInfo);

        let usern=document.createElement("label");
        usern.innerHTML=`username: ${this.username}`;
        userInfo.appendChild(usern);

        let bal=document.createElement("label");
        bal.innerHTML=`balance: ${this.balance}`;
        userInfo.appendChild(bal);

        let rig=document.createElement("label");
        rig.innerHTML=`rig cost: ${this.rig_cost}`;
        userInfo.appendChild(rig);

        let prog=document.createElement("label");
        prog.innerHTML=`program value: ${this.program}$`;
        userInfo.appendChild(prog);

        

        let editDeleteDiv=document.createElement("div");
        userDraw.appendChild(editDeleteDiv);
        editDeleteDiv.classList.add("editDeleteBtns");

        let editButton=document.createElement("button");
        editButton.innerHTML="Edit";
        let deleteButton=document.createElement("button");
        deleteButton.innerHTML="Delete";

        editDeleteDiv.appendChild(editButton);
        editDeleteDiv.appendChild(deleteButton);

        
        console.log(panel);


    }
}