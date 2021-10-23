const Speaker = require('../models/speaker');
var ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const create = (req, res, next) => {

  const account_id = req.body.account_id;
  const title = req.body.title;
  const name = req.body.name;
  const phone_no = req.body.phone_no;
  const affiliation = req.body.affiliation;
  const email = req.body.email;
  const address_1 = req.body.address_1;
  const address_2 = req.body.address_2;
  const postcode = req.body.postcode;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const speech_title = req.body.speech_title;
  const speech_time = req.body.speech_time;
  const category = req.body.category;

  const newSpeaker = new Speaker({
    account_id,
    title,
    name,
    phone_no,
    affiliation,
    email,
    address_1,
    address_2,
    postcode,
    city,
    state,
    country,
    speech_title,
    speech_time,
    category
  });
  newSpeaker.save()
    .then(() => res.json(newSpeaker))
    .catch(err => res.status(404).json('Error here:' + err));
};

const read = (req, res, next) => {
  var account_id = JSON.parse(req.query.account_id);
  Speaker.findOne({ account_id: ObjectId(account_id) }, (err, speaker) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!speaker) {
      return res
        .status(404)
        .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: speaker })
  }).catch(err => console.log(err))
};

const readAll = (req, res, next) => {
  Speaker.find({}, {
    photo: 0,
  }, (err, speaker) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!speaker) {
      return res
        .status(404)
        .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: speaker })
  }).catch(err => console.log(err))
};

const display = (req, res, next) => {
  Speaker.find({}, (err, speaker) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!speaker) {
      return res
        .status(404)
        .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: speaker })
  }).catch(err => console.log(err))
};

const update = (req, res, next) => {
  var updateSpeaker = {};
  if (req.body.name) {
    updateSpeaker['title'] = req.body.title;
  }
  if (req.body.name) {
    updateSpeaker['name'] = req.body.name;
  }
  if (req.body.affiliation) {
    updateSpeaker['affiliation'] = req.body.affiliation;
  }
  if (req.body.email) {
    updateSpeaker['email'] = req.body.email;
  }
  if (req.body.phone_no) {
    updateSpeaker['phone_no'] = req.body.phone_no;
  }
  if (req.body.address_1) {
    updateSpeaker['address_1'] = req.body.address_1;
  }
  if (req.body.address_2) {
    updateSpeaker['address_2'] = req.body.address_2;
  }
  if (req.body.postcode) {
    updateSpeaker['postcode'] = req.body.postcode;
  }
  if (req.body.city) {
    updateSpeaker['city'] = req.body.city;
  }
  if (req.body.state) {
    updateSpeaker['state'] = req.body.state;
  }
  if (req.body.country) {
    updateSpeaker['country'] = req.body.country;
  }
  if (req.body.photo) {
    updateSpeaker['photo'] = req.body.photo;
  }
  if (req.body.speech_title) {
    updateSpeaker['speech_title'] = req.body.speech_title;
  }
  if (req.body.speech_time) {
    updateSpeaker['speech_time'] = req.body.speech_time;
  }
  if (req.body.category) {
    updateSpeaker['category'] = req.body.category;
  }

  Speaker.findByIdAndUpdate(req.body._id, updateSpeaker, (err, speaker) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data: req.body })
    }
    if (speaker) {
      return res.status(200).json({ success: true, data: req.body })
    }
  }).catch(err => console.log(err))
};

module.exports = { create, read, readAll, display, update }

