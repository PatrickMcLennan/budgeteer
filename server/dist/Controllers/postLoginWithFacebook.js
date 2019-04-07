"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var Utils_1 = require("../Utils");
exports.postLoginWithFacebook = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, accessToken, userID, user, userJSON, userExists, newUser;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, accessToken = _a.accessToken, userID = _a.userID;
                return [4, node_fetch_1.default("https://graph.facebook.com/v3.2/me?access_token=" + accessToken + "&method=get&pretty=0&sdk=joey&suppress_http_code=1")];
            case 1:
                user = _b.sent();
                return [4, user.json()];
            case 2:
                userJSON = _b.sent();
                if (!(userJSON.id === userID)) return [3, 7];
                return [4, Utils_1.User.findOne({ facebookId: userID })];
            case 3:
                userExists = _b.sent();
                if (!userExists) return [3, 4];
                res.json({
                    status: 200,
                    data: 'Logged in successfully.',
                    user: userExists
                });
                return [3, 6];
            case 4:
                newUser = new Utils_1.User({
                    facebookId: userID,
                    name: userJSON.name,
                    accessToken: accessToken,
                    events: []
                });
                return [4, newUser.save()];
            case 5:
                _b.sent();
                res.json({
                    status: 200,
                    data: 'New user has been registered + logged in.',
                    user: newUser
                });
                _b.label = 6;
            case 6: return [3, 8];
            case 7:
                res.json({ status: 'error', data: 'something real wrong here.' });
                _b.label = 8;
            case 8: return [2];
        }
    });
}); };
//# sourceMappingURL=postLoginWithFacebook.js.map