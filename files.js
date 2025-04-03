// import module - file system
const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.error(err);
    }
    // add toString to show data as a readable string rather than encrypted buffer
    console.log(data.toString());    
})


// execute this line first whiel read file is processing as read file can take a while
console.log('last line');



// writing files

// first argument is file path and 
// second is the text to write to file which will replace the content on file currently
// third argument is the call back function 
fs.writeFile('./docs/blog1.txt', 'Hello World!', () => {
    console.log('file 1 was written');
});

// create to a new file with the path and file name plus text
fs.writeFile('./docs/blog2.txt', 'Hello again!', () => {
    console.log('file 2 was written');
});



// directories
if (!fs.existsSync('./assests')) {
fs.mkdir('./assests', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('directory created');
});
} else {
    fs.rmdir('./assests', (err) => {
        if (err) {
            console.error(err);
        }
        console.log('directory deleted');
    });
}

// deleting files 
if (fs.existsSync('./docs/deleteme.txt')) {
    // unlink deletes the file specified in the first argument (path)
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.error(err);
        }
        console.log('file deleted');
    });
}