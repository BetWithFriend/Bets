var cheerio = require('cheerio')
var fetch = require('node-fetch');


//fetch('http://www.betexplorer.com/soccer/world/world-cup/')
//    .then(res => res.text())
//    .then(body => {
//      const $ = cheerio.load(body);
//
//      $(".table-main").find("tr").each(function(i, elm) {
//        var elm = $(elm)
//        console.log($(elm).find('.in-match').text())
//        console.log($(elm).find('.h-text-right').text())
//
//
////        console.log($(this).text())
//      });
//    });

fetch('http://www.skysports.com/world-cup-table')
    .then(res => res.text())
    .then(body => {
      const $ = cheerio.load(body);

      $(".standing-table__table").each(function(i, elm) {
        var elm = $(elm)

        console.log("title:" + elm.find("caption").text())

        console.log("title:" + elm.find("thead").text())
//        console.log("row:" + elm.find(".standing-table__row"))

        elm.find(".standing-table__row").each(function(idx, el) {
//            if (idx <= 0) return
            var el = $(el)

            console.log()

            var row = {
              position: el.find("td:nth-child(1)").text(),
              team: el.find("td:nth-child(2)").text().replace(/[\n\t\r]/g,"").trim(),
              pl:	el.find("td:nth-child(3)").text(),
              w: el.find("td:nth-child(4)").text(),
              d: el.find("td:nth-child(5)").text(),
              l: el.find("td:nth-child(6)").text(),
              f: el.find("td:nth-child(7)").text(),
              a: el.find("td:nth-child(8)").text(),
              gd:	el.find("td:nth-child(9)").text(),
              pts: el.find("td:nth-child(10)").text()
            }

            console.log(row)
        });
      });

    });
//
//fetch('http://www.betexplorer.com/soccer/world/world-cup/').then(res => {
//    console.log(res.text())
//    const $ = cheerio.load(res)
//    console.log("1")
//    debugger
//    console.log("2")
//
////    var rows = $(".participant_name.col_participant_name.col_name").find("tr");
////    for (var i = 0; rows.length; i++) {
////        var current = rows[i];
////        var title = $(current).children("td a").text();
////        var text = $(current).children("td:nth-child(2)").text();
////        console.log(title + " " + text + "\n");
////
//
//    $('#table-type-1').children().find('.team_name_span').each(function(i, elm) {
//      console.log("i="+i)
//      console.log($(this).text())
//    });
//  });
////    .then(body => console.log(body));



