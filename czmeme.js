let img = document.getElementsByTagName("img");
let form = document.querySelector("form");

const button = document.querySelector("button");

form.addEventListener("submit",function(e) {
    e.preventDefault();
    const memeContainer = document.getElementById("memeContainer");

    const meme = document.createElement("div");
    const textTop = document.createElement("div");
    const textBottom = document.createElement("div");
    const img = document.createElement("img");
    const closeButton = document.createElement("button");

    img.src = document.getElementById("imageUrl").value;

    textTop.classList.add("textTop");
    textTop.innerHTML = document.getElementById("topText").value;
    closeButton.innerText = 'X';

    textBottom.classList.add("textBottom");
    textBottom.innerHTML = document.getElementById("bottomText").value;
    closeButton.classList.add("closeButton");

    closeButton.onclick = function() {
        memeContainer.removeChild(meme);
    };

    meme.classList.add("meme");
    meme.append(textTop);
    meme.append(img);
    meme.append(textBottom);

    let memeLocation = document.getElementById("location");
    memeLocation.append(meme);

    meme.appendChild(closeButton);
    memeContainer.appendChild(meme);

    form.reset()
});
// TRIAL AND ERROR FOR prettier image display