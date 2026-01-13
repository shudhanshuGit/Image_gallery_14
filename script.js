const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNUM = 10;
  addNewImgaes();
});

function addNewImgaes() {
  for (let index = 0; index < imageNUM; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
  }
}
