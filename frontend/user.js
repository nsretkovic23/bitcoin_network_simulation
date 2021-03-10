export class user{
    constructor(name, starting_balance, rigcost, programvalue)
    {
        this.username=name;
        this.balance=starting_balance;
        this.rig_cost=rigcost;
        this.program=programvalue;
    }

    crtajKorisnika(panel)
    {
        if(!panel)
        {
        alert("panel je null");
        return;
        }

        let userPanel=document.createElement("div");
        panel.appendChild(userPanel);
        userPanel.classList.add("userBox");

        let usern=document.createElement("label");
        usern.innerHTML=this.username;
        userPanel.appendChild(usern);

        let bal=document.createElement("label");
        bal.innerHTML=this.balance;
        userPanel.appendChild(bal);

        let rig=document.createElement("label");
        rig.innerHTML=this.rig_cost;
        userPanel.appendChild(rig);

        let prog=document.createElement("label");
        prog.innerHTML=`program value: ${this.program}$`;
        userPanel.appendChild(prog);
        
        console.log(userPanel);


    }
}