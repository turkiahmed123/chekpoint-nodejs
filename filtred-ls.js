const fs = require("fs");
const extension = process.argv[3];
const patern = RegExp("\\." + extension + "$");

file = fs.readdir(process.argv[2], function (err, files) {
  if (err) console.log("error", err);
  else
    for (let i = 0; i < files.length; i++)
      if (patern.test(files[i])) console.log(files[i]);
});