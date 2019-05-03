var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function(callback) {

  axios.get("https://old.reddit.com/r/webdev/").then(function (response) {
    var $ = cheerio.load(response.data);
  
    var articles = [];
  
    $("p.title").each(function (i, element) {
  
      var title = $(element).text().trim();
  
      var link = $(element).children().attr("href");
  
      var dataToAdd = {
        title: title,
        link: link
      };
  
      articles.push(dataToAdd);
    });
    callback(articles);
  });
};

module.exports = scrape;
