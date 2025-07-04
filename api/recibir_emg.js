export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    res.status(200).json({ message: "✅ Recibido correctamente" });
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
