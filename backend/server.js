const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
<<<<<<< HEAD

const port = process.env.PORT || 5000;

app.use(cors({origin: '*'}));
app.use(express.json({limit:'50mb'}));
=======
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
>>>>>>> 2dbc05f (sponsor sign up updated)

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established")
})
<<<<<<< HEAD
//add routes
const accountsRouter = require('./routes/accounts');
app.use('/api/accounts', accountsRouter)

const rolesRouter = require('./routes/roles');
app.use('/api/roles', rolesRouter)

const competitorsRouter = require('./routes/competitors');
app.use('/api/competitors', competitorsRouter)

const sponsorsRouter = require('./routes/sponsors');
app.use('/api/sponsors', sponsorsRouter)

app.listen(port, () => {
	console.log('Now starting at http://localhost:5000/api/hello');
=======

//add routes
const accountsRouter = require('./routes/accounts');
app.use('/accounts', accountsRouter)

const rolesRouter = require('./routes/roles');
app.use('/roles', rolesRouter)

const competitorsRouter = require('./routes/competitors');
app.use('/competitors', competitorsRouter)

const sponsorsRouter = require('./routes/sponsors');
app.use('/sponsors', sponsorsRouter)




app.listen(port, () => {
	console.log('Now starting at port: 5000');
>>>>>>> 2dbc05f (sponsor sign up updated)
});

