
const express = require('express')
const app = express()
const fortunes = require('./lib/fortune')
const handlers = require('./lib/handlers')

const port = process.env.PORT || 3000

//Loads the handlebars module
const handlebars = require('express-handlebars')


//configure Handlebars view engine
app.set('view engine', 'handlebars')


/* 
 Using --- handlebars.engine --- instead of just --handlebars..
 took me a lot of time to figure out
*/
app.engine('handlebars', handlebars.engine({
      layoutsDir: __dirname+'/views/layouts',
  }))

//Serves static files (we need it to import a css file)
app.use(express.static('public'))
 
//app.get('/', (req, res) => res.render('home'))
// app.get('/', (req, res) => {
//     //Serves the body of the page aka "maind.handlebars" to the container
//     //aka "index.hanlebars"
//     res.render('home', {layout: 'meadowlark'})
// })
app.get('/', handlers.home)

// app.get('/about', (req, res) => {
//     const randomFortune = 
//     fortunes[Math.floor(Math.random()*fortunes.length)]
//     res.render('about', {
//         layout: 'meadowlark',
//         fortunes: fortunes.getFortune()

//     })
    
// })
app.get('/about', handlers.about)
    

//custom 404 page
// app.use((req, res) => {
//     res.status(404)
//     res.render('404', {layout: 'meadowlark'})
// })
app.use(handlers.notFound)

//custom 500 page
// app.use((err, req, res, next) => {
//     console.error(err.message)
//     res.type('text/plain')
//     res.status(500)
//     res.render('500', {layout: 'meadowlark'})
// })
app.use(handlers.serverError)

app.listen(port, () => console.log(
    `Express started on http://localhost:${port};`+
    `press Ctrl-C to terminate.`))

