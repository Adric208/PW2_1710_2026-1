const http = require('http');
const PORT = 2015;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hola desde el servidor http');
});

server.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en http://localhost:${PORT}`);
});