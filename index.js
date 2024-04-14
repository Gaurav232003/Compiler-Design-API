const fs = require('fs');
const http = require('http');
const url = require('url');



const exp1 = fs.readFileSync('./cdexp/exp1.cpp','utf-8',)
const exp2 = fs.readFileSync('./cdexp/exp2.txt','utf-8',)
const exp3 = fs.readFileSync('./cdexp/exp3.txt','utf-8',)
const exp5 = fs.readFileSync('./cdexp/exp5.cpp','utf-8',)
const exp6 = fs.readFileSync('./cdexp/exp6.cpp','utf-8',)
const exp7 = fs.readFileSync('./cdexp/exp7.txt','utf-8',)
const exp8 = fs.readFileSync('./cdexp/exp8.cpp','utf-8',)
const exp9 = fs.readFileSync('./cdexp/exp9.c','utf-8',)
//SERVER

const server = http.createServer((req, res) =>{
    const pathName = req.url;
    if(pathName ==='/exp1'){
        res.end(exp1);
    }
    else if(pathName ==='/exp2'){
        res.end(exp2);
    }
    else if(pathName ==='/exp3'){
        res.end(exp3);
    }
    else if(pathName ==='/exp5'){
        res.end(exp5);
    }
    else if(pathName ==='/exp6'){
        res.end(exp6);
    }
    else if(pathName ==='/exp7'){
        res.end(exp7);
    }
    else if(pathName ==='/exp8'){
        res.end(exp8);
    }
    else if(pathName ==='/exp9'){
        res.end(exp9);
    }
    else{
        res.writeHead(404);
        res.end('Page not found!');
    }
});

const PORT = process.env.PORT || 8000;


server.listen(PORT, () => {
    console.log(`Listening to requests on port ${PORT}`);
});