!function(){let a=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],e=document.querySelector(".info__scientists");a.forEach(a=>e.innerHTML+=`
    <li class="info__scientist" data-id="${a.id}">
        <p class="info__name">${a.name} ${a.surname}</p>
        <p class="info__lifeYears">${a.born}-${a.dead} years</p>
    </li>
`);let n=document.querySelector(".info__prompts");["отримати масив вчених що народилися в 19 ст","Відсортувати вчених по алфавіту","Відсортувати вчених по кількості прожитих років","Знайти вченого який народився найпізніше.","Знайти рік народження Albert Einstein","знайти вчених прізвище яких починається на літеру С","Видалити з масива всіх вчених імя яких починається на A","Знайти вченого який прожив найбільше і вченого який прожив найменьше","Знайти вчених в яких співпадають перші літери імені і прізвища"].forEach((a,e)=>n.innerHTML+=`
    <li class="info__prompt">
        <button class="info__but" data-promptNum="${e}">${a}</button>
    </li>
`);let r=n=>{e.innerHTML="",Array.isArray(n)?n.forEach(n=>e.innerHTML+=`
            <li class="info__scientist" data-id="${n}">
                <p class="info__name">${a.find(a=>a.id===n).name} ${a.find(a=>a.id===n).surname}</p>
                <p class="info__lifeYears">${a.find(a=>a.id===n).born}-${a.find(a=>a.id===n).dead} years</p>
            </li>
        `):e.innerHTML+=`
            <li class="info__scientist" data-id="${n}">
                <p class="info__name">${n.name} ${n.surname}</p>
                <p class="info__lifeYears">${n.born}-${n.dead} years</p>
            </li>
        `};n.addEventListener("click",e=>{switch(e.target.getAttribute("data-promptNum")){case"0":r(a.filter(a=>a.born>1800&&a.born<=1900).map(a=>a.id));break;case"1":r(a.sort((a,e)=>a.name.localeCompare(e.name)).map(a=>a.id));break;case"2":r(a.sort((a,e)=>e.dead-e.born-(a.dead-a.born)).map(a=>a.id));break;case"3":r(a.sort((a,e)=>e.born-a.born)[0]);break;case"4":r(a.find(a=>"Albert"===a.name&&"Einstein"===a.surname));break;case"5":r(a.filter(a=>a.surname.startsWith("C")).map(a=>a.id));break;case"6":r(a.filter(a=>!a.name.startsWith("A")).map(a=>a.id));break;case"7":r([Math.max(...a.map(a=>a.dead-a.born)),Math.min(...a.map(a=>a.dead-a.born))].map(e=>a.find(a=>a.dead-a.born===e).id));break;case"8":r(a.filter(a=>a.name[0]===a.surname[0]).map(a=>a.id))}})}();
//# sourceMappingURL=index.9b9b255a.js.map
