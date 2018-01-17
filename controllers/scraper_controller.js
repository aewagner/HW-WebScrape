const request = require('request');
const cheerio = require('cheerio');


const Article = require('../models/Article');

exports.scraper = function(req, res) {
    request('https://www.reddit.com/r/china', function(error, response, html) {
        const $ = cheerio.load(html);
        $('p.title').each(function(i, element) {
            // Save the text of the element in a "title" variable
            let title = $(element).text();

            // In the currently selected element, look at its child elements (i.e., its a-tags),
            // then save the values for any "href" attributes that the child elements may have
            let link = $(element).children().attr("href");

            Article.findOne({ title: title }, function(err, match) {
                if (!match) {

                    Article.create({
                            title: title,
                            link: link
                        },
                        function(err, created) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(`the following were created ${created}`);
                            }
                        })

                }
            })
        })
        res.redirect('/');
    })
}