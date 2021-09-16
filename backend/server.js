const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({origin: '*'}));
app.use(express.json({limit:'50mb'}));

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established")
})
//add routes
const accountsRouter = require('./routes/accounts');
app.use('/api/accounts', accountsRouter)

const rolesRouter = require('./routes/roles');
app.use('/api/roles', rolesRouter)

const competitorsRouter = require('./routes/competitors');
app.use('/api/competitors', competitorsRouter)

const sponsorsRouter = require('./routes/sponsors');
app.use('/api/sponsors', sponsorsRouter)

const visitorsRouter = require('./routes/visitor');
app.use('/api/visitors', visitorsRouter)

const judgeRouter = require('./routes/judge');
app.use('/api/judge', judgeRouter)

const speakerRouter = require('./routes/speaker');
app.use('/api/speaker', speakerRouter)

const cartRouter = require('./routes/cart');
app.use('/api/cart', cartRouter)

const forumRouter = require('./routes/forum');
app.use('/api/forum', forumRouter)

const evaluationRouter = require('./routes/evaluation');
app.use('/api/evaluation', evaluationRouter)

const formLinkRouter = require('./routes/formLink');
app.use('/api/formLink', formLinkRouter)

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
	res.sendFile(__dirname + "/public/index.html")})

app.listen(port, () => {
	console.log('Now starting at https://vexsdev.fsktm.um.edu.my/api/hello');
});