import {user} from './user.js'

export class network
{
    constructor()
    {
        this.users=[];
        this.container=null;
    }

    crtajFormu(panel) //panel je unos div, paint referenca
    {
        if(!panel)
            throw new Error("panel err");
            
        const labelsInputs=new Map();
        labelsInputs.set("Username:","text");
        labelsInputs.set("Starting Balance(btc):", "number");
        labelsInputs.set("Rig cost($):", "number");

        labelsInputs.forEach((value,key)=>{
            let labela=document.createElement("label");
            labela.innerHTML=key;
            panel.appendChild(labela);

            let inputBox=document.createElement("input");
            inputBox.type=value;
            inputBox.min=(value=="number"&& key=="Starting Balance(btc):")? 0 : 300;
            inputBox.classList.add("inputs");
            panel.appendChild(inputBox);
        })

        let labela=document.createElement("label");
        labela.innerHTML="Program: ";
        panel.appendChild(labela); 

        //const programs=["Cudo Miner(150$)", "Hashing24(270$)", "Kryptex(330$)"];
        const programs=new Map();
        programs.set("Cudo Miner(150$)", 150);
        programs.set("Hashing24(270$)", 270);
        programs.set("Kryptex(330$)", 330);

        let dropDown=document.createElement("select");
        dropDown.classList.add("inputs");
        panel.appendChild(dropDown);
        programs.forEach((value,key)=>{
            let opt=document.createElement("option");
            opt.innerHTML=key;
            opt.value=value;
            dropDown.appendChild(opt);

            console.log(opt.value);
        })

        let dugme=document.createElement("button");
        dugme.classList.add("createButton");
        dugme.innerHTML="Create";
        panel.appendChild(dugme);

        dugme.onclick=(ev)=>{
            this.ubaciKorisnika(dugme);
        }
        console.log(panel);
    }

    ubaciKorisnika(button)
    {
        let inputs=document.querySelectorAll(".inputs");

        for(let i=0; i<inputs.length; ++i) //ne radi sa foreach, pa sam uradio sa for
        {
            if(inputs[i].value=="")
            { 
                alert("Niste uneli sve podatke!");
                return;
            }
        }
        
        let korisnik=new user(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
        this.users.push(korisnik);
        this.crtajMrezu(document.querySelector(".users"));
        console.log(this.users);
    }

    crtajMrezu(panel) 
    {
        if(this.users.length!=0)
        this.users[this.users.length-1].crtajKorisnika(panel);
    }

    crtajStranu(panel) //paint referenca - panel=doc.body, network - panel child
    {
        if(!panel)
            throw new Error("Panel error");

        this.container=document.createElement("div");
        this.container.classList.add("network");
        panel.appendChild(this.container);

        let unos=document.createElement("div");
        this.container.appendChild(unos);
        unos.classList.add("unos");

        let users=document.createElement("div");
        this.container.appendChild(users);
        users.classList.add("users");
         
        this.crtajFormu(unos); //unos
        this.crtajMrezu(users); //users
    }
}