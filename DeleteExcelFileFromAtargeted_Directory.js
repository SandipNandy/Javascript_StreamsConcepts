const fs = require("fs");

const dirPath="C:/Users/MyFile";

const filetype=/^[a-z0-9][-a-z0-9\x20_!()\.:,]*\.xlsx?$/i;

const fileNames = fs.readdirSync(dirPath);

console.log(fileNames);

const ExcelFileName=fileNames.filter(elem=> elem.match(filetype));
const pathToFile = "./"+ExcelFileName+"";

fs.unlink(pathToFile, function(err) {
  
  if (err) {
    
    throw err
    
  } else {
    
    console.log("Successfully deleted the file.")
  }
})
