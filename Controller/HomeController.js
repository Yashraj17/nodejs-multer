const uploadModel = require('../Model/uploads')
class HomeController{
    static index = async (req,res)=>{
        try {
            uploadModel.find({},function (error,results) {
                if (error) {
                    console.log('data not fetch');
                }
                else{
                    res.render('home',{data:results})
                }
            })
        } catch (error) {
            console.log(error);
        }
       
    }
    static insert =async (req,res)=>{
        try {
            var uploadCollection = new uploadModel({
                name:req.body.name,
                image:req.file.filename
            })
            await uploadCollection.save();
            console.log(req.file.filename);
            console.log('data inserted successfully');
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports= HomeController;