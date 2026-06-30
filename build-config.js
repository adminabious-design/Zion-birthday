const fs = require('fs');
const path = require('path');

const config = {
  WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER || '256743960764',
  BIRTHDAY_DATE: process.env.BIRTHDAY_DATE || '07/07'
};

const outputPath = path.join(__dirname, 'birthday', 'env-config.js');
const fileContents = `window.APP_CONFIG = ${JSON.stringify(config, null, 2)};\n`;

fs.writeFileSync(outputPath, fileContents, 'utf8');
console.log(`Generated ${outputPath}`);
