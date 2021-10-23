const Link = require('../models/formLink');
require('dotenv').config();

const create = (req, res, next)=>{

  const evaluation_form = req.body.evaluation_form;
  const youtube_form = req.body.youtube_form;
  const poster_form = req.body.poster_form;
  const lobby = req.body.lobby;

  const newLink = new Link({
    evaluation_form,
    youtube_form,
    poster_form,
    lobby
  });

  newLink.save()
  .then(() => res.json(newLink))
  .catch(err => res.status(404).json('Error here:' + err));
};


const read = (req, res, next)=>{
  var judge_id = req.query.judge_id;
  Link.find({judge_id: judge_id}, (err, link) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!link) {
      return res
      .status(404)
      .json({ success: false, error: req.query.judge_id })
    }
    return res.status(200).json({ success: true, data: link })
  }).catch(err => console.log(err))
};



const readAll = (req, res, next)=>{ 
  Link.find({}, (err, link) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!link) {
      return res
      .status(404)
      .json({ success: false, error: req.query.account_id })
    }
    return res.status(200).json({ success: true, data: link})
  }).catch(err => console.log(err))
};

const update = (req, res, next)=>{

  var updateLink = {};
  if(req.body.evaluation_form){
    updateLink['evaluation_form'] = req.body.evaluation_form;
  }
  if(req.body.youtube_form){
    updateLink['youtube_form'] = req.body.youtube_form;
  }
  if(req.body.poster_form){
    updateLink['poster_form'] = req.body.poster_form;
  }
  if(req.body.lobby){
    updateLink['lobby'] = req.body.lobby;
  }
  
  Link.findByIdAndUpdate(req.body._id, updateLink, (err, link) => {
    if (err) {
      return res.status(400).json({ success: false, error: err, data:req.body })
    }
    if(link){
      return res.status(200).json({ success: true, data: req.body })
    }
  }).catch(err => console.log(err))
};

  
module.exports = {create, read, readAll, update}

