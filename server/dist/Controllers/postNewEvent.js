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
var uuid_1 = __importDefault(require("uuid"));
var Utils_1 = require("../Utils");
exports.postNewEvent = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, event, user, mongoUser, timeConflict;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, event = _a.event, user = _a.user;
                return [4, Utils_1.User.findOne({ facebookId: user.facebookId })];
            case 1:
                mongoUser = _b.sent();
                event.id = uuid_1.default.v4();
                event.year = Math.floor(event.year);
                event.month = Math.floor(event.month);
                event.date = Math.floor(event.date);
                event.startTime = Math.floor(event.startTime);
                event.endTime = Math.floor(event.endTime);
                timeConflict = mongoUser.events.length >= 1
                    ? Utils_1.eventValidation(mongoUser.events, event)
                    : undefined;
                if (!(event.endTime < event.startTime)) return [3, 2];
                return [2, res.send({
                        success: false,
                        message: event.name + " can't end at " + event.endTime + " if it starts at " + event.startTime,
                        events: user.events
                    })];
            case 2:
                if (!(timeConflict !== undefined)) return [3, 3];
                return [2, res.send({
                        success: false,
                        message: timeConflict.name + " and " + event.name + " have conflicting times",
                        events: user.events
                    })];
            case 3:
                mongoUser.events.push(event);
                mongoUser.events = Utils_1.eventSort(mongoUser.events);
                return [4, mongoUser.save()];
            case 4:
                _b.sent();
                return [2, res.send({
                        success: true,
                        message: event.name + " has been saved",
                        events: mongoUser.events
                    })];
        }
    });
}); };
//# sourceMappingURL=postNewEvent.js.map