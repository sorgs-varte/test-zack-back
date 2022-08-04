const bodyParser = require('body-parser');
const cors = require('cors');

const SignalementController = require("./controller/signalement_controller");
const BrigadeController = require("./controller/brigade_controller");

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*/**');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use(cors());
    app.use(bodyParser.json({type: '*/*'}));
    app.use(bodyParser.json({limit: '500mb'}));
    app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

    app.get("/test", (req, res) => {
        res.send("ok");
    })

    app.post("/signalement", SignalementController.createSignalement);
    app.get("/signalements", SignalementController.getAllSignalement);
    app.put("/signalement/:id", SignalementController.updateSignalement);

    app.post("/brigade", BrigadeController.createBrigade);
    app.get("/brigades", BrigadeController.getAllBrigade);
    app.put("/brigade/:id", BrigadeController.updateBrigade);
    app.delete("/brigade/:id", BrigadeController.deleteBrigade);
};