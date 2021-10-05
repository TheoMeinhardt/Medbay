"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const _ = require('lodash');
const apiKey = '0KywVsIRkpTgbCe3f403oH4EnyF5GqGC3F24kBFo';
async function callApi(apiKey, searchField, searchTerm, limit, count) {
    let url = `https://api.fda.gov/drug/event.json?api_key=${apiKey}&search=${searchField}:"${searchTerm}"&limit=${limit}`;
    return await axios({
        method: 'get',
        url: url,
        responseType: 'json',
    });
}
module.exports = { apiKey, callApi };
//# sourceMappingURL=data.js.map