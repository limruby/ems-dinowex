const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formLinkSchema = new Schema({
  evaluation_form:{
    type: String,
  },
  youtube_form:{
    type: String,
  },
  poster_form:{
    type: String,
  },
  lobby:{
    type: Boolean,
    default: false
  }
 
}, {
  timestamps: true,
});

const FormLink = mongoose.model('formLink', formLinkSchema);

module.exports = FormLink;