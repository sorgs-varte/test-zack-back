const Brigade = require("../schema/Brigade");

exports.createBrigade = function (req, res) {
    if(!req.body.code){
        res.status(400).json({"message":"bad request"});
    } else {
        let brigade = {
            code : req.body.code
        }

        let _b = new Brigade(brigade);

        _b.save((errBrigade, brigade) => {
            if (errBrigade) res.status(500).json({"message":"internal error during save adresse"});

            res.status(200).json({"message":"everything ok", "brigade":brigade});
        })
    }
};

exports.getAllBrigade = function (req, res) {
    Brigade.find({}, (err, resBrigade) => {
        if (err) res.status(500).json({"message":"internal error"});

        res.status(200).json({"message":"ok", "brigades":resBrigade});
    })
};

exports.updateBrigade = function (req, res) {
    if (!req.params.id
        || !req.body.newBrigade) {
        res.status(400).json({"message":"bad request"});
    } else {
        Brigade.findOneAndUpdate({_id:req.params.id}, req.body.newBrigade, (err, oldBrigade) => {
            if (err) res.status(500).json({"message":"internal error"});

            res.status(200).json({"message":"ok"});
        })
    }
};

exports.deleteBrigade = function (req, res) {
    Brigade.findOneAndRemove({_id:req.params.id}, (err, resDelete) => {
        if (err) res.status(500).json({"message":"internal error"});

        res.status(200).json({"message":"ok"});
    })
};