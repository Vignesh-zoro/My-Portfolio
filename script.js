let typed=new Typed(".text",{
   strings:["Frontend Developer","Web Developer"],
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true

})


let menu=document.querySelector(".menu");
let menuList=document.querySelector('nav ul')
menu.addEventListener("click",()=>{
   menuList.classList.toggle('showmenu')
})