const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    booth_id: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
        required: true 
    },
    account_id: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Forum = mongoose.model('Forum', forumSchema);
module.exports = Forum;