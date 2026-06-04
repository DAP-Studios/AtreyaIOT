const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Atreya_Company_Profile.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_output.txt', data.text);
    console.log('PDF text extracted to pdf_output.txt');
});
