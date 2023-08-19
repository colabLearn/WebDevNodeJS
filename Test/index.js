//loads the express module
const express = require('express')

//Create our express server
const app = express()
const  port = 3000;

//Loads the handlebars module
const handlebars = require('express-handlebars')

//Set out app to use the handlers engine
app.set('view engine', 'handlebars')

//Set handlelbars configuration 
app.engine('handlebars', handlebars.engine({
    layoutsDir: __dirname+'/views/layouts',
}))

//Serves static files (we need it to imporat a css file)
app.use(express.static('public'))

//Sets a basic rout
app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container
    //aka "index.handlebars"
    res.render('main', {layout: 'index'})
} )

//Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`))

