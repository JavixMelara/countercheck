export default async function handler(req, res) {
  try {
    // Incrementa un contador único en CountAPI
    // La primera vez que se use, se crea automáticamente
    await fetch("https://api.countapi.xyz/hit/javier/instapost1?amount=1");

    // Redirige a tu publicación de Instagram
    res.writeHead(302, {
      Location: "https://www.instagram.com/p/DNfyp6yu-ag/?igsh=cDJpdHBrZnVodGt4"
    });
    res.end();
  } catch (error) {
    res.status(500).send("Error en el redireccionamiento");
  }
}
