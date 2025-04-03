// import module
const fs = require('fs');


// READ STREAMS 

// stream to read from blog 3
// small packages given at a time so that we can use them faster
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' }); // encoding: utf8 allows data to be readable when pulled automatically

// WRITE STREAMS
const writeStream = fs.createWriteStream('./docs/blog4.txt');



/*  Commented out to do piping below! 

// .on is a event listener for data
readStream.on('data', (chunck) => {
    // data separated by NEW CHUNK string
    console.log('------- NEW CHUNCK ----------------');
    // bytes output
    console.log(`Received ${chunck.length} bytes of data.`);
    // buffer output
    console.log(chunck);
    // data in readable format
    // not needed as encoding UTF 8 convers to readable format automatically --> console.log(chunck.toString());

    // write to file
    writeStream.write('\nNEW CHUNCK\n');
    writeStream.write(chunck);
});

*/


// piping

// reading data from file in readstream then piping the data to the file on the write stream. 
readStream.pipe(writeStream);







