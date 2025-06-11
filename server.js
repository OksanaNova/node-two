READING

const fs = require('fs');

const data = fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    console.log(data.toString());
})