const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer  = require('multer');
const path = require ('path');

require('dotenv').config();

const app = express();

<<<<<<< HEAD
const port = process.env.PORT || 5000;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.use(cors({origin: '*'}));
app.use(express.json({limit:'50mb'}));
=======


=======
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======


>>>>>>> bdfdade (Admin login)
app.use(cors());
<<<<<<< HEAD
app.use(express.json());
>>>>>>> d526164 (upload sponsor company logo)
=======
=======
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

const port = process.env.PORT || 5000;

app.use(cors({origin: '*'}));
<<<<<<< HEAD
>>>>>>> b231f77 (https done but CORS issue for payment)
=======
>>>>>>> 4bb0d2d (merge admin login)
app.use(express.json({limit:'50mb'}));
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established")
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
//get image
const uploadRouter = require('./routes/upload');
app.use('/uploads', uploadRouter)
=======
>>>>>>> d526164 (upload sponsor company logo)

>>>>>>> 335f562 (testing with uploadfilehandler)
=======
app.get('/api/hello', (req, res) => {
=======
=======
>>>>>>> 4bb0d2d (merge admin login)
app.get('/api/hello', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
>>>>>>> b231f77 (https done but CORS issue for payment)
	res.send({ express: 'Hello From Express' });
  });
  app.post('/api/world', (req, res) => {
	console.log(req.body);
	res.send(
	  `I received your POST request. This is what you sent me: ${req.body.post}`,
	);
  });
<<<<<<< HEAD
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======

>>>>>>> bdfdade (Admin login)
=======
>>>>>>> 4bb0d2d (merge admin login)
//add routes
const accountsRouter = require('./routes/accounts');
app.use('/accounts', accountsRouter)

const rolesRouter = require('./routes/roles');
app.use('/roles', rolesRouter)

const competitorsRouter = require('./routes/competitors');
app.use('/competitors', competitorsRouter)

const sponsorsRouter = require('./routes/sponsors');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.use('/api/sponsors', sponsorsRouter)
=======
app.use('/sponsors', sponsorsRouter)
=======
app.use('/api/sponsors', sponsorsRouter)
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======
app.use('/sponsors', sponsorsRouter)
>>>>>>> bdfdade (Admin login)

<<<<<<< HEAD
const uploadRouter = require('./routes/upload');
app.use('/upload', uploadRouter)



>>>>>>> 7c0a793 (merged with alexia's branch)

=======
>>>>>>> 3e5a50c (remove unnecessary files)
app.listen(port, () => {
	console.log('Now starting at port: 5000');
});

<<<<<<< HEAD
<<<<<<< HEAD
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
	  cb(null, file.fieldname + '-' + Date.now())
	}
  })
   
  var upload = multer({ storage: storage })
  
app.post('/uploadfile', upload.single('company_logo'), (req, res, next) => {
=======

app.post('/uploadfile', upload.single('upload_file'), (req, res, next) => {
>>>>>>> 86840ba (upload file function)
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
<<<<<<< HEAD
})


=======
})
>>>>>>> 86840ba (upload file function)
=======
>>>>>>> 082b413 (upload and display company logo)
