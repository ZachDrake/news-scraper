var axios = require("axios");
var cheerio = require("cheerio");

axios.get("https://old.reddit.com/r/webdev/").then(function(response) {
  var $ = cheerio.load(response.data);

  var results = [];

  $("p.title").each(function(i, element) {

    var title = $(element).text();

    var link = $(element).children().attr("href");

    results.push({
      title: title,
      link: link
    });
  });