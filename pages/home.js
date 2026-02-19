const carosel = document.getElementsByClassName("featured")[0];

class CaroselCard {
	constructor (s) {
		this.box = document.createElement("a");
		this.box.classList.add("card");
		this.box.setAttribute("href", "./pages/seriespage.html?id=" + s.id);
		carosel.appendChild(this.box);
		
		this.pic = document.createElement("img");
		this.pic.classList.add("featimg");
		this.pic.setAttribute("src", "./pics/" + s.images.square);
		this.pic.setAttribute("alt", s.seriesName);
		this.box.appendChild(this.pic);
	}
}

for (let s of series) {
	if (s.featured) new CaroselCard(s);
}
