const e=document.querySelectorAll(".rps__but"),r=document.querySelector('.rps__but[data-event="paper"]'),s=document.querySelector('.rps__but[data-event="stone"]'),t=document.querySelector('.rps__but[data-event="scissors"]'),o=document.querySelector(".rps__result"),c=document.querySelector(".rps__results"),u=document.querySelector(".rps__compVar");let n=0,l=0,a="";const d=e=>{e?(o.innerHTML="Комп’ютер виграв раунд!",o.style.color="#900",n++):(o.innerHTML="Ви виграли раунд!",o.style.color="#039900",l++),c.innerHTML=`
        \u{420}\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}: <br>
        \u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - ${n} <br>
        \u{412}\u{438} - ${l}
    `},i=e=>{let r=["paper","stone","scissors"][Math.round(2*Math.random())];if(console.log(r,e),o.style.display="block",r===e){o.innerHTML="нічия",o.style.color="#000";return}switch(r){case"paper":d("stone"===e?1:0);break;case"scissors":d("paper"===e?1:0);break;case"stone":d("scissors"===e?1:0)}},p=(r,s)=>{e.forEach(e=>e.style.backgroundColor="#000"),a=r,s.style.backgroundColor="rgb(189, 189, 189)"};r.addEventListener("click",()=>p("paper",r)),t.addEventListener("click",()=>p("scissors",t)),s.addEventListener("click",()=>p("stone",s)),u.addEventListener("click",()=>i(a));
//# sourceMappingURL=index.f16ba284.js.map
