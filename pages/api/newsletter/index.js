//api/newsletter

//newsletter ; api/newsletter

import path from "path";

const fs = require("fs");

function getFilePath(){
    return path.join(process.cwd(), "data/subscriptions.json");
}

function getFileData(filePath){
    const fileData = fs.readFileSync(filePath);
   return JSON.parse(fileData);
}

export default function handler(req, res) {
    if(req.method=='POST'){
        const userEmail=req.body.email;
        
        const newSub = {
            id: new Date().toISOString(),
            email: userEmail,
          };
          //store data to a file
          
          const filePath=getFilePath();
          const currentData=getFileData(filePath);
          
          currentData.push(newSub);
      
          //write
          fs.writeFileSync(filePath,JSON.stringify(currentData));
          res.status(200).json({message:'success',currentData});
    }
    else if(req.method=='GET'){

        const filePath=getFilePath();
        const currentData=getFileData(filePath);


        res.status(200).json({ message: 'Success',subs:currentData });
    }
    
  }