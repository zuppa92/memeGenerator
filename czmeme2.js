document.getElementById("memeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const imageUrl = document.getElementById("imageUrl").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    const memeContainer = document.getElementById("memeContainer");
    const meme = document.createElement("div");
    const img = document.createElement("img");
    const textTop = document.createElement("div");
    const textBottom = document.createElement("div");
    const closeButton = document.createElement("button");

    img.src = imageUrl;
    textTop.innerText = topText;
    textBottom.innerText = bottomText;
    closeButton.innerText = 'X';

    meme.classList.add("meme");
    textTop.classList.add("textTop");
    textBottom.classList.add("textBottom");
    closeButton.classList.add("closeButton");

    closeButton.onclick = function() {
        memeContainer.removeChild(meme);
    };

    meme.appendChild(img);
    meme.appendChild(textTop);
    meme.appendChild(textBottom);
    meme.appendChild(closeButton);
    memeContainer.appendChild(meme);
});
// Works with text over image