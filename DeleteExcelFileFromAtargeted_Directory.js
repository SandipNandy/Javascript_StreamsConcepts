//Here we want to deleted a specific Excel file with '.xlsx' extension from a target directory
const fs = require("fs");
const dirPath="C:/Users/MyFile";
const t=/^[a-z0-9][-a-z0-9\x20_!()\.:,]*\.xlsx?$/i;
var fileNames = fs.readdirSync(dirPath);
console.log(fileNames);
const ExcelFileName=fileNames.filter(elem=> elem.match(t));
const pathToFile = "./"+ExcelFileName+"";
fs.unlink(pathToFile, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Successfully deleted the file.")
  }
})
