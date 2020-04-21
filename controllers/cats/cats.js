let router = require("express").Router();

// every url path created in here using a GET/ route has the word cats/ in front of it
// ACCESS: URL!
router.get('/', (req, res) => {
    // going into the views folder, looking for a cats folder, then index.ejs file, throwing it up on screen!
    // ** ALWAYS STARTS FROM INSIDE OF THE VIEWS FOLDER"
    // FILE PATH, not url path! VIEWS ROOM.
    console.log('inside the GET/ route for cats')
    res.render('cats/new.ejs'); // res.render an ejs file (html!)
})

// POST route gets sent info from **form** and does stuff to do (usually creating something new in database)
// when i submit a form with the action set to /whateverisbelow, i want you to run this route!
// ACCESS: SUBMITTING A FORM!
router.post('/postroute1', (req, res) => { // this /path has nothing to do with a page!
    console.log('i am getting to my post route 1')
    // do database stuff here to create a new cat!
    res.redirect('/cats') // redirect to this url!
})

router.post('/postroute2', (req, res) => { // this /path has nothing to do with a page!
    console.log('i am getting to my post route 2')
    res.redirect('/cats')
})

// PUT is for updating, editing etc.
// ACCESS: SUBMITTING A FORM! NOTHING TO DO WITH FILES!
router.put('/postroute2', (req, res) => { // this /path has nothing to do with a page!
    console.log('i am getting to my PUT route 2')
    res.redirect('/cats') // res.direct has to with url! res.render has to do with putting up an EJS file
})

// DELETE is for destroying
// ACCESS: SUBMITTING A FORM!
router.delete('/postroute2', (req, res) => { // this /path has nothing to do with a page!
    console.log('i am getting to my DELETE route 2')
    res.redirect('/cats')
})



module.exports = router;