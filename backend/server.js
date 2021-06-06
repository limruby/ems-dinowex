const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var multer  = require('multer');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

<<<<<<< HEAD
app.use(cors({origin: '*'}));
app.use(express.json({limit:'50mb'}));
=======


app.use(cors());
app.use(express.json());
>>>>>>> d526164 (upload sponsor company logo)

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established")
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
//get image
const uploadRouter = require('./routes/upload');
app.use('/uploads', uploadRouter)
=======
>>>>>>> d526164 (upload sponsor company logo)

>>>>>>> 335f562 (testing with uploadfilehandler)
//add routes
const accountsRouter = require('./routes/accounts');
app.use('/api/accounts', accountsRouter)

const rolesRouter = require('./routes/roles');
app.use('/api/roles', rolesRouter)

const competitorsRouter = require('./routes/competitors');
app.use('/api/competitors', competitorsRouter)

const sponsorsRouter = require('./routes/sponsors');
<<<<<<< HEAD
app.use('/api/sponsors', sponsorsRouter)
=======
app.use('/sponsors', sponsorsRouter)

<<<<<<< HEAD
const uploadRouter = require('./routes/upload');
app.use('/upload', uploadRouter)



>>>>>>> 7c0a793 (merged with alexia's branch)

=======
>>>>>>> 3e5a50c (remove unnecessary files)
app.listen(port, () => {
	console.log('Now starting at http://localhost:5000/api/hello');
});

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
