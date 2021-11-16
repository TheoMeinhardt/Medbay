"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const apiKey = '0KywVsIRkpTgbCe3f403oH4EnyF5GqGC3F24kBFo';
async function callApi(apikey, params) {
    let url = `https://api.fda.gov/drug/event.json?api_key=${apikey}&${params}`;
    return await axios_1.default({
        method: 'get',
        url: url,
        responseType: 'json',
    });
}
module.exports = { apiKey, callApi };
//# sourceMappingURL=data.js.map