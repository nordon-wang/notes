const fs = require('fs');

let readFile = function (fileName){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,function(err,data){
            if(err) reject(err);
            resolve(data);
        });
    });
};


let gen = function* (){
    let f1 = yield readFile('/file1');
    let f2 = yield readFile('/file2');
    console.log(f1);
    console.log(f2);
}

// let g = gen();
// g.next();
// g.next();
// g.next();

var asyncReadFile = async function () {
  var f3 = await readFile('/etc/fstab');
  var f4 = await readFile('/etc/shells');
  console.log(f3.toString());
  console.log(f4.toString());
};

var result = asyncReadFile();