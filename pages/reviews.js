// Reviews

function Mod(num, mod) {
	while ( num < 0 ) { num += mod; }
	return num % mod;
}

const rcPics = document.querySelectorAll(".rphotoPics");

let ractPics = Math.floor(Math.random()*rcPics.length);
let rnextPics = Mod(ractPics + 1, rcPics.length);
let rprevPics = Mod(ractPics - 1, rcPics.length);
let rbeforePics = Mod(ractPics -2, rcPics.length);
let rafterPics = Mod(ractPics +2, rcPics.length);
let rfirstPics = Mod(ractPics - 3, rcPics.length);
let rlastPics = Mod(ractPics + 3, rcPics.length);

function setPics(){
    rcPics.forEach((elm) => {
		elm.classList.remove("ractivePic", "rnextPic", "rpreviousPic", "rfPic", "rlPic", "rbPic", "raPic");
	});
    rcPics[ractPics].classList.add("ractivePic");
    rcPics[rnextPics].classList.add("rnextPic");
    rcPics[rprevPics].classList.add("rpreviousPic");
	rcPics[rfirstPics].classList.add("rfPic");
	rcPics[rlastPics].classList.add("rlPic");
	rcPics[rbeforePics].classList.add("rbPic");
	rcPics[rafterPics].classList.add("raPic");
	
}

function updatePics(delta){
    ractPics = Mod(ractPics + delta, rcPics.length);
    rnextPics = Mod(ractPics + 1, rcPics.length);
    rprevPics = Mod(ractPics - 1, rcPics.length);
	rbeforePics = Mod(ractPics - 2, rcPics.length);
	rafterPics = Mod(ractPics + 2, rcPics.length);
	rfirstPics = Mod(ractPics - 3, rcPics.length);
	rlastPics = Mod(ractPics + 3, rcPics.length);
	

    setPics();
}

setPics();

const cButtonLeftPic = document.querySelector(".rmoveRight");
const cButtonRightPic = document.querySelector(".rmoveLeft");
cButtonLeftPic.addEventListener('click', () => { updatePics(1) });
cButtonRightPic.addEventListener('click', () => { updatePics(-1) });
