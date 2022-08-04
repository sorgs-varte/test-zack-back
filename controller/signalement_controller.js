const Signalement = require("../schema/Signalement");
const config = require("../config");

exports.createSignalement = function (req, res) {
    if (!req.body.date
        || !req.body.creneau
        || !req.body.alerteur
        || !req.body.animal
        || !req.body.couleur
        || !req.body.adresse
        || !req.body.etat) {
        res.status(400).json({ "message": "bad request" });
    } else {

        let adresse = {
            numero: req.body.adresse.numero,
            numeroExtension: req.body.adresse.numeroExtension,
            typeVoie: req.body.adresse.typeVoie,
            nomVoie: req.body.adresse.nomVoie,
            codePostal: req.body.adresse.codePostal,
            ville: req.body.adresse.ville
        }

        let signalement = {
            date: req.body.date,
            creneau: req.body.creneau,
            alerteur: req.body.alerteur,
            animal: req.body.animal,
            couleur: req.body.couleur,
            adresse: adresse,
            statut: "Signalé",
            etat: req.body.etat,
            collier: req.body.collier
        }

        let _s = new Signalement(signalement);

        _s.save((errSignalement, signalement) => {
            if (errSignalement) res.status(500).json({ "message": "internal error" });

            let emailText = "Un " + signalement.animal + " a été signalé au " + signalement.adresse.numero
                + signalement.adresse.numeroExtension + " "
                + signalement.adresse.typeVoie + " "
                + signalement.adresse.nomVoie + " à "
                + signalement.adresse.ville;

            let mailOptions = {
                from: config.mailinterne,
                to: config.adminmail,
                subject: "Nouveau signalement",
                text: emailText
            }

            res.status(200).json({ "message": "everything ok", "signalement": signalement });
        });
    }
}

exports.getAllSignalement = function (req, res) {
    Signalement.find({}, (err, resSignalement) => {
        if (err) res.status(500).json({ "message": "internal error" });

        res.status(200).json({ "message": "ok", "signalements": resSignalement });
    })
}

exports.updateSignalement = function (req, res) {
    if (!req.params.id
        || !req.body.newSignalement) {
        res.status(400).json({ "message": "bad request" });
    } else {
        Signalement.findOneAndUpdate({ _id: req.params.id }, req.body.newSignalement, (err, resSignalement) => {
            if (err) res.status(500).json({ "message": "internal error" });

            res.status(200).json({ "message": "ok" });
        })
    }
}