let body = document.getElementById("box");
const url_string = window.location.href;

class BookSection {
	constructor (series, book) {
		this.section = document.createElement("section");
		this.section.classList.add("bookinfo");
		body.appendChild(this.section);
		
		this.cover = document.createElement("div");
		this.cover.classList.add("bookcover");
		this.section.appendChild(this.cover);
		
		this.img1 = document.createElement("img");
		this.img1.setAttribute("src", "../pics/" + book.images.cover);
		this.img1.setAttribute("alt", series.seriesName + " Cover");
		this.cover.appendChild(this.img1);
		
		this.details = document.createElement("div");
		this.details.classList.add("bookdetails");
		this.section.appendChild(this.details);
		
		this.title = document.createElement("h1");
		this.title.innerHTML = book.name;
		this.details.appendChild(this.title);
		this.genre = document.createElement("h2");
		this.genre.innerHTML = series.genres.join(", ");
		this.details.appendChild(this.genre);
		this.money = document.createElement("h3");
		if (book.price > 0) this.money.innerHTML = "$" + book.price + " paperback";
		this.details.appendChild(this.money);
		this.des = document.createElement("p");
		this.des.innerHTML = book.description;
		this.details.appendChild(this.des);
		
		this.buy = document.createElement("div");
		this.buy.classList.add("bookbuy");
		this.section.appendChild(this.buy);
		
		this.countdiv = document.createElement("div");
		this.buy.appendChild(this.countdiv);
		if (book.links.paperback == "") {
			this.avail = document.createElement("h2");
			this.avail.innerHTML = "Coming Soon.";
			this.countdiv.appendChild(this.avail);
		}
		if (book.pageNum > 0 && parseInt(book.wordCount) > 0) {
			this.count = document.createElement("p");
			this.count.innerHTML = "Page Count: " + book.pageNum + "   Word Count:  " + book.wordCount;
			this.countdiv.appendChild(this.count);
		}
		
		this.buttonbox = document.createElement("div");
		this.buttonbox.classList.add("bookbuy");
		this.buy.appendChild(this.buttonbox);
		
		if (book.links.paperback != "") {
			this.ab1 = document.createElement("div");
			this.ab1.classList.add("amazonbutton");
			this.buttonbox.appendChild(this.ab1);
			this.linkpaper = document.createElement("a");
			this.linkpaper.setAttribute("href", book.links.paperback);
			this.linkpaper.setAttribute("target", "_blank");
			this.ab1.appendChild(this.linkpaper);
			this.bb1 = document.createElement("button");
			this.bb1.setAttribute("type", "button");
			this.linkpaper.appendChild(this.bb1);
			this.btext1 = document.createElement("h5");
			this.btext1.innerHTML = "Amazon Paperback";
			this.bb1.appendChild(this.btext1);
		}
		
		if (book.links.kindle != "") {
			this.ab2 = document.createElement("div");
			this.ab2.classList.add("amazonbutton");
			this.buttonbox.appendChild(this.ab2);
			this.linkkindle = document.createElement("a");
			this.linkkindle.setAttribute("href", book.links.kindle);
			this.linkkindle.setAttribute("target", "_blank");
			this.ab2.appendChild(this.linkkindle);
			this.bb2 = document.createElement("button");
			this.bb2.setAttribute("type", "button");
			this.linkkindle.appendChild(this.bb2);
			this.btext2 = document.createElement("h5");
			this.btext2.innerHTML = "Amazon Kindle Version";
			this.bb2.appendChild(this.btext2);
		}
		
		if (book.links.audiobook != "") {
			this.ab3 = document.createElement("div");
			this.ab3.classList.add("amazonbutton");
			this.buttonbox.appendChild(this.ab3);
			this.linkaudio = document.createElement("a");
			this.linkaudio.setAttribute("href", book.links.audiobook);
			this.linkaudio.setAttribute("target", "_blank");
			this.ab3.appendChild(this.linkaudio);
			this.bb3 = document.createElement("button");
			this.bb3.setAttribute("type", "button");
			this.linkaudio.appendChild(this.bb3);
			this.btext3 = document.createElement("h5");
			this.btext3.innerHTML = "Amazon Audiobook";
			this.bb3.appendChild(this.btext3);
		}
	}
}

let url = new URL(url_string);
let id = url.searchParams.get('id');
let s = series.find((a) => a.id == id);
document.title = s.seriesName;

for (let i of s.books) {
	new BookSection(s, books.find((b) => b.id == i));
}

if (s.preview != "") {
	chapterbox = document.createElement("div");
	chapterbox.classList.add("h6wordbox");
	body.appendChild(chapterbox);
	h6 = document.createElement("h6");
	h6.innerHTML = "Read the First Chapter";
	chapterbox.appendChild(h6);
	chapter = document.createElement("section");
	chapter.classList.add("readch");
	body.appendChild(chapter);
	c1 = document.createElement("embed");
	c1.setAttribute("src", "../pics/" + s.preview);
	c1.setAttribute("type", "application/pdf");
	c1.setAttribute("width", "1200px");
	c1.setAttribute("height", "600px");
	chapter.appendChild(c1);
}
