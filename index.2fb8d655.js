!function(){let e=document.getElementById("one-input"),t=document.getElementById("two-input"),u=document.getElementById("three-input"),n=document.getElementById("time-result");function a(){let a=parseFloat(e.value),i=parseFloat(t.value),l=parseFloat(u.value);if(isNaN(a)&&isNaN(i)&&isNaN(l))n.textContent="Не вказані числа";else{let e=Math.max(isNaN(a)?0:a,isNaN(i)?0:i,isNaN(l)?0:l);n.textContent=`\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E} \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - ${e} `}}e.addEventListener("input",a),t.addEventListener("input",a),u.addEventListener("input",a)}();
//# sourceMappingURL=index.2fb8d655.js.map