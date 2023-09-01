const fortune = require('./fortune')
exports.home = (req, res) => res.render('home', {layout: 'meadowlark'})

exports.about = (req, res) => 
    res.render('about', {
        fortune: fortune.getFortune(),
        layout: 'meadowlark'
    })

exports.notFound = (req, res) => res.render('404', {layout: 'meadowlark'})

exports.serverError = (err, req, res, next) => 
res.render('500', {layout: 'meadowlark'})