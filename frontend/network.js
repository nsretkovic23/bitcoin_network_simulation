import {user} from './user.js'

export class network
{
    constructor()
    {
        this.users=[];
        this.container=null;
    }

    crtajFormu(panel)
    {
        if(!panel)
            throw new Error("panel err");
            
        const labelsInputs=new Map();
        labelsInputs.set("Username:","text");
        labelsInputs.set("Starting Balance(btc):", "number");
        labelsInputs.set("Rig cost($):", "number");

        let divUnosForm=document.createElement("div");
        divUnosForm.classList.add("unosForm");
        panel.appendChild(divUnosForm);

        labelsInputs.forEach((value,key)=>{
            let labela=document.createElement("label");
            labela.innerHTML=key;
            divUnosForm.appendChild(labela);

            let inputBox=document.createElement("input");
            inputBox.type=value;
            inputBox.min=(value=="number"&& key=="Starting Balance(btc):")? 0 : 300;
            inputBox.classList.add("inputs");
            divUnosForm.appendChild(inputBox);
        })

        let labela=document.createElement("label");
        labela.innerHTML="Program: ";
        divUnosForm.appendChild(labela); 

        //const programs=["Cudo Miner(150$)", "Hashing24(270$)", "Kryptex(330$)"];
        const programs=new Map();
        programs.set("Cudo Miner(150$)", 150);
        programs.set("Hashing24(270$)", 270);
        programs.set("Kryptex(330$)", 330);

        let dropDown=document.createElement("select");
        dropDown.classList.add("inputs");
        divUnosForm.appendChild(dropDown);
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
        divUnosForm.appendChild(dugme);

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
        this.crtajMrezu(this.container);
        console.log(this.users);
    }

    crtajMrezu(panel)
    {
        let usersDiv=document.createElement("div");
        panel.appendChild(usersDiv);
        usersDiv.classList.add("usersDiv");
        this.users.forEach((el)=>{
            el.crtajKorisnika(usersDiv);
        })
    }

    crtajStranu(panel) //panel = document.body kao celokupni div
    {
        this.container=document.createElement("div");
        this.container.classList.add("network")
        panel.appendChild(this.container);
        this.crtajMrezu(this.container);
        this.crtajFormu(this.container);
    }
}