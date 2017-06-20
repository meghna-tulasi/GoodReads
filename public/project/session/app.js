var app= require("../../express");

app.get('api/project/session',function (req,res){
    console.log(req.session);
    res.send(req.session);

});

