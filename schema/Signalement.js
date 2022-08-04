const mongoose = require('mongoose');

const AdresseSignalementSchema = mongoose.Schema({
    numero : {
        type : Number
    },
    numeroExtension : {
        type : String
    },
    typeVoie : {
        type : String
    },
    nomVoie : {
        type : String
    },
    codePostal : {
        type : Number
    },
    ville : {
        type : String
    }
});

let signalementSchema = mongoose.Schema({
    date : {
        type : Date
    },
    creneau : {
        type : String
    },
    alerteur : {
        type : String
    },
    animal : {
        type : String
    },
    couleur : {
        type : String
    },
    adresse : {
        type : AdresseSignalementSchema
    },
    statut : {
        type : String
    },
    collier : {
        type : Boolean
    },
    etat : {
        type : String
    }
},{ timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('Signalement', signalementSchema);