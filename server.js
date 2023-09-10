/* URL:
seneca-student-app-railway-production.up.railway.app
*/

const port = process.env.PORT || 8080;

const express = require("express")
const app = express();
const dataService = require('./data-service.js');
const bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.set('views', './sub/jade');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./sub'));

const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

const Sequelize = require ('sequelize');
const clientSessions = require('client-sessions');

// Setup client-sessions
app.use(clientSessions({
    cookieName: "session", // this is the object name that will be added to 'req'
    secret: "search_project_sgme2018", // this should be a long un-guessable string.
    duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)
    activeDuration: 1000 * 60 // the session will be extended by this many ms each request (1 minute)
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

app.use((req, res, next) => {
    let route = req.baseUrl + req.path;
    app.locals.activeRoute = (route == "/") ? "/" : route.replace(/\/$/, "");
    next();
});

app.get('/main', (req, res) => {
    dataService.getAll().then((data) => {
        res.render('filter', {data : data});
    }).catch((err) => {
        console.log(err)
    });
});

app.get('/filter/code/:code', (req, res) => {
    var code = req.params.code;

    for(let i=0; i<arr.length; i++){
        if(code == arr[i].code){
            res.render('result', {code : arr[i].code, name : arr[i].name, semester : arr[i].semester, prerequisite : arr[i].prerequisite,
            required : arr[i].required, recommendedProfessor : arr[i].recommendedProfessor, isGeneral : arr[i].isGeneral, desc : arr[i].desc});
        }
    }
})

app.get('/', (req, res) => {
    res.redirect('/main');
});

app.get('*', (req, res) => {
    res.status(404).send("Page Not Found");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})