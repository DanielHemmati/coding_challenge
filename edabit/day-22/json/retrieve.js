

const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'data.json'));

let data = JSON.parse(rawdata);
console.log(data['prizes'][5]['laureates'][1]['firstname']);
// console.log(data.model.age);