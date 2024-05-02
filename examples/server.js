const express = require('express');
const app = express();
const tableToHtml = require('../src/deprecated/table-to-html');
const { extractRelationsTable } = require('../src/deprecated/extract');
const path = require('path');

const dataRelativePath = '../data';
const dataAbsolutePath = path.join(__dirname, dataRelativePath);

//json data is read and converted to a html table on 'require'
//actually on the first 'require' of this module during the program run.
//(subsequent calls get the cached result)
const tableHtml = require('../src/deprecated/read');

app.get('/', (req, res) => {
    
    // HTML-Seite an den Client senden
    res.send(tableHtml);
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server gestartet auf http://localhost:${PORT}`);
});