"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var mongoose_1 = require("mongoose");
var dotenv = __importStar(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = require("body-parser");
var Utils_1 = require("./Utils");
var Controllers_1 = require("./Controllers");
dotenv.config();
var PORT = process.env.PORT || 4000;
var app = express_1.default();
app.use(compression_1.default());
app.use(body_parser_1.json());
app.use(cors_1.default());
app.put('/edit', Controllers_1.putEditEvent);
app.delete('/delete', Controllers_1.deleteEvent);
app.post('/login-with-facebook', Controllers_1.postLoginWithFacebook);
app.post('/newEvent', Controllers_1.postNewEvent);
app.listen(PORT, function () {
    mongoose_1.connect(process.env.MONGO, Utils_1.mongoConfig)
        .then(function () { return console.log('Mongo connected'); })
        .catch(function (err) { return Promise.reject(err).then(function (err) { return console.error(err); }); });
    console.log("The server is running on Port " + PORT);
});
//# sourceMappingURL=server.js.map