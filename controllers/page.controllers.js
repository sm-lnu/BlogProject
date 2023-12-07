const db = require('../db/db.js')

class PageController{
    async mainPage(req,res){
        res.render("index",{title: "Головна сторінка"});
    }
}

module.exports = new PageController()