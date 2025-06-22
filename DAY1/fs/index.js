const fs = require('fs');

//async. -- non blocking
//sync   -- blocking

// fs.writeFileSync("sample.txt", "Hello world this is sample content");
// fs.writeFile("sample.txt","Hello world this update file",(err)=>{
    // console.log(err)
// })

// fs.writeFile("newfile.txt", "this is a new file",err =>{
//     if(err) throw err;
//     console.log(err);
// });

const data = ["d.txt","e.txt","f.txt"];
for(const filename of data)
{
    fs.writeFile(`${filename}`,"file which is being written", err => {
        if(err) throw err;
        console.log(`${filename} written`);

    })
}

// const files = ['a.txt','b.txt','c.txt'];

// for (const filename of files)
// {
// fs.writeFile(`./trash/newtrash/hello/${filename}`,"file to be written", err => { 
//     if (err) throw err; 
//     console.log(`${filename} written`); 
//     });
//  }



// fs.readFile("sample.txt", "utf-8", (err,data)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })


// fs.appendFile("sample.txt", "\n i am new line using append", err => {console.log(err)});
// fs.unlink("sample.txt", err => {console.log(err)});

// fs.rename("sample.txt","samplerename.txt", err => { console.log(err)});
// fs.copyFile("samplerename.txt","copiedfile.txt", err => {console.log(err)});

// fs.copyFile("samplerename.txt","./DAY1/fs/copiedfile.txt", err => {console.log(err)});

// fs.mkdir("trash", err => {if(err) throw err});
// fs.mkdir("./trash/newtrash/hello", {recursive: true}, err =>{ if(err) throw err});

// fs.readdir('.',(err,files)=>{
//     if(err) throw err;
//     console.log(files);
// });

// fs.readdir('./trash',(err,files) =>{
//     if(err) throw err;
//     console.log(files);
// })

// fs.rm('./trash/newtrash/hello/p.txt', err => {if(err) throw err; console.log(err)});

// fs.rmdir('./trash/newtrash/hello', err =>{if(err) throw err; console.log(err)});

// fs.rm('./trash/newtrash/hello/', {recursive: true, force: true}), err => {
//     if ( err) throw (err);
//     console.log(err);
// }

// fs.stat('samplerename.txt',(err,stats)=> { if(err) throw err; console.log(stats.isFile(), stats.size, stats.fs, stats.mode, stats.blksize) });

// fs.watch('p.txt', (eventType,filename) => {
//     console.log(`Event: ${eventType} on file: ${filename}`);
// });

// const fspromises = require('fs').promises

// async function read() {

//     const data = await fspromises.readFile('p.txt','ascii')
//     console.log(data);
// }
// read();

// const fspromises = require('fs').promises

// async function read() {

//     const data = await fspromises.readFile('p.txt','utf8')
//     console.log(data);
// }
// read();







