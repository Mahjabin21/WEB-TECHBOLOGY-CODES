const images = [
    "https://th.bing.com/th/id/OIP.YKQYSpp1KUWeglELMgwvlwHaEK?w=296&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.2obZEELwJEy3ME3N5fbILAHaE7?w=265&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.l5tDoiWlM5KIfjML0l7LhQHaEo?w=313&h=195&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
];

let currentImg = 0;

const slider = document.getElementById("slider");

slider.src = images[currentImg];

function nextImage() {
    currentImg++;

    if (currentImg >= images.length) {
        currentImg = 0;
    }

    slider.src = images[currentImg];
}

function prevImage() {
    currentImg--;

    if (currentImg < 0) {
        currentImg = images.length - 1;
    }

    slider.src = images[currentImg];
}

setInterval(nextImage, 3000);