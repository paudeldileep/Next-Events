//api/comments
import path from "path";

const fs = require("fs");

function getFilePath(){
    return path.join(process.cwd(), "data/comments.json");
}

function getFileData(filePath){
    const fileData = fs.readFileSync(filePath);
   return JSON.parse(fileData);
}

export default function handler(req, res) {
  if (req.method == "POST") {

    const {userEmail,userName,userComment}=req.body;
    

    const newComment = {
      id: new Date().toISOString(),
      email: userEmail,
      name: userName,
      comment: userComment,
    };
    //store data to a file
    
    const filePath=getFilePath();
    const currentData=getFileData(filePath);
    
    currentData.push(newComment);

    //write
    fs.writeFileSync(filePath,JSON.stringify(currentData));
    res.status(200).json({message:'success',currentData});

  } else if(req.method=='GET'){

    const filePath=getFilePath();
    const currentData=getFileData(filePath);


    res.status(200).json({ message: 'Success',comments:currentData });
}
}
