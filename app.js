let time = document.querySelector(".number");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let count = 0;
let timer;
start.addEventListener("click",()=>{
 timer = setInterval(()=>{
        count++;   
        time.innerHTML = count
        console.log(count);
    },1000) 
});
pause.addEventListener("click",()=>{
    clearInterval(timer);
 
})
reset.addEventListener("click",()=>{
    clearInterval(timer);
    count = 0;
    time.innerHTML = count;
})