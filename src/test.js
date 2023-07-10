const crypto = require("crypto");

function generateShortLink(url) {
  const hash = crypto.createHash("sha256").update(url).digest("base64");
  const shortLink = hash.substring(0, 8);
  return shortLink;
  //return console.log(url);
}

console.log(
  generateShortLink(
    "https://discord.com/channels/1127808078524452945/1127811682639556729"
  )
);
