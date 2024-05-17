import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([{
    message: "Type in your url:",
    name: "URL",
    },
  ])

  .then((answers) => {  
    const url = answers.URL;
    fs.writeFileSync('URL.txt', url, (err) =>{
        if(err) throw (err);
        console.log("File is ready");
    });
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream("qr-img.png"));
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });