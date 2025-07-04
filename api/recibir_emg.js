export default function handler(req, res) {
  if (req.method === 'POST') {
    const datos = req.body;
    console.log("Datos recibidos:", datos);
    // Aquí puedes hacer lo que quieras con los datos: guardar, responder, etc.
    res.status(200).json({ mensaje: 'Datos recibidos correctamente', datos });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}

