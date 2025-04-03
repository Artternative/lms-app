export const validateCreatePostData = (req,res,next) => {
    console.log(req.body);

//// title ////
    if(!req.body.title){
        return res.status(400).json({message : "กรูณาส่งข้อมูล title เข้ามาด้วย",});
    }

//// category + includes categoryList ////
    if(!req.body.category){
        return res.status(400).json({message : "กรูณาส่งข้อมูล category เข้ามาด้วย",});
    }
    const categoryList = ["Math", "English", "Biology"]
    const hascategoryList = categoryList.includes(req.body.category)
    if(!hascategoryList){
        return res.status(400).json({message : "กรูณาส่งข้อมูล category ตามที่กำหนด เช่น 'Math','English','Biology' ",});
    }

 //// email + condition ////
    if(!req.body.email){
        return res.status(401).json({message : "กรูณาส่งข้อมูล email เข้ามาด้วย"});
    }
    const email = req.body.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: "กรุณา แก้ไข รูปแบบ email address." });
      }
    

    //// content + length 500 - 1000 character ////
    if(!req.body.content){
        return res.status(401).json({message : "กรูณาส่งข้อมูล content เข้ามาด้วย"});
    }
    const charDetect = req.body.content.length 
    if(!(charDetect > 500 && charDetect < 1000) ){
        return res.status(401).json({message : 
            "กรูณาส่งข้อมูล content ที่มี length มากกว่า 500 และ น้อยกว่า 1000 "});
    }
    
  next();  
    
};