const shortBox = document.getElementsByClassName("shortlist")[0];
const pictureBox = document.getElementsByClassName("picturelist")[0];
const eduBox = document.getElementsByClassName("edulist")[0];
const audioBox = document.getElementsByClassName("audiolist")[0];
const triBox = document.getElementsByClassName("trilist")[0];
const biBox = document.getElementsByClassName("bilist")[0];
const monBox = document.getElementsByClassName("monlist")[0];

class seriesLink {
	constructor (series, audbool) {
		this.box = document.createElement("div");
		this.box.classList.add("card");
		if (audbool) {
			audioBox.appendChild(this.box);
			this.box.classList.add("aucard");
		} else if (series.category[0] == "novel") {
			if (series.books.length > 2) {
				triBox.appendChild(this.box);
				this.box.classList.add("trcard");
			} else if (series.books.length == 2) {
				biBox.appendChild(this.box);
				this.box.classList.add("secard");
			} else {
				monBox.appendChild(this.box);
				this.box.classList.add("nacard");
			}
		} else if (series.category[0] == "short") {
			shortBox.appendChild(this.box);
			this.box.classList.add("yrcard");
			if (series.id == "path") this.box.classList.add("path");
		} else if (series.category[0] == "picture") {
			pictureBox.appendChild(this.box);
			this.box.classList.add("pbcard");
		} else if (series.category[0] == "edu") {
			eduBox.appendChild(this.box);
			this.box.classList.add("nfcard");
		}
		
		this.booklink = document.createElement("a");
		this.booklink.setAttribute("href", "seriespage.html?id=" + series.id);
		this.box.appendChild(this.booklink);
		
		this.pic = document.createElement("img");
		this.pic.setAttribute("alt", series.seriesName);
		this.booklink.appendChild(this.pic);
		
		if (audbool) this.pic.setAttribute("src", "../pics/" + series.images.square);
		else {
			if (series.images.series == "") {
				let b = books.find((a) => a.id == series.books[0]);
				this.pic.setAttribute("src", "../pics/" + b.images.cover);
			} else this.pic.setAttribute("src", "../pics/" + series.images.series);
		}
		
		this.title = document.createElement("p");
		this.title.innerHTML = series.seriesName;
		this.box.appendChild(this.title);
	}
}

for (let s of series) {
	new seriesLink (s, false);
	if (s.category[1] == "audio") {
		new seriesLink (s, true);
	}
}
