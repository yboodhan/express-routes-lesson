let express = require('express'); // require express
let layouts = require('express-ejs-layouts'); // require layouts in order to use ejs files and to detect layout.ejs in views folder
let methodOverride = require('method-override'); // allows me to use PUT and DELETE
let app = express() // creates an instance of express (a server to run on my computer)

app.set('view engine', 'ejs') // setting my view engine so I can read the ejs files
app.use(layouts) // use layouts, imported on line 2 for ejs files
app.use('/', express.static('static')) // setting the static folder as my style route, all style links start from inside "static" folder
app.use(methodOverride('_method')); // using method override, imported on line 3
app.use(express.urlencoded({ extended: false })) // reading form data as urlencoded

// turn on cats avenue, and you can choose to go down many different streets
app.use('/cats', require('./controllers/cats/cats'));


// FORMAT: app.method('/urlpath', ...)
// GET ROUTE (for READ) -- controls what the user sees when they hit a specific **url**
// url: http://localhost:3000/cats
// app.get('/cats', (req, res) => {
//     // going into the views folder, looking for a cats folder, then index.ejs file, throwing it up on screen!
//     // ** ALWAYS STARTS FROM INSIDE OF THE VIEWS FOLDER"
//     // FILE PATH, not url path! VIEWS ROOM.
//     res.render('cats/index.ejs');
// })



app.listen(3000, () => { // create instance of server and start it at port 3000
    console.log('LISTENING! 🌺')
})