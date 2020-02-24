const express = require('express');
const hbs = require('hbs');

//import {makeGrid} from './helper_scripts/grid'
//const makeGrid = require('./helper_scripts/grid');
var grid = require('./helper_scripts/grid');

const app = express();



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));


hbs.registerHelper('ptag', (num, words)=>{
    var str='';
    for(let i=0; i < num; i++){
        str+='<p>';
            str+=words;
        str+='</p>';
    }

    return new hbs.handlebars.SafeString(str);

})

app.get('/index', (req, res)=> {
    res.render('index', {title:"Index Page"});
})

app.post('/results',(req,res)=>{
    res.render('results.hbs',{
        gridSize:req.body.textNumber,
        gridBody:grid.gridTools.makeGrid(req.body.textNumber)
    })
})

app.use((req, res, next)=>{
    req.error = new Error('Page not found!');
    req.error.status = 404;
    next();
})

app.get("/*", (req, res)=>{
    res.render('error.hbs',{
        gridOf404s:grid.gridTools.make404s()
    })
})

app.listen(3000, ()=> {
    console.log('Server is running at localhost:3000');
});
