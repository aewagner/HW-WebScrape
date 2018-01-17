const Article = require('../models/Article');

exports.index = function(req, res){
    Article
    .find()
    .then(function(allArticles){
        console.log(`these are all the Article retrieved ${allArticles}`);
        res.render('index', {article: allArticles})
    });
}

