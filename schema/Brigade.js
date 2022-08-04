const mongoose = require('mongoose');

let brigadeSchema = mongoose.Schema({
    code : {
        type : String
    }
},{ timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('Brigade', brigadeSchema);