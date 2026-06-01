const button = document.getElementById("copy-on-click");

function copyToClipboard() {
    const rssValue = "knightsconcepts.com/rss/feed.xml";
    navigator.clipboard.writeText(rssValue);
    alert("Link copied to clipboard.");
    console.log("It has been done.")
}

button.addEventListener("click", copyToClipboard)