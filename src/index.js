var path = require('path');
var express = require('express');
var { engine } = require('express-handlebars');

var app = express();
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(      express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
//Home,search,...

//Route
const route = require('./routes/index.js');
route(app);

app.listen(3000);
