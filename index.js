const express=require('express')
const cors=require('cors')
const morgan = require('morgan')
const colors= require('colors')
const mongoose=require('mongoose')
const dotenv= require ('dotenv')


dotenv.config({path: './config.env'});

require('./database/conn');


//rest object

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.json());
//Connecting Database
//mongoose.connect(mongodb+srv://voaa2003:qqNXTtGAwnF0SPRB@cluster0.2d7alxh.mongodb.net/
//)
//routes

//middleware ---link the router files to this js 

app.use(require('./router/auth') );
const PORT = process.env.PORT;
app.get('/', (req, res)=>{
    res.send('indes js')
})
app.listen(PORT, ()=>{
   console.log( 'server running on port, ${PORT}');
});


// hey adarsh