module.exports = function(app){
    const application = require('./routes/application');
    const scraper = require('./routes/scraper');
    

    app.use('/', application);
    app.use('/scrapePosts', scraper);
    
}