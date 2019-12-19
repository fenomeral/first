// Write your JS in here

var pics = [
	"https://news.artnet.com/app/news-upload/2015/11/chandoha_3.jpg",
	"https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-2.jpg", 
	"https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-728x1024.jpg",
	"https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-6.jpg",
	"https://news.artnet.com/app/news-upload/2019/01/Cat-photog-5..jpg",
	"https://news.artnet.com/app/news-upload/2019/01/cat-photog-4.jpg"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;

btn.addEventListener("click", function(){
	if (counter == pics.length) {
		counter = 0;
	}
	img.src = pics[counter];
	counter++;
});
