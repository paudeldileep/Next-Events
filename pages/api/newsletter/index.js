//api/newsletter

export default function handler(req, res) {
    if(req.method=='POST'){
        const userEmail=req.body.email;
        
        res.status(200).json({ email:userEmail })
    }
    else{
        res.status(200).json({ message: 'It works' })
    }
    
  }