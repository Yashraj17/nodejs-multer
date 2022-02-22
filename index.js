const express =require('express')
const router = require('./Route/web')
const connectDb = require('./Database/dbconfig')
const bodyParser = require('body-parser');
const app = express();
const url = 'mongodb://localhost/gallery';
connectDb(url);

const urlEncoded = bodyParser.urlencoded({extended:false});
app.use(urlEncoded)
app.use(express.static('./images'))
app.set('view engine','pug')
app.set('views','./views')
app.use('/',router)


app.listen(8081)