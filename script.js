let imgsBox = document.querySelector(".main-img");
let imgs = document.querySelectorAll(".main-img a");
let buttonSlide = document.querySelectorAll("#slideButton");

let isScrolling = false;
buttonSlide.forEach((button) => {
	button.addEventListener("click", async () => {
		if (isScrolling) return;

		isScrolling = true;

		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * imgs[0].clientWidth + 1;

		imgsBox.scrollBy({ left: scrollImg, behavior: "smooth" });

		await new Promise((resolve) => setTimeout(resolve, 1000));

		isScrolling = false;
	});
});

window.addEventListener("click", (e) => {
	console.log(e);
});
