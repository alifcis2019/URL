let counter = document.querySelector(".counter")
let linkButton = document.querySelector(".linkButton")
linkButton.style.display="none"
function count(){
    setTimeout(() => {
        setInterval(() => {
            counter.innerHTML=parseInt(counter.innerHTML)+1;
            if(parseInt(counter.innerHTML)>30)
            {
                clearInterval();
                counter.style.display="none"
                linkButton.style.display="block"
            }
        }, 1000);
    }, 1000);
}

count()