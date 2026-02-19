function Mod(num, mod) {
	while ( num < 0 ) { num += mod; }
	return num % mod;
}

const cCards = document.querySelectorAll(".featured .card");

let actCard = Math.floor(Math.random()*cCards.length);
let nextCard = Mod(actCard + 1, cCards.length);
let prevCard = Mod(actCard - 1, cCards.length);

function setCards(){
    cCards.forEach((elm) => {
		elm.classList.remove("activeCard", "nextCard", "previousCard");
	});
    cCards[actCard].classList.add("activeCard");
    cCards[nextCard].classList.add("nextCard");
    cCards[prevCard].classList.add("previousCard");
}

function update(delta){
    actCard = Mod(actCard + delta, cCards.length);
    nextCard = Mod(actCard + 1, cCards.length);
    prevCard = Mod(actCard - 1, cCards.length);

    setCards();
}

setCards();

const cButtonLeft = document.querySelector(".moveRight");
const cButtonRight = document.querySelector(".moveLeft");
cButtonLeft.addEventListener('click', () => { update(1) });
cButtonRight.addEventListener('click', () => { update(-1) });

setInterval(
    () => {update(1)},
    5000
);
