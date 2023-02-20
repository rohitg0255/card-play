window.onload = function(){
    var cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", hZIndex, false);
        card.addEventListener("mouseout", {});
    })
    function hZIndex()
    {
        let y = parseInt(this.dataset.y);
        let z = y;
        this.setAttribute('data-z',(y)); 
        this.style.zIndex = y;
        for(let i=y-2;i>=0;i--){
            cards[i].setAttribute('data-z',(y-1)); 
            cards[i].style.zIndex = y-1;
            y-=1;
        }
        for(let j=z;j<10;j++){
            cards[j].setAttribute('data-z',(z-1)); 
            cards[j].style.zIndex = z-1;
            z-=1;
        }
    }
}