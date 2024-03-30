let e,t,o;document.querySelector(".dino");const n=document.querySelector(".dino__player"),l=document.querySelector(".dino__cactus"),r=document.querySelector(".dino__points"),i=document.querySelector(".dino__overlay"),d=document.querySelector(".dino__results"),s=document.querySelector(".dino__but");let a=Math.floor(n.getBoundingClientRect().x+n.getBoundingClientRect().width/2),c=(n.getBoundingClientRect().y,n.getBoundingClientRect().width,0),y=!1;const g=()=>{n.style.left="100px",n.style.bottom="15px",l.style.right="-60px",l.style.bottom="15px",c=0},u=()=>{l.style.right=`${Number(l.style.right.split("px")[0])+8+.05*c}px`,a=Math.floor(l.getBoundingClientRect().x+l.getBoundingClientRect().width/2),l.getBoundingClientRect().y,l.getBoundingClientRect().width,a<0&&(l.style.display="none",l.style.right="-60px",setTimeout(()=>l.style.display="block",200))},m=()=>{let a=n.getBoundingClientRect(),y=l.getBoundingClientRect(),u=Math.floor(a.x),m=Math.floor(a.y),p=Math.floor(a.width),h=Math.floor(a.height),R=Math.floor(y.x),v=Math.floor(y.y),b=Math.floor(y.width),x=Math.floor(y.height);u<R+b&&u+p>R&&m<v+x&&m+h>v&&(i.style.display="flex",n.style.display="none",r.style.display="none",s.style.display="flex",c>=localStorage.getItem("dinoRecord")&&localStorage.setItem("dinoRecord",c),d.innerHTML=`
            Game over
            <br>
            ${c} points
            <br>
            Record ${localStorage.getItem("dinoRecord")}
        `,clearInterval(e),clearInterval(t),clearInterval(o),g())};document.addEventListener("keydown",e=>{"w"!==e.key||y||(y=!0,n.style.bottom="85px",setTimeout(()=>{n.style.bottom="15px",y=!1},400))}),s.addEventListener("click",()=>{i.style.display="none",n.style.display="block",r.style.display="block",e=setInterval(u,30),t=setInterval(m,100),o=setInterval(()=>{c+=1,r.innerHTML=`${c} points`},50)});const p=n=>{"g"===n.key&&(i.style.display="none",i.style.backgroundColor="rgba(0, 0, 0, 0.7)",e=setInterval(u,30),t=setInterval(m,100),o=setInterval(()=>{c+=1,r.innerHTML=`${c} points`},50),document.removeEventListener("keydown",p))};document.addEventListener("keydown",p),d.innerHTML=`
    Press 'g' to start the game
    <br>
    Press 'w' to jump
    <br>
    Record ${null===localStorage.getItem("dinoRecord")?0:localStorage.getItem("dinoRecord")}
`;
//# sourceMappingURL=index.aa6953fc.js.map
