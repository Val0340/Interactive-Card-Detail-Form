let cardname = document.querySelector("#Cardholder");
let cardnumber = document.querySelector("#CardNumber");
let exp = document.querySelector(".Ex1");
let exp2 = document.querySelector(".Ex2");
let cv= document.querySelector('#Cvc');
let cardnam = document.querySelector(".cardname");
let cardnam2 = document.querySelector(".cardname2");
let cardnum = document.querySelector(".card-num");
let cardnum2 = document.querySelector(".card-num2");
let exdate = document.querySelector(".exp");
let exdate2 = document.querySelector(".exp2");
let exdate3 = document.querySelector(".exp3");
let exdate4 = document.querySelector(".exp4");
let backcv = document.querySelector(".backCVC");
let backcv2 = document.querySelector(".backCVC2");
let cont = document.querySelector('.continue');
let conf = document.querySelector(".confirm");
let frm = document.querySelector("form")
let contain2 = document.querySelector("#container2")


cardname.addEventListener("input",()=>{
    let value = cardname.value;
    cardnam.innerText = value;
});

cardname.addEventListener("input",()=>{
    let value = cardname.value;
    cardnam2.innerText = value;
});

cardnumber.addEventListener("input",()=>{
    let value = cardnumber.value.replace(/\D/g, '');
    var formattedValue="";
    for (let i = 0; i<value.length; i++){
        if(i % 4 ==0 && i>0){
            formattedValue +=" ";
        }
        formattedValue += value[i];
    }
    cardnum.innerText= formattedValue;
    cardnum2.innerText= formattedValue;
});

exp.addEventListener("input",()=>{
    let value = exp.value;
    exdate.innerText=value;
});

exp2.addEventListener("input",()=>{
    let value = exp2.value;
    exdate2.innerText=value;
});

exp.addEventListener("input",()=>{
    let value = exp.value;
    exdate3.innerText=value;
});
exp2.addEventListener("input",()=>{
    let value = exp2.value;
    exdate4.innerText=value;
});

cv.addEventListener("input",()=>{
    let value = cv.value;
    backcv.innerText=value;
})
cv.addEventListener("input",()=>{
    let value = cv.value;
    backcv2.innerText=value;
})

conf.addEventListener('click',()=>{
frm.style.display="none";
contain2.style.display ="inline-block";
})

cont.addEventListener('click',()=>{
    frm.style.display="inline-block";
    contain2.style.display ="none";
    })
