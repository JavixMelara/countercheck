export default async function handler(req, res) {
  try {
    // Incrementa el contador en CountAPI
    await fetch("https://api.countapi.xyz/hit/micontador/instagram");

    // Redirige a Instagram
    res.writeHead(302, {
      Location: "https://www.instagram.com/p/DNfyp6yu-ag/?igsh=cDJpdHBrZnVodGt4"
    });
    res.end();
  } catch (error) {
    res.status(500).send("Error en el redireccionamiento");
  }
}
