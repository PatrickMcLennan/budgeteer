"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var EventSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: 'Please enter a name for the event.'
    },
    location: {
        type: String,
        required: 'Please provide a location'
    },
    description: String,
    year: {
        type: Number,
        required: 'Please provide a year.'
    },
    month: {
        type: Number,
        required: 'Please provide a month'
    },
    day: {
        type: Number,
        required: 'Please provide a day'
    },
    date: {
        type: Number,
        required: 'Please provide a date'
    },
    startTime: {
        type: Number,
        required: 'Please enter a start time for the event.'
    },
    endTime: {
        type: Number,
        required: 'Please enter an end time for the event.'
    },
    id: {
        type: String,
        required: 'No I.D has been entered.'
    },
    cost: {
        type: Number,
        required: 'Please enter the events cost'
    }
}, { collection: 'events' });
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    facebookId: {
        type: Number,
        required: true
    },
    accessToken: {
        type: String,
        required: true
    },
    events: [EventSchema]
}, { collection: 'users' });
exports.User = mongoose_1.model('User', UserSchema);
exports.Event = mongoose_1.model('Event', EventSchema);
//# sourceMappingURL=schemas.js.map