import express from "express";
import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;

const app = express();
const port = 3001;

// Inicializa o bot WhatsApp
const client = new Client({
  authStrategy: new LocalAuth({ dataPath: "./store" }),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox"],
  },
});

client.on("qr", (qr) => {
  console.log("📲 Escaneie o QR Code abaixo com seu WhatsApp:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ BOT do WhatsApp conectado e pronto para uso!");
});

client.on("message", async (msg) => {
  console.log(`📥 ${msg.from}: ${msg.body}`);

  // Exemplo de resposta automática
  if (msg.body.toLowerCase() === "oi") {
    await msg.reply("Olá! 👋 Em que posso te ajudar?");
  }

  // Aqui podemos integrar com o N8N via webhook futuramente
});

client.initialize();

// API básica
app.get("/", (req, res) => {
  res.send("🟢 WhatsApp Bot está rodando com sucesso!");
});

app.listen(port, () => {
  console.log(`🟢 API do bot disponível em http://localhost:${port}`);
});
