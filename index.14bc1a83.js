!function(){let e,t,o;document.querySelector(".dino");let l=document.querySelector(".dino__player"),n=document.querySelector(".dino__cactus"),r=document.querySelector(".dino__points"),i=document.querySelector(".dino__overlay"),d=document.querySelector(".dino__results"),s=document.querySelector(".dino__but"),a=Math.floor(l.getBoundingClientRect().x+l.getBoundingClientRect().width/2),c=(l.getBoundingClientRect().y,l.getBoundingClientRect().width,0),y=!1,g=()=>{l.style.left="100px",l.style.bottom="15px",n.style.right="-60px",n.style.bottom="15px",c=0},u=()=>{n.style.right=`${Number(n.style.right.split("px")[0])+8+.05*c}px`,a=Math.floor(n.getBoundingClientRect().x+n.getBoundingClientRect().width/2),n.getBoundingClientRect().y,n.getBoundingClientRect().width,a<0&&(n.style.display="none",n.style.right="-60px",setTimeout(()=>n.style.display="block",200))},m=()=>{let a=l.getBoundingClientRect(),y=n.getBoundingClientRect(),u=Math.floor(a.x),m=Math.floor(a.y),p=Math.floor(a.width),h=Math.floor(a.height),R=Math.floor(y.x),v=Math.floor(y.y),b=Math.floor(y.width),x=Math.floor(y.height);u<R+b&&u+p>R&&m<v+x&&m+h>v&&(i.style.display="flex",l.style.display="none",r.style.display="none",s.style.display="flex",c>=localStorage.getItem("dinoRecord")&&localStorage.setItem("dinoRecord",c),d.innerHTML=`
            Game over
            <br>
            ${c} points
            <br>
            Record ${localStorage.getItem("dinoRecord")}
        `,clearInterval(e),clearInterval(t),clearInterval(o),g())};document.addEventListener("keydown",e=>{console.log(y),"w"!==e.key||y||(y=!0,l.style.bottom="85px",setTimeout(()=>l.style.bottom="15px",400),setTimeout(()=>y=!1,600))}),s.addEventListener("click",()=>{i.style.display="none",l.style.display="block",r.style.display="block",e=setInterval(u,30),t=setInterval(m,100),o=setInterval(()=>{c+=1,r.innerHTML=`${c} points`},50)});let p=l=>{"g"===l.key&&(i.style.display="none",i.style.backgroundColor="rgba(0, 0, 0, 0.7)",e=setInterval(u,30),t=setInterval(m,100),o=setInterval(()=>{c+=1,r.innerHTML=`${c} points`},50),document.removeEventListener("keydown",p))};document.addEventListener("keydown",p),d.innerHTML=`
    Press 'g' to start the game
    <br>
    Press 'w' to jump
    <br>
    Record ${null===localStorage.getItem("dinoRecord")?0:localStorage.getItem("dinoRecord")}
`}();
//# sourceMappingURL=index.14bc1a83.js.map
