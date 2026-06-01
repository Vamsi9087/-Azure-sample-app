const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Azure Sample App</title></head>
      <body style="font-family: Arial; text-align: center; padding: 50px; background: #f0f8ff;">
        <h1>🚀 Hello from Azure!</h1>
        <p>This app was deployed using <strong>GitHub Actions CI/CD</strong></p>
        <p>Runtime: Node.js</p>
        <p>Time: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});