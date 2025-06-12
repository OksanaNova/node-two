// READING

const fs = require('fs');

const data = fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    console.log(data.toString());
})

// CREATE A NEW FILE       

const fs = require('fs');

fs.writeFile('newFile.html', 'This is my new file', function(err) {
    if(err) throw err;
    console.log('NEW FILE CREATED')
})

// APPENDING NEW INFORMATION

const fs = require('fs');

fs.appendFile('newFile.html', 'New information', function(err) {
    if (err) throw err;
    console.log('FILE UPDATED')
})

// DELETING A FILE

const fs = require('fs');

fs.unlink('newFile.html', function(err) {
    if (err) throw err;
    console.log('FILE DELETED')
})