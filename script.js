let imgsBox = document.querySelector(".main-img");
let imgs = document.querySelectorAll(".main-img a");
let buttonSlide = document.querySelectorAll("#slideButton");

let isScrolling = false;
buttonSlide.forEach((button) => {
	button.addEventListener("click", async () => {
		if (isScrolling) return;
		isScrolling = true;
		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * imgs[0].clientWidth;
		imgsBox.scrollBy({ left: scrollImg, behavior: "smooth" });
		await new Promise((resolve) => setTimeout(resolve, 1000));
		isScrolling = false;
	});
});

let imgsBoxS = window.addEventListener("click", (e) => {
	let flag =
		e.target.offsetParent.className === "right_img_button" ||
		e.target.offsetParent.className === "left_img_button";
	imgsBoxS = e.target.offsetParent.className;
	console.log(e);
	console.log(e.target);
	console.log(e.target.offsetParent);
	console.log(e.target.offsetParent.className);
	console.log(imgsBoxS);
	if (flag) {
		imgsBoxS = e.target.offsetParent.offsetParent.className;
		console.log(imgsBoxS);
	}
	let imgsBoxSItom = document.querySelector(`.${imgsBoxS}`);
	let buttonSlideS = document.querySelectorAll(`.${imgsBoxS} #slideButton-s`);
	console.log(imgsBoxSItom);
	buttonSlideS.forEach((button) => {
		button.addEventListener("click", () => {
			const direction = button.className == "left_img_button" ? -1 : 1;
			const scrollImg = direction * (imgs[0].clientWidth - 150);
			imgsBoxSItom.scrollBy({ left: scrollImg, behavior: "smooth" });
		});
	});
});

let imgsBoxB = document.querySelector(".mini_slide-block");
let buttonSlideB = document.querySelectorAll("#slideButton-b");
buttonSlideB.forEach((button) => {
	button.addEventListener("click", () => {
		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * (imgs[0].clientWidth - 150);
		imgsBoxB.scrollBy({ left: scrollImg, behavior: "smooth" });
	});
});
