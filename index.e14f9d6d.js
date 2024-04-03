!function(){let e=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],a=document.querySelector(".info__scientists");e.forEach(e=>a.innerHTML+=`
    <li class="info__scientist" data-id="${e.id}">
        <p class="info__name">${e.name} ${e.surname}</p>
        <p class="info__lifeYears">${e.born}-${e.dead} years</p>
    </li>
`);let n=document.querySelector(".info__prompts");["отримати масив вчених що народилися в 19 ст","Відсортувати вчених по алфавіту","Відсортувати вчених по кількості прожитих років","Знайти вченого який народився найпізніше.","Знайти рік народження Albert Einstein","знайти вчених прізвище яких починається на літеру С","Видалити з масива всіх вчених імя яких починається на A","Знайти вченого який прожив найбільше і вченого який прожив найменьше","Знайти вчених в яких співпадають перші літери імені і прізвища"].forEach((e,a)=>n.innerHTML+=`
    <li class="info__prompt">
        <button class="info__but" data-promptNum="${a}">${e}</button>
    </li>
`);let i=n=>{a.innerHTML="",Array.isArray(n)?(n.forEach(n=>a.innerHTML+=`
            <li class="info__scientist showAnim" data-id="${n}">
                <p class="info__name">${e.find(e=>e.id===n).name} ${e.find(e=>e.id===n).surname}</p>
                <p class="info__lifeYears">${e.find(e=>e.id===n).born}-${e.find(e=>e.id===n).dead} years</p>
            </li>
        `),setTimeout(()=>n.forEach(e=>document.querySelector(`.info__scientist[data-id="${e}"]`).classList.remove("showAnim")),200)):a.innerHTML+=`
            <li class="info__scientist" data-id="${n}">
                <p class="info__name">${n.name} ${n.surname}</p>
                <p class="info__lifeYears">${n.born}-${n.dead} years</p>
            </li>
        `};n.addEventListener("click",a=>{switch(a.target.getAttribute("data-promptNum")){case"0":i(e.filter(e=>e.born>1800&&e.born<=1900).map(e=>e.id));break;case"1":i(e.sort((e,a)=>e.name.localeCompare(a.name)).map(e=>e.id));break;case"2":i(e.sort((e,a)=>a.dead-a.born-(e.dead-e.born)).map(e=>e.id));break;case"3":i(e.sort((e,a)=>a.born-e.born)[0]);break;case"4":i(e.find(e=>"Albert"===e.name&&"Einstein"===e.surname));break;case"5":i(e.filter(e=>e.surname.startsWith("C")).map(e=>e.id));break;case"6":i(e.filter(e=>!e.name.startsWith("A")).map(e=>e.id));break;case"7":i([Math.max(...e.map(e=>e.dead-e.born)),Math.min(...e.map(e=>e.dead-e.born))].map(a=>e.find(e=>e.dead-e.born===a).id));break;case"8":i(e.filter(e=>e.name[0]===e.surname[0]).map(e=>e.id))}})}();
//# sourceMappingURL=index.e14f9d6d.js.map
