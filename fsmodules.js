const{readFileSync}=require('fs');
let fileContent=readFileSync('./welcome.txt','utf-8');
console.log(fileContent);