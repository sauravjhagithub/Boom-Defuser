let defusercodeEl = document.getElementById('defusercode');
let counterEl = document.getElementById('counter');


let counterno = 10

let uniqueNo = setInterval(function(){
    counterno = counterno - 1; 
    counterEl.textContent = counterno
    if(counterno === 0){
        counterEl.textContent = "Boom"
        clearInterval(uniqueNo);
    }
}, 1000)

defusercodeEl.addEventListener('keydown', function(event){
    if(event.key === "Enter" && defusercodeEl.value === "defuse" && counterno !== 0){
         counterEl.textContent = "Yeah you did It!!";
         clearInterval(uniqueNo);
    }
})