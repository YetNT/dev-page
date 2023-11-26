const links = {
    npm: "https://www.npmjs.com/~yetnt",
    "stack-overflow": "https://stackoverflow.com/users/16618019/yetnt",
    github: "https://github.com/YetNT",
    discord: "https://discord.gg/tVqBKayQ",
    spotify: "https://open.spotify.com/artist/1QJse7ZddVCImq5Y2rqYFE",
    "apple-music": "https://music.apple.com/ug/artist/yetnt/1635739865",
    soundcloud: "https://soundcloud.com/hloni-802664869",
    "youtube-music":
        "https://music.youtube.com/channel/UCzH7_TSCrcGoCUzXSYkJ-HA",
    youtube: "https://www.youtube.com/@yetnt",
    audiotool: "https://www.audiotool.com/user/yetnt/",
};

const stars = ["./img/4.svg", "./img/5.svg", "./img/6.svg"];
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

for (const key of Object.keys(links)) {
    const link = document.getElementById(key);

    link.setAttribute("href", links[key]);
    const image = link.querySelector("img");
    image.setAttribute("src", `./img/${key}.svg`);
}

const bg = document.getElementById("background");

setInterval(function () {
    myFunction();
}, 1000);

function myFunction() {
    var particle = createParticle();
    particle.src = stars[Math.floor(Math.random() * stars.length)];
    bg.appendChild(particle);

    void particle.offsetWidth;

    // to get duration of how long the particle should live V

    const destX = Math.floor(Math.random() * width);
    const destY = Math.floor(Math.random() * height);

    const distance = Math.sqrt(
        (destX - particle.offsetLeft) ** 2 + (destY - particle.offsetTop) ** 2
    );
    const duration = 0.5 + Math.min(distance / 500, 1);

    particle.style.transition = `transform ${duration}s ease-out, opacity ${duration}s ease-out, rotate ${duration}s ease-out`;
    particle.style.transform = `translate(${destX}px, ${destY}px) rotate(${
        Math.random() * 360
    }deg)`;
    particle.style.opacity = `0`;

    setTimeout(function () {
        bg.removeChild(particle);
    }, duration * 1000);
}

function createParticle() {
    const img = document.createElement("img");
    img.style.position = "absolute";
    img.style.top = `2px`;
    img.style.opacity = "0.8";
    img.style.left = `${Math.floor(Math.random() * width)}px`;
    img.style.top = `${Math.floor(Math.random() * height)}px`;
    return img;
}
