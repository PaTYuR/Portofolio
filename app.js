// Imports
const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'));

// Example for other olders
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation

app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/index', (req, res) => {
   res.sendFile(__dirname + '/views/index.html')
})


// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))