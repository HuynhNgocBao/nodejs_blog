class NewsController{
    // Get news 
    index(req,res){
        res.render('news');
    }
    show(req,res){
        res.send("new");
    }
}

module.exports = new NewsController;