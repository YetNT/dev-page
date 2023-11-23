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

for (const key of Object.keys(links)) {
    const link = document.getElementById(key);

    link.setAttribute("href", links[key]);
    const image = link.querySelector("img");
    image.setAttribute("src", `./img/${key}.svg`);
}
