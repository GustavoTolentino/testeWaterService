const express = require('express');
const cors = require('cors');
const multer = require('multer');
const xlsx = require('xlsx');
const _ = require('lodash');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const app = express();
const path = require('path');
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(cors());
app.use(fileUpload());

app.post('/', (req, res) => {
  if (!req.files || !req.files.excel) {
    return res.status(400).send('Arquivo Excel não foi enviado.');
  }

  const excelFile = req.files.excel;

  // Validating file type as xlsx
  const mimeType = excelFile.mimetype;
  if (mimeType !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    return res.status(400).send('O arquivo enviado não é um arquivo do Excel');
  }

  const workbook = xlsx.read(excelFile.data, { type: 'buffer' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const sheetData = xlsx.utils.sheet_to_json(worksheet);

  const filename = '/back/planilha.txt';
  const fileData = sheetData.map(row => JSON.stringify(row)).join('\n');

  fs.writeFile(filename, fileData, err => {
    if (err) {
      console.error(err);
      res.status(400).send('arquivo mal formatado, revise os dados e tente novamente mais tarde.');
    } else {
      res.send('Arquivo salvo com sucesso.');
    }
  });
});

app.get('/', (req, res) => {
  const filePath = path.join('/back', 'planilha.txt');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(400).send('arquivo mal formatado, revise os dados e tente novamente mais tarde');
      return;
    }

    res.send(data);
  });
});

app.listen(PORT, HOST);