const path = "./";
const fs = require("fs");
const filename = "toys.json";

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}

function saveJSON(filename, json) {
  fs.writeFile("toys.json", json, "utf8", function (err) {
    if (err) {
      console.log("Cannot read JSON object.");
      return console.log(err);
    }

    console.log("Saved");
  });
}

var items = getDirectories(path);
var json = JSON.stringify(items);
saveJSON(filename, json);