!function(){let u=document.querySelector(".guess-the-number__input"),e=document.querySelector(".guess-the-number__but"),t=document.querySelector(".guess-the-number__result");e.addEventListener("click",()=>{if(isNaN(u.value)||""===u.value)t.innerHTML="Ви не ввели число",t.style.color="true"===localStorage.getItem("theme")?"#fff":"#000";else{let e=Math.floor(9*Math.random()+1);t.innerHTML=Number(u.value)===e?`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}! (${e})`:`\u{412}\u{438} \u{43F}\u{440}\u{43E}\u{433}\u{440}\u{430}\u{43B}\u{438}, \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} (${e})`,t.style.color=Number(u.value)===e?"#039900":"#900"}})}();
//# sourceMappingURL=index.7446f6ce.js.map
