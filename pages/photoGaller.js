// Pictures

function Mod(num, mod) {
	while ( num < 0 ) { num += mod; }
	return num % mod;
}

const cPics = document.querySelectorAll(".photoPics");

let actPics = Math.floor(Math.random()*cPics.length);
let nextPics = Mod(actPics + 1, cPics.length);
let prevPics = Mod(actPics - 1, cPics.length);
let beforePics = Mod(actPics -2, cPics.length);
let afterPics = Mod(actPics +2, cPics.length);
let firstPics = Mod(actPics - 3, cPics.length);
let lastPics = Mod(actPics + 3, cPics.length);

function setPics(){
    cPics.forEach((elm) => {
		elm.classList.remove("activePic", "nextPic", "previousPic", "fPic", "lPic", "bPic", "aPic");
	});
    cPics[actPics].classList.add("activePic");
    cPics[nextPics].classList.add("nextPic");
    cPics[prevPics].classList.add("previousPic");
	cPics[firstPics].classList.add("fPic");
	cPics[lastPics].classList.add("lPic");
	cPics[beforePics].classList.add("bPic");
	cPics[afterPics].classList.add("aPic");
	
}

function updatePics(delta){
    actPics = Mod(actPics + delta, cPics.length);
    nextPics = Mod(actPics + 1, cPics.length);
    prevPics = Mod(actPics - 1, cPics.length);
	beforePics = Mod(actPics - 2, cPics.length);
	afterPics = Mod(actPics + 2, cPics.length);
	firstPics = Mod(actPics - 3, cPics.length);
	lastPics = Mod(actPics + 3, cPics.length);
	

    setPics();
}

setPics();

const cButtonLeftPic = document.querySelector(".moveRight");
const cButtonRightPic = document.querySelector(".moveLeft");
cButtonLeftPic.addEventListener('click', () => { updatePics(1) });
cButtonRightPic.addEventListener('click', () => { updatePics(-1) });

//	setInterval(
//		() => {
//			updatePics(1);
//		},
//		5000
//	);
